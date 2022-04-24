import "./questions.scss"
import React, { useState, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';


export default function Questions({ data}) {
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
    const [updateCheckedState, setUpdateCheckedState] = useState([]);
    const history = useHistory();
    console.log(updateCheckedState);
  
    useEffect(() => {
    radiosWrapper.current.querySelectorAll('input:checked').forEach( el => el.checked = false );
    }, [data]);
    
    const changeHandler = () => {
        
        const sanguine = data.sanguine.filter(e => updateCheckedState.includes(e));
        const choleric = data.choleric.filter(e => updateCheckedState.includes(e));
        const melancholic = data.melancholic.filter(e => updateCheckedState.includes(e));
        const phlegmatic = data.phlegmatic.filter(e => updateCheckedState.includes(e));

        const result = Math.max(sanguine.length,choleric.length,melancholic.length,phlegmatic.length);

        switch(result){
          case sanguine.length:
            history.push('/sanguine');
            console.log('entered in sanguine');
            break;
          case choleric.length:
            history.push('/choleric');
            console.log('entered in choleric');

            break;
          case melancholic.length:
            history.push('/melancholic');
            console.log('entered in melancholic');

            break;
          case phlegmatic.length:
            history.push('/phlegmatic');
            console.log('entered in phlegmatic');

            break;
          default:
        }
        if(error) {
          setError('');
        }
    }

  
    return(
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2 className="mb-5">{data.question}</h2>
            <div className="control" ref={radiosWrapper}>
              {data.choices.answer.map((choice, i) => (
                <label className="radio has-background-light" key={i}>
                  <input type="checkbox" name="answer" value={choice} onChange={() => updateCheckedState.includes(i) ? setUpdateCheckedState(updateCheckedState.filter(e => e !== i)): setUpdateCheckedState( arr => [...arr, i])}/>
                  {choice}
                </label>
              ))}
            </div>
            {error && <div className="has-text-danger">{error}</div>}
            <button className="link" onClick={changeHandler} >Resultado</button>
          </div>
        </div>
      </div>
    );
  }
  

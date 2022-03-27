import "./questions.scss"
import React, { useState, useEffect, useRef} from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function Questions({ data}) {
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
    const updateCheckedState = [];
    const [temperament, SetTemperament] = useState('');

  
    useEffect(() => {
    radiosWrapper.current.querySelectorAll('input:checked').forEach( el => el.checked = false );
    }, [data]);
    
    const changeHandler = (position) => {
          if(!updateCheckedState.includes(position)){
            updateCheckedState.push(position);
        }else if(updateCheckedState.includes(position)){
          const index = updateCheckedState.indexOf(position);
          updateCheckedState.splice(index, 1);
        }
        const sanguine = data.sanguine.filter(e => updateCheckedState.includes(e));
        const choleric = data.choleric.filter(e => updateCheckedState.includes(e));
        const melancholic = data.melancholic.filter(e => updateCheckedState.includes(e));
        const phlegmatic = data.phlegmatic.filter(e => updateCheckedState.includes(e));

        const result = Math.max(sanguine.length,choleric.length,melancholic.length,phlegmatic.length);
        
        switch(result){
          case sanguine.length:
            SetTemperament('/sanguine');
            break;
          case choleric.length:
            SetTemperament('/choleric');
            break;
          case melancholic.length:
            SetTemperament('/melancholic');
            break;
          case phlegmatic.length:
            SetTemperament('/phlegmatic');
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
                  <input type="checkbox" name="answer" value={choice} onChange={() => changeHandler(i)} />
                  {choice}
                </label>
              ))}
            </div>
            {error && <div className="has-text-danger">{error}</div>}
            <Link className="link" to={temperament}>Resultado</Link>
          </div>
        </div>
      </div>
    );
  }
  

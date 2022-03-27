import {useState} from "react";
import "./app.scss"
import HomePage from "./components/home/HomePage";
import Recomendations from "./components/home/recomendations/Recomendations"
import Questions from "./components/home/questions/Questions";
import Sanguine from "./components/home/sanguine/Sanguine";
import Melancholic from "./components/home/melancholic/Melancholic";
import Choleric from "./components/home/choleric/Choleric";
import Phlegmatic from "./components/home/phlegmatic/Phlegmatic";
import quizData from './components/data/quiz.json';

import 'bulma/css/bulma.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/recomendations" exact>
          <Recomendations/>
        </Route>
        <Route path="/questions" exact>
          <Questions
          data={quizData.data[activeQuestion]}
          numberOfQuestions={quizData.data.length}
          onSetActiveQuestion={setActiveQuestion}
          />
        </Route>
        <Route path="/sanguine" exact>
          <Sanguine/>
        </Route>
        <Route path="/melancholic" exact>
          <Melancholic/>
        </Route>
        <Route path="/choleric" exact>
          <Choleric/>
        </Route>
        <Route path="/phlegmatic" exact>
          <Phlegmatic/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
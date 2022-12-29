import React, {useEffect, useState} from 'react';
import './App.css';
import FinalsCheckers from './components/finals-checker';
import GradeChecker from './components/grade-checker';

function App() {

  const [display, setDisplay] = useState(null);

  useEffect(() => {
    console.log(display);
  })

  function clickFinalChecker() {
    setDisplay(<FinalsCheckers></FinalsCheckers>);
  }

  function clickGradeChecker() {
    setDisplay(<GradeChecker></GradeChecker>)
  }

  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <div>
        <button className="choose" onClick={clickGradeChecker}>Grade Checker</button>
        <button className="choose" onClick={clickFinalChecker}>Final Grade Checker</button>
      </div>
      <div>
        {display}
      </div>
    </div>
  );

}

export default App;

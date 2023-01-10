import React, {useEffect, useState} from 'react';
import './App.css';
import FinalsCheckers from './components/finals-checker';
import GradeChecker from './components/grade-checker';
import About from './components/about';

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

  function clickAbout() {
    setDisplay(<About></About>)
  }

  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <div>
      <ul className="topnav">
        <li><a onClick={clickGradeChecker}>Grade Calculator</a></li>
        <li><a onClick={clickFinalChecker}>Final Calculator</a></li>
        <li><a onClick={clickAbout}>About</a></li>
      </ul>
        {display === null  &&
        <div>
            <h1 style={{color:"white"}}>Choose an option</h1>
            <button className="choose"  onClick={clickGradeChecker}>Calculate Grade</button>
            <button className="choose" onClick={clickFinalChecker}>Final Grade Checker</button>
          </div>
        }

        
      </div>
      <div>
        {display}
      </div>
    </div>
  );

}

export default App;

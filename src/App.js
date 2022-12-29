import './App.css';
import FinalsCheckers from './components/finals-checker';

function App() {

  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <div>
        {/* <button className="choose">Final Grade Checker</button>
        <button className="choose">Grade Predictor</button> */}
      </div>
      <div className="Finals">
        <h1>Final Grade Checker</h1>
        <FinalsCheckers></FinalsCheckers>
      </div>
    </div>
  );

}

export default App;

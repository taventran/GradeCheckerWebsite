import React, {useState, useEffect} from 'react';
import './components.css';


function FinalsChecker() {

    const [ currentGrade, setCurrentGrade ] = useState('');
    const [desiredGrade, setDesiredGrade ] = useState('');
    const [ finalWorth, setFinalWorth ] = useState('');
    const [ gradeRequired, setGradeRequired] = useState(null);

    useEffect(() => {
        console.log('gradeRequired: ', gradeRequired);
    }, [gradeRequired]);

    function whenClick() { // Calculates needed score
        let neededScore = (desiredGrade - currentGrade * (1-finalWorth/100)) / (finalWorth/100);
        console.log(neededScore);
        setGradeRequired(neededScore.toFixed(3));
    }

    return (
        <React.Fragment>
            <div className="Finals">
                <h1>Final Grade Checker</h1>
                <h3>Your current grade</h3>
                <input placeholder="current grade" value={currentGrade} onChange={evt => setCurrentGrade(evt.target.value)}></input>
                <h3>Your desired grade</h3>
                <input placeholder="desired grade" value={desiredGrade} onChange={evt => setDesiredGrade(evt.target.value)}></input>
                <h3>Your final's worth</h3>
                <input placeholder="final's worth" value={finalWorth} onChange={evt=> setFinalWorth(evt.target.value)}></input>
                <br/>
                <br/>
                <button onClick={whenClick}>Calculate</button>
                <h4>Grade Required: {gradeRequired}</h4>
            </div>
        </React.Fragment>
    )

}

export default FinalsChecker;
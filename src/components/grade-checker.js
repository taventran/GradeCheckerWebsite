import React, {useState, useEffect} from 'react';


function GradeChecker() {
    var criteria1 = [];
    const [num, setNum] = useState(0);
    const [criterias, setCriterias] = useState([]);
    const [gradingCriteriaName, setGradingCriteriaName] = useState("");
    const [gradingCriteriaWeight, setGradingCriteriaWeight] = useState("");

    useEffect(() => {

    }, [criterias])

    function createNewCriteria() {
        
        var newCriteria = {id: num, name: gradingCriteriaName, weight: gradingCriteriaWeight };
        criteria1.push(newCriteria);
        setCriterias(criterias.concat(newCriteria));
        setNum(num + 1);
        console.log(num);
    }


    return <React.Fragment>
        <div className="Finals">
            <h1>Grade Checker</h1>
            <input type="text" value={gradingCriteriaName} onChange={evt => setGradingCriteriaName(evt.target.value)}/>
            <input type="text" value={gradingCriteriaWeight} onChange={evt => setGradingCriteriaWeight(evt.target.value)}/>
            <button onClick={createNewCriteria}>SUBMIT</button>
        </div>

        <div>
            {criterias.map(criteria => {
                return (
                    <div key={criteria.id}>
                        <h2> Name: {criteria.name} </h2>
                        <h2> Weight: {criteria.weight} </h2>
                    </div>
                )
            })}
        </div>
    </React.Fragment>
}

export default GradeChecker;
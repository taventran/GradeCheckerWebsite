import React, {useState, useEffect} from 'react';
import './components.css';


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
        setGradingCriteriaName("");
        setGradingCriteriaWeight("")
        console.log(num);
    }


    return <React.Fragment>
        <div className="Finals">
            <h1>Grade Checker</h1>
            <h3> Name of the criteria </h3>
            <input type="text" placeholder="Name" value={gradingCriteriaName} onChange={evt => setGradingCriteriaName(evt.target.value)}/>
            <br/>
            <h3> Criteria's Weight </h3>
            <input type="text" placeholder="Weight" value={gradingCriteriaWeight} onChange={evt => setGradingCriteriaWeight(evt.target.value)}/>
            <br/>
            <br/>
            <button onClick={createNewCriteria}>SUBMIT</button>
        </div>
        {criterias.length !== 0 &&
            <div className="Criteria">
                <table>
                    <h6>
                        Grading Criteria
                    </h6>
                    {criterias.map(criteria => {
                        return(
                            <div className="tableText" key={criteria.id}>
                                <tr>
                                <th className="tableText"> {criteria.name}: </th>
                                <td className="tableText">  {criteria.weight}% </td>
                                </tr>
                            </div>
                        )
                    })}   
                </table>
            </div>
        }   

    </React.Fragment>
}

export default GradeChecker;
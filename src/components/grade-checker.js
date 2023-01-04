import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './components.css';


function GradeChecker() {
    var criteria1 = [];
    const [doneAddingCriteria, setDoneAddingCriteria] = useState(false);
    const [num, setNum] = useState(0);
    const [criterias, setCriterias] = useState([]);
    const [gradingCriteriaName, setGradingCriteriaName] = useState("");
    const [gradingCriteriaWeight, setGradingCriteriaWeight] = useState("");
    const [gradeAverage, setGradeAverage] = useState("");
    const [doneAddingGrades, setDoneAddingGrades] = useState(false);

    // useEffect(() => {

    // }, [criterias])

    function createNewCriteria() {
        var newCriteria = {id: num, name: gradingCriteriaName.toUpperCase(), weight: gradingCriteriaWeight };
        criteria1.push(newCriteria);
        setCriterias(criterias.concat(newCriteria));
        setNum(num + 1);
        setGradingCriteriaName("");
        setGradingCriteriaWeight("")
        console.log(num);
    }

    function doneCreating() {
        setDoneAddingCriteria(true);
    }

    const removeClicked = criteriaID => {
        const newCriterias = criterias.filter((criterias) => criterias.id !== criteriaID);
        setCriterias(newCriterias);
    }


    return <React.Fragment>
        
        { doneAddingCriteria === false &&
            <div className="Finals">
                <h1>Grade Checker</h1>
                <h3> Name of the criteria </h3>
                <input type="text" placeholder="Name" value={gradingCriteriaName} onChange={evt => setGradingCriteriaName(evt.target.value)}/>
                <br/>
                <h3> Criteria's Weight </h3>
                <input type="text" placeholder="Weight" value={gradingCriteriaWeight} onChange={evt => setGradingCriteriaWeight(evt.target.value)}/>
                <br/>
                <br/>
                <button onClick={createNewCriteria}>Add Criteria</button>
                <button onClick={doneCreating}> Finished Adding </button>
            </div>
         }  
        { criterias.length !== 0 && doneAddingCriteria === false && // Displays table of all criteria
            <div className="Criteria">
                <table>
                    <h6>
                        Grading Criteria
                    </h6>
                    {criterias.map(criteria => {
                        return(
                            <div key={criteria.id}>
                                <tr className="tableText">
                                <th className="tableText"> {criteria.name}:&nbsp; </th>
                                <td className="tableText">    {criteria.weight}% </td>
                                <FontAwesomeIcon className="icon" icon={faTrash} onClick= {() => removeClicked(criteria.id)} />
                                </tr>
                            </div>
                        )
                    })}   
                </table>
            </div>
        }   
        {
            doneAddingCriteria && // Getting grade average of all materials
            <div className="FullTable">
                <table>
                    <h2>
                        Grading Criteria
                    </h2>
                    {criterias.map(criteria => {
                        return(
                            <div className="tableText2" key={criteria.id}>
                                <tr>
                                <th className="tableText2"> {criteria.name}:&nbsp; </th>
                                <td className="tableText2">    {criteria.weight}% </td>
                                <td>  &nbsp; &nbsp; Grade Average: {} </td>
                                </tr>
                            </div>
                        )
                    })}   
                </table>
            </div>
           
        }


        { doneAddingGrades && // Getting predicted grade
            <div className="Finals">
                <h1>Grade Checker</h1>
                <h3>New Criteria Grade</h3>
                <input type="text" placeholder="which criteria"/>
                <h3>Projected Grade</h3>
                <input type="text" placeholder="grade"/>
                <br/>
                <br/>
                <button> submit </button>

            </div>
        }
    </React.Fragment>
}

export default GradeChecker;
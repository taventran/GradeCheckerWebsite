import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './components.css';


function GradeChecker() {
    var criteria1 = [];

    const [curID, setCurID] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [doneAddingCriteria, setDoneAddingCriteria] = useState(false);
    const [num, setNum] = useState(0);
    const [criterias, setCriterias] = useState([]);
    const [gradingCriteriaName, setGradingCriteriaName] = useState("");
    const [gradingCriteriaWeight, setGradingCriteriaWeight] = useState("");
    const [gradeAverage, setGradeAverage] = useState("");
    const [doneAddingGrades, setDoneAddingGrades] = useState(false);

    useEffect(() => {
        console.log('criterias', criterias);
    }, [criterias]);

    function createNewCriteria() {
        var newCriteria = {id: num, name: gradingCriteriaName.toUpperCase(), weight: gradingCriteriaWeight};
        criteria1.push(newCriteria);
        setCriterias(criterias.concat(newCriteria));
        setNum(num + 1);
        setGradingCriteriaName("");
        setGradingCriteriaWeight("")
        console.log(num);
    }

    function doneCreating() {
        if (doneAddingCriteria === false) {
            setDoneAddingCriteria(true);
        }
        else {
            setDoneAddingCriteria(false);
        }
    }

    function doneGrades() {
        if (doneAddingGrades === false) {
            setDoneAddingGrades(true);
        }
        else {
            setDoneAddingGrades(false);
        }
    }

    const removeClicked = criteriaID => {
        const newCriterias = criterias.filter((criterias) => criterias.id !== criteriaID);
        setCriterias(newCriterias);
    }

    const updateClick = criteriaID =>  {
        setIsShown(true);
        const curCriteria = criterias.filter((criterias) => criterias.id === criteriaID);
        setCurID(curCriteria[0]);
    }

    const updateNewCriteria = criteriaID => {
        const tempCriterias = criterias.find((criterias) => criterias.id === criteriaID);
        console.log(tempCriterias.id);
        let newCriterias = criterias.filter((criterias) => criterias.id !== criteriaID);
        const changeCriteria = {id: tempCriterias.id, name: tempCriterias.name, weight: tempCriterias.weight, grade:gradeAverage};
        console.log(changeCriteria)
        newCriterias = newCriterias.concat(changeCriteria);
        setCriterias(newCriterias);
        setIsShown(false);
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
                    <h1>
                        Grading Criteria
                    </h1>
                    {criterias.map(criteria => {
                        return(
                            <div className="tableText2" key={criteria.id}>
                                <tr>
                                <FontAwesomeIcon className="icon2" icon={faEdit} onClick= { () => updateClick(criteria.id)} />
                                <th className="tableText2"> {criteria.name}:&nbsp; </th>
                                <td className="tableText2">    {criteria.weight}% </td>
                                <td className="tableText2">  &nbsp; &nbsp; Grade Average: </td>

                                {('grade') in criteria  === true &&
                                    <div>
                                    <td className="tableText2">   &nbsp; {criteria.grade} </td>
                                    </div>
                                }
                                {('grade') in criteria === false &&
                                    <td className="tableText2">  &nbsp; NONE </td>
                                }
                                
                                </tr>
                            </div>
                        )
                    })}   
                </table>
                {isShown && doneAddingGrades === false &&
                    <div>
                        <h3>Grade Average for {curID.name}</h3>
                        <input type="text" value={gradeAverage} onChange={evt => setGradeAverage(evt.target.value)}/>
                        <br/>
                        <br/>
                        <button onClick = {() => updateNewCriteria(curID.id)}> submit </button>
                    </div>                                
                }
                <br/>
                <br/>
                <button onClick={doneCreating}>Go back</button>
                <button onClick={doneGrades}>Done Updating</button>
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
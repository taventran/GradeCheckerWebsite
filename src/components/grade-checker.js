import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './components.css';


function GradeChecker() {

    const [curID, setCurID] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [doneAddingCriteria, setDoneAddingCriteria] = useState(false);
    const [num, setNum] = useState(0);
    const [criterias, setCriterias] = useState([]);
    const [gradingCriteriaName, setGradingCriteriaName] = useState("");
    const [gradingCriteriaWeight, setGradingCriteriaWeight] = useState("");
    const [gradeAverage, setGradeAverage] = useState("");
    const [doneAddingGrades, setDoneAddingGrades] = useState(false);
    const [currentAverage, setCurrentAverage] = useState(0);
    // const [newGrade, setNewGrade] = useState("");
    // const [currentCriteria, setCurrentCriteria] = useState("");
    // const [numOfAssignments, setNumOfAssignments] = useState("");

    // const [predictedGrade, setPredictedGrade] = useState(0);

    useEffect(() => {
        getCurrentAverage();
    }, [criterias]);

    function createNewCriteria() {
        var newCriteria = {id: num, name: gradingCriteriaName.toUpperCase(), weight: gradingCriteriaWeight};
        setCriterias(criterias.concat(newCriteria));
        setNum(num + 1);
        setGradingCriteriaName("");
        setGradingCriteriaWeight("")
    }

    function doneCreating() {
        if (doneAddingCriteria === false) {
            setDoneAddingCriteria(true);
        }
        else {
            setDoneAddingCriteria(false);
        }
    }

    // function doneGrades() {
    //     if (doneAddingGrades === false) {
    //         setDoneAddingGrades(true);
    //     }
    //     else {
    //         setDoneAddingGrades(false);
    //     }
    // }

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
        let newCriterias = criterias.filter((criterias) => criterias.id !== criteriaID);
        const changeCriteria = {id: tempCriterias.id, name: tempCriterias.name, weight: tempCriterias.weight, grade:gradeAverage};
        newCriterias = newCriterias.concat(changeCriteria);
        setCriterias(newCriterias);
        setIsShown(false);
        getCurrentAverage();
        setGradeAverage("");
    }

    function getCurrentAverage() {
        let overallGrade = 0;
        let overallWeight = 0;
        for (let i = 0; i < criterias.length; i++) {
            if ('grade' in criterias[i]) {
                let curGrade = criterias[i].grade;
                console.log("currentGrade:", curGrade);
                let curPercentage = parseFloat(criterias[i].weight);
                overallWeight += curPercentage;
                console.log("currentWeight:", curPercentage);
                overallGrade += curGrade * (curPercentage/100);
            }
        }
        console.log("Grade", overallGrade);
        console.log("Weight",overallWeight);
        setCurrentAverage(overallGrade/overallWeight * 100);
    }

    // function updateGrade() {
    //     console.log(newGrade);
    //     console.log(currentCriteria);
    //     const tempCriterias = criterias.find((criterias) => criterias.name === currentCriteria);
    //     const holdCriteria = tempCriterias[0];
       
    //     const newAvg = holdCriteria.grade + (newGrade - holdCriteria.grade)/numOfAssignments;

    //     console.log(newAvg)
        

    // }

    return <React.Fragment>
        { doneAddingCriteria === false &&
            <div className="Finals">
                <h1>Grade Checker</h1>
                <h3> Name of the criteria </h3>
                <input type="text" placeholder="e.g. test" value={gradingCriteriaName} onChange={evt => setGradingCriteriaName(evt.target.value)}/>
                <br/>
                <h3> Criteria's Weight </h3>
                <input type="text" placeholder="e.g. 30" value={gradingCriteriaWeight} onChange={evt => setGradingCriteriaWeight(evt.target.value)}/>
                <br/>
                <br/>
                <button onClick={createNewCriteria}>Add New Criteria</button>
                <br/>
                <br/>
                <button onClick={doneCreating}> Next Step </button>
                <br/>  
                
            </div>
         }         

        { criterias.length !== 0 && doneAddingCriteria === false && // Displays table of all criteria
           
            <div className="Criteria">
                <hr/>
                <h3>
                    Criteria
                 </h3>
                
                    {criterias.map(criteria => {
                        return(
                            <div key={criteria.id}>
                                <table>
                                    <tbody>
                                        <tr className="tableText">
                                        <FontAwesomeIcon className="icon" icon={faTrash} onClick= {() => removeClicked(criteria.id)} />
                                        <th className="tableText"> {criteria.name}:&nbsp; </th>
                                        <td className="tableText">    {criteria.weight}% </td>
                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
            
            </div>
        }  
        <div className="FullTable">
        {(isShown && doneAddingGrades === false && doneAddingCriteria === true) &&
            <div>
                <h3>Grade for {curID.name}</h3>
                <input type="e.g. 85.7" value={gradeAverage} onChange={evt => setGradeAverage(evt.target.value)}/>
                <br/>
                <br/>
                <button onClick = {() => updateNewCriteria(curID.id)}> submit </button>
            </div>                                
        }
        </div>
        {
        (isShown === false && doneAddingCriteria && doneAddingGrades===false) &&  // Getting grade average of all materials
            <div className="FullTable">
                <h2>Grade Checker</h2>
                {criterias.map(criteria => {
                    return(
                        <div className="tableText2" key={criteria.id}>
                            <table>
                                <tbody>
                                    <tr>
                                        <FontAwesomeIcon className="icon2" icon={faEdit} onClick= { () => updateClick(criteria.id)} />
                                        <th className="tableText2"> {criteria.name}:&nbsp; </th>
                                        <td className="tableText2">    {criteria.weight}% </td>
                                        <td className="tableText2">  &nbsp; &nbsp; Grade: </td>

                                        {('grade') in criteria  === true &&
                                            <div>
                                            <td className="tableText2">   &nbsp; {criteria.grade} </td>
                                            </div>
                                        }
                                        {('grade') in criteria === false &&
                                            <td className="tableText2">  &nbsp; NONE </td>
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}   
                <h3>Current Grade: {currentAverage.toFixed(3)}</h3>
                <br/>
                <button onClick={doneCreating}>Go Back</button>
                <h5>Click on the pencil to edit grade for a criteria</h5>
                
            </div>
           
        }
        {/* { doneAddingGrades && // Getting predicted grade
            <div className="Finals">
                <h1>New Grade Calculator</h1>
                <h3>Criteria Grade</h3>
                <select value={currentCriteria} onChange={evt => setCurrentCriteria(evt.target.value)}>
                {criterias.map(criteria => {
                    return(
                        <option key={criteria.id}> {criteria.name} </option>
        
                    )
                })}
                </select>
                <h3>Amount of Assignments Completed for Criteria</h3>
                <input placeholder='Assignments Completed (including new grade)' value={numOfAssignments} onChange={evt => setNumOfAssignments(evt.target.value)}/>
                <h3>New Grade</h3>
                <input type="text" placeholder="New Grade" value={newGrade} onChange={evt => setNewGrade(evt.target.value)}/>
                <br/>
                <br/>
                <button onClick={doneGrades}>Go Back</button>
                <button onClick={updateGrade}> SUBMIT </button>
                <h2 className="Average">Predicted Grade: {predictedGrade.toFixed(3)}</h2>

            </div>
        } */}
    </React.Fragment>
}

export default GradeChecker;
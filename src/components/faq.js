import React from 'react';

function FAQ() {

    return (
        <React.Fragment>
            <div className="AboutPage">
                <h2>How to use grade calculator</h2>
                <p>1st: Input all different grading criterias and their weight. Example: Homework 1 is 10 %, Homework 2 is 10%, Homework 3 is 10% </p>
                <p>2nd: Input all grades received on each assignment. Do this by clicking on the edit button to change a grade. </p>
                <p>3rd: Additional step if you want to see how a grade you have not gotten yet will effect your average you can simply add a new criteria, and put in a grade for it to see how it effects your average.</p>
                <br></br>
                <h2>How to use final calculator</h2>
                <p>1st: I mean this one is pretty self explantory. </p>
                <p>2nd: I dont think you need instructions how to use this one. </p>
                <p>3rd: I would be suprise if you actually need instructions on this one. </p>
                <br></br>
                <h2>Non-number result in grade</h2>
                <p>This means one of the inputs that required only numbers recieved an invalid input.</p>

            </div>
        </React.Fragment>
    )


}


export default FAQ;
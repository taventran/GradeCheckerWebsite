import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './components.css';
import { faHeart} from '@fortawesome/free-solid-svg-icons';




function About() {


    return (
        <React.Fragment>
            <div className="AboutPage">

                <h1>About</h1>
                <p> Just a simple website where you can calculate your grades. </p>
                <p> If you are getting a number not as a result it means that you aren't using valid values in the input boxes.</p>
                <p> For the grade calculator you need to click on the pen to edit your grade for that criteria. </p>
                <p> Made for Denise (my girlfriend) so she doesn't have to ask me to calculate her grades for her. </p>
                <FontAwesomeIcon className="heart" icon={faHeart} />
    
                

            </div>
        </React.Fragment>
    )


}


export default About;
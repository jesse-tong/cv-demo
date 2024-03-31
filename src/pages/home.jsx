import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import CVHeader from '../components/cv_header';
import Section from '../components/section';

// Our language strings for the header
const strings = [
  "Hello React",
  "Salut React",
  "Hola React",
  "안녕 React",
  "Hej React"
];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
  const [hello, setHello] = React.useState(strings[0]);
  var contact_list = new Map(); contact_list['phone_number'] = "0123456789";
  contact_list['git'] = 'https://gitlab.com/jesse-tong'; contact_list['email'] = "someemail@smtpserver.com";
  
  var personal_info = new Map(); personal_info['gender'] = 'Gender here'; personal_info['birth_date'] = "Some birthdate";
  personal_info['birth_place'] = "Some birthplace";
  
  const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac orci non turpis suscipit fermentum. Donec ac eros id nisi ultricies cursus. Integer diam felis, molestie in sodales et, fermentum at eros. Cras gravida mi ac facilisis aliquet. In consequat magna a pellentesque fringilla. Proin et velit interdum, commodo nisl eget, mollis quam. ";
  
  return (
    <>
      <div className="m-auto container-fluid bg-light" style="maxWidth: 1200px">
        <div>
          <CVHeader image="https://www.bse.vt.edu/content/bse_vt_edu/en/people/faculty/david-sample/jcr:content/bio-image.transform/xl-medium/image.jpg"
           name="Khang Minh" role="Backend Developer" contact_list={contact_list} summary={summary} personal_info={personal_info}/>
        </div>
        <div className="row-cols-2">
          {/*column 1*/}
          <div className="col">
            <Section icon="rocket-takeoff" section_str="Skills" />
            <ul>
              <li><p>Skill 1</p></li>
              <li><p>Skill 2</p></li>
              <li><p>Skill 3</p></li>
              <li><p>Skill 4</p></li>
            </ul>
          </div>
          {/*column 2*/}
          <div className="col">
            <Section icon="suitcase-lg-fill" section_str="Experience" />
            <h5>Role 1</h5>
            <p><em>Company 1: </em>Date 1 - Date 2</p>
            <ul>
              <li><p>Skill 1</p></li>
              <li><p>Skill 2</p></li>
              <li><p>Skill 3</p></li>
              <li><p>Skill 4</p></li>
            </ul>
            <h5>Role 2</h5>
            <p><em>Company 2: </em>Date 1 - Date 2</p>
            <ul>
              <li><p>Skill 1</p></li>
              <li><p>Skill 2</p></li>
              <li><p>Skill 3</p></li>
              <li><p>Skill 4</p></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

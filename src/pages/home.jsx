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
  c
  return (
    <>
      <div className="m-auto container-fluid bg-light" style="maxWidth: 1200px">
      <CVHeader image="https://www.bse.vt.edu/content/bse_vt_edu/en/people/faculty/david-sample/jcr:content/bio-image.transform/xl-medium/image.jpg"
         name="Khang Minh" role="Backend Developer" />
      </div>
    </>
  );
}

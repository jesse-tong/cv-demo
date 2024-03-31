import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import CVHeader from '../components/cv_header';
import Section from '../components/section';
import Summary from '../components/summary';
import Fillbar from '../components/fillbar';
import Subsection from'../components/subsection';

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
  var contact_list = new Map(); contact_list['phone_number'] = "0878668596";
  contact_list['git'] = 'https://github.com/jesse-tong'; contact_list['email'] = "someemail@smtpserver.com";
  
  var personal_info = new Map(); personal_info['gender'] = 'Gender here'; personal_info['birth_date'] = "02/10/2002";
  personal_info['place'] = "Ho Chi Minh City";
  
  const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac orci non turpis suscipit fermentum. Donec ac eros id nisi ultricies cursus. Integer diam felis, molestie in sodales et, fermentum at eros. Cras gravida mi ac facilisis aliquet. In consequat magna a pellentesque fringilla. Proin et velit interdum, commodo nisl eget, mollis quam. ";
  const image = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <div className="m-auto row bg-white" style={{maxWidth: '1000px'}}>
        <div className="col-8 ms-4 me-3 mt-4 mb-3">
          <div>
            <CVHeader 
             name="Tống Nguyễn Minh Khang" role="Backend Developer" contact_list={contact_list} summary={summary} personal_info={personal_info}/>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                {/*column 1*/}
                <div className="col-6">
                  <Section icon="rocket-takeoff" section_str="Dự án đã làm" />
                  <Subsection title={"Ứng dụng hỗ trợ học tiếng Anh bằng AI"} time={"2/2024 - 4/2024"}
                    description={"Một ứng dụng đơn giản cho đồ án Xử lý ngôn ngữ tự nhiên ứng dụng."}
                    list={['Sử dụng Streamlit, API Gemini, Tortoise TTS, GoT', 'Ứng dụng hỗ trợ tóm tắt văn bản, giải thích nghĩa từ và câu, chỉnh ngữ pháp,...']}
                    />
                  <Subsection title={"Ứng dụng thư viện online sử dụng Flask, MariaDB và Vue.js"} time={'2/2024 - Dự kiến tháng 6-2024'}
                    description={"Ứng dụng thư viện online trên nền tảng Web, cho phép thêm, mượn sách, đọc sách online."}
                    list={[]} />
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
          </div>
        </div>
        <div className="col-3 bg-main d-flex flex-column align-items-center" style={{overflow: 'visible'}}>
          <div className="mx-3 mt-4">
            <img src={image} className="border border-2 border-secondary rounded-circle" alt="CV Image" style={{width: '100%', aspectRatio: '1/1'}}></img>
          </div>
          <Summary summary={summary} />
          <div className="mt-2 w-100">
            <h5 className="text-white mb-3"><b>Kỹ năng</b></h5>
            <p className="text-white mt-2">CSS, Javascript, HTML, React, Vue.js</p>
            <Fillbar value="80" />
            
          </div>
        </div>
      </div>
    </>
  );
}

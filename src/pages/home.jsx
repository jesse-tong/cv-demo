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
  
  const summary = "Trở thành một developer giỏi, có khả năng xây dựng và thiết lập các backend, testing và quản lý cơ sở dữ liệu. Mong muốn được làm trong môi trường chuyên nghiệp, hướng tới full-stack hoặc project leader.";
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
                    list={['Lên kế hoạch và áp dụng các tiến trình trong Scrum và Agile', 'Thiết kế UML, business analysis, diagrams, làm báo cáo', 
                           'Kĩ năng đạt được: Hiếu thêm về Scrum, Agile, Git, Jira; Học và hiểu thêm về Flask, Vue.js và Docker; Hiểu thêm về thiết kế Frontend.']} />
                  
                </div>
                {/*column 2*/}
                <div className="col">
                  <Section icon="suitcase-lg-fill" section_str="Học vấn và kinh nghiệm" />
                  <Subsection title={"ĐH KHTN - ĐHQG TP.HCM"} time={"2021-Dự kiến 9/2025"} description={""} />
                  <Section icon="" section_str="Kỹ năng" />
                  <Subsection title={"Kỹ năng chính: "} time={""} description="" list={['Backend: Express.js, Flask, ASP.NET (sẽ học)', 'CSDL: MariaDB, MongoDB, SQL Server', 
                                                                                        'Testing & QA: Selenium (sẽ học), Docker(sẽ học)', 'Kỹ năng khác: Jira, Git, Linux']} />
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
            <h5 className="text-white mb-3"><b>Điều quan tâm</b></h5>
            <p className="text-white mt-2">Cải thiện thuyết trình, giao tiếp với các khách hàng và developer</p>
            <Fillbar value="85" />
            <p className="text"
            
          </div>
        </div>
      </div>
    </>
  );
}

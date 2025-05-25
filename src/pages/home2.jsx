import * as React from "react";
import { Link } from "wouter";
import CVHeader from '../components/cv_header';
import Section from '../components/section';
import Summary from '../components/summary';
import Fillbar from '../components/fillbar';
import Subsection from'../components/subsection';
import ProfileImage from '../assets/21120263.jpg';


export default function Home2() {


  var contact_list = new Map(); contact_list['phone_number'] = "0878668596";
  contact_list['email'] = "tongnguyenminhkhang21012020@gmail.com";
  contact_list['git'] = "jesse-tong (GitHub)"; contact_list['git_url'] = 'https://github.com/jesse-tong';
  contact_list['linkedin'] = 'jesse-tong'; contact_list['linkedin_url'] = 'https://www.linkedin.com/in/khang-t%E1%BB%91ng-nguy%E1%BB%85n-minh-5275972b8/';
  
  var personal_info = new Map(); personal_info['birth_date'] = "02/10/2002";
  personal_info['place'] = "Dĩ An, Bình Dương";
  
  const summary = "Tôi là sinh viên năm 4 ngành Công nghệ thông tin tại ĐH KHTN - ĐHQG TP.HCM. Tôi mong muốn ứng tuyển vào vị trí thực tập sinh Java/.NET của công ty (có thể full-time vào tháng 8/2025 trở đi, hoặc part-time) để có thể áp dụng những kiến thức, kinh nghiệm của bản thân để cải thiện sản phẩm và mang lại giá trị hữu ích cho doanh nghiệp.";
  const image = ProfileImage; 
  return (
    <>
      <div className="m-auto row bg-white" style={{maxWidth: '1900px'}}>
        <div className="col-8 ms-4 me-3 mt-4 mb-3">
          <div>
            <CVHeader 
             name="Tống Nguyễn Minh Khang" role="Lập trình viên" contact_list={contact_list} summary={summary} personal_info={personal_info}/>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                {/*column 1*/}
                <div className="col-12">
                  <Section icon="person" section_str="Mục tiêu nghề nghiệp" />
                  <Subsection title={null} time={null} description={null} list={[
                    'Ứng dụng các kiến thức, kinh nghiệm về lập trình web vào môi trường làm việc thực tế.',
                    'Thu thập thêm kiến thức về lập trình Java, .NET, CSDL, API, bảo mật thông tin, kiến trúc phần mềm.',
                    'Trau dồi thêm kỹ năng ngoại ngữ, làm việc nhóm, kỹ năng giao tiếp, kỹ năng giải quyết vấn đề.',
                    'Phát triển bản thân để có thể trở thành một lập trình viên giỏi, có thể làm việc trong môi trường quốc tế.',
                  ]} />
                  <Section icon="rocket-takeoff" section_str="Dự án" />
                  <Subsection title={"iLawChatbot (đồ án nhóm)"} time={"9/2024 - 12/2024"} 
                    description={"Chatbot Luật sở hữu trí tuệ"}
                    list={[
                      'Công nghệ sử dụng: React để xây dựng frontend; FastAPI, Transformers, OpenAI, Chroma, Langchain cho backend',
                      'Xây dựng một chatbot hỗ trợ người dùng trong việc tìm kiếm thông tin về luật sở hữu trí tuệ.',
                      'Truy vấn các thông tin luật, dự thảo và trích nguồn sử dụng pipeline Advanced RAG từ Langchain và Chroma.',
                      'Tích hợp API của OpenAI để trả lời các câu hỏi và truy vấn pháp luật của người dùng.'
                    ]}
                    />
                  <Subsection title={"Website quản lý lớp học"} time={"7/2024 - 9/2024"}
                    description={"Đồ án cá nhân website quản lý lớp học giống Google Classroom"}
                    list={[
                      'Công nghệ sử dụng: Django, Bootstrap.',
                      'Mô tả: Ứng dụng quản lý lớp học tương tự Google Classroom.',
                      'Cho phép học sinh đăng ký lớp học, nộp bài tập, xem điểm số, trao đổi với giáo viên về bài tập/bài học.',
                      'Cho phép giáo viên quản lý lớp học, bài tập, điểm số, bài học',
                      'Tích hợp thêm tính năng quiz và tạo lớp học trực tuyến sử dụng Jitsi',
                    ]}
                    />
                  <Subsection title={"Trang web quản lý thư viện (đồ án nhóm)"} time={'2/2024 - 7-2024'}
                    description={"Developer"}
                    list={[
                      'Công nghệ sử dụng: Flask, Vue.js, Bootstrap, Stripe, MariaDB (CSDL).',
                      'Cho phép thủ thư quản lý sách và mượn trả sách; và người dùng mượn trả sách, tìm kiếm sách.',
                      'Thiết kế giao diện người dùng sử dụng Vue.js và xây dựng các chức năng của trang web sử dụng framework Flask.',
                      'Tích hợp thêm tính năng quản lý các ghế ngồi, máy tính trong thư viện.',
                      'Tích hợp Stripe và Paypal để xử lý thanh toán phí dịch vụ thư viện dễ dàng, hiệu quả.',
                    ]} />
                  
                  {/* <Section icon="suitcase-lg-fill" section_str="Kinh nghiệm làm việc" /> */}
                  <Section icon="mortarboard-fill" section_str="Học vấn" />
                  <Subsection title={"ĐH KHTN - ĐHQG TP.HCM"} time={"2021-nay"} description={"Ngành Công nghệ thông tin"} 
                  list={[
                    'Dự kiến ra trường vào đầu năm 2026'
                  ]}/>
                  <Section icon="person-check" section_str="Ngôn ngữ & Framework" />
                  <Subsection title={"Hiện tại"} time={null} description={null} list={[
                    'Hệ điều hành: Linux, Windows',
                    'Frontend: HTML, CSS, Javascript, React, Vue',
                    'Backend: Python, Flask, Django',
                    'CSDL: SQL Server, MariaDB, MongoDB',
                    'Đang tìm hiểu về Java (Spring Boot), sử dụng được git',
                  ]} />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 bg-main d-flex flex-column align-items-center" style={{overflow: 'visible'}}>
          <div className="mx-3 mt-4">
            <img src={image} className="border border-2 border-secondary rounded-circle" alt="CV Image" style={{width: '100%', aspectRatio: '1', objectFit: 'cover'}}></img>
          </div>
          <Summary summary={summary} />
          <div className="mt-2 w-100">
            <h5 className="text-white mb-3"><b>Kỹ năng</b></h5>
            <p className="text-white mt-2 mb-1" style={{ fontSize: '14px' }}>Phân tích dữ liệu, sử dụng các framework Python</p>
            <Fillbar value="90" />
            <p className="text-white mt-2 mb-1" style={{ fontSize: '14px' }}>Làm việc tốt với HTML, CSS, Javascript. Có kiến thức về React, Vue.</p>
            <Fillbar value="80" />
            <p className="text-white mt-2 mb-1" style={{ fontSize: '14px' }}>Kiến thức cơ bản về Machine Learning, NLP</p>
            <Fillbar value="75" />
            <p className="text-white mt-2 mb-1" style={{ fontSize: '14px' }}>Trực quan hóa dữ liệu</p>
            <Fillbar value="80" />
            <p className="text-white mt-2 mb-1" style={{ fontSize: '14px' }}>Version Control (git)</p>
            <Fillbar value="80" />
            
            <h5 className="text-white mt-3"><b>Chứng chỉ khác</b></h5>
            <p className="text-white mt-2 mb-1" style={{ fontSize: '14px' }}>TOEIC (800 nghe đọc, 290 nói viết)</p>
            <Fillbar value="80" />
            <p className="text-white mt-2 mb-1" style={{ fontSize: '14px' }}>FreeCodeCamp's Backend Certificate</p>
            <Fillbar value="100" />
          </div>
        </div>
      </div>
    </>
  );
}

import * as React from "react";
import { Link } from "wouter";
import CVHeader from '../components/cv_header';
import Section from '../components/section';
import Summary from '../components/summary';
import Fillbar from '../components/fillbar';
import Subsection from'../components/subsection';
import ProfileImage from '../assets/21120263.jpg';


export default function Home() {


  var contact_list = new Map(); contact_list['phone_number'] = "0878668596";
  contact_list['email'] = "tongnguyenminhkhang21012020@gmail.com";
  contact_list['git'] = "jesse-tong (GitHub)"; contact_list['git_url'] = 'https://github.com/jesse-tong';
  contact_list['linkedin'] = 'jesse-tong'; contact_list['linkedin_url'] = 'https://www.linkedin.com/in/khang-t%E1%BB%91ng-nguy%E1%BB%85n-minh-5275972b8/';
  
  var personal_info = new Map(); personal_info['birth_date'] = "02/10/2002";
  personal_info['place'] = "Dĩ An, Bình Dương";
  
  const summary = "Tôi là sinh viên năm 4 ngành Công nghệ thông tin tại ĐH KHTN - ĐHQG TP.HCM. Với kinh nghiệm và kiến thức về NLP, trực quan hóa dữ liệu, tôi mong muốn ứng tuyển vào vị trí Data Scientist (Intern) của công ty để có thể áp dụng những kiến thức, kinh nghiệm của bản thân để cải thiện sản phẩm và mang lại giá trị hữu ích cho doanh nghiệp. Trong 2-3 năm tới, tôi muốn mở rộng kiến thức về machine learning và Big Data để có thể đảm nhiệm tốt hơn vị trí của mình.";
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
                  <Section icon="rocket-takeoff" section_str="Dự án" />
                  <Subsection title={"Phát hiện hate speech cho ngôn ngữ tiếng Việt"} time={"2/2025 - 5/2025"}
                    description={"Đồ án phát hiện hate speech cho ngôn ngữ tiếng Việt"}
                    list={[
                      'Công nghệ sử dụng: Transformers, PyTorch BERT (PhoBERT và VisoBERT), Streamlit cho giao diện người dùng.',
                      'Mô tả: Dự án phát hiện hate speech cho ngôn ngữ tiếng Việt, sử dụng mô hình BERT (PhoBERT và VisoBERT) để phân loại văn bản thành các loại hate speech khác nhau.',
                      'Sử dụng knowledge distillation để huấn luyện mô hình LSTM nhỏ hơn với tốc độ nhanh hơn.'
                    ]}
                    />
                  <Subsection title={"iLawChatbot (đồ án nhóm)"} time={"9/2024 - 12/2024"} 
                    description={"Chatbot Luật sở hữu trí tuệ"}
                    list={[
                      'Vị trí: Backend developer',
                      'Công nghệ sử dụng: Transformers, OpenAI, Chroma, Langchain, FastAPI cho backend; React để xây dựng cho giao diện người dùng.',
                      'Xây dựng một chatbot hỗ trợ người dùng trong việc tìm kiếm thông tin về luật sở hữu trí tuệ.',
                      'Truy vấn các thông tin luật, dự thảo và trích nguồn sử dụng pipeline Advanced RAG từ Langchain và Chroma.',
                      'Tích hợp API của OpenAI để trả lời các câu hỏi và truy vấn pháp luật của người dùng.'
                    ]}
                    />
                  <Subsection title={"Ứng dụng hỗ trợ học tiếng Anh bằng AI"} time={"2/2024 - 4/2024"}
                    description={"Ứng dụng đơn giản hỗ trợ học tiếng Anh bằng Gemini"}
                    list={['Ứng dụng hỗ trợ tóm tắt văn bản, giải thích nghĩa từ và câu, chỉnh ngữ pháp,...',
                      'Sử dụng speech-to-text (Whisper) và text-to-speech để hỗ trợ quá trình phát âm tiếng Anh của người dùng.',
                      'Tích hợp Gemini API để hỗ trợ người dùng trong việc học tiếng Anh.',
                      'Ứng dụng Graph-of-thoughts để tối ưu cho lập lịch trình của người dùng.',
                    ]}
                    />
                  <Subsection title={"Trang web quản lý thư viện"} time={'2/2024 - 7-2024'}
                    description={"Developer"}
                    list={[
                      'Tham gia vào tất cả các khâu của quá trình phát triển dự án.',
                      'Tìm hiểu yêu cầu của khách hàng và lên kế hoạch cho dự án để đạt được tiến độ đề ra.',
                      'Thiết kế giao diện người dùng tương tác sử dụng Vue.js và xây dựng các chức năng của trang web sử dụng framework Flask.',
                      'Trực quan hóa dashboard thông tin đăng nhập sử dụng Chart.js',
                      'Tích hợp Stripe và Paypal để xử lý thanh toán phí dịch vụ thư viện dễ dàng, hiệu quả.',
                    ]} />
                  
                  {/* <Section icon="suitcase-lg-fill" section_str="Kinh nghiệm làm việc" /> */}
                  <Section icon="mortarboard-fill" section_str="Học vấn" />
                  <Subsection title={"ĐH KHTN - ĐHQG TP.HCM"} time={"2021-nay"} description={"Ngành Công nghệ thông tin"} />
                  <Section icon="person-check" section_str="Ngôn ngữ & Framework" />
                  <Subsection title={"Hiện tại"} time={null} description={null} list={[
                    'Hệ điều hành: Linux, Windows',
                    'Frontend: HTML, CSS, Javascript, React, Vue',
                    'Backend: Python, Flask, FastAPI, Django',
                    'Machine Learning: Langchain, PyTorch, Transformers',
                    'Trực quan hóa dữ liệu: Tableau, d3.js',
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

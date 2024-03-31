import React from 'react'

function CVHeader({image, name, role, personal_info, summary, contact_list}){
  const phone_number = contact_list['phone_number'];
  const email = contact_list['email'];
  const linkedin = contact_list.get('linkedin');
  const git = contact_list.get('git'); //Remote git repos, such as Github or Gitlab or Codeberg
  
  const gender = personal_info['gender'] || 'Other';
  const birth_date = personal_info['birth_date'] || 'N/A';
  const place = personal_info['place'];
  
  return (
    <>
      <div className="container-fluid">
        <div className="ms-0 me-3 mt-4 mb-3 row" >
          <div className="col ms-0 my-0 me-3">
            <div className="name-box-border ps-3">
              <h1 style={{fontFamily: "helvetica"}} className="display-4 text-main"><b>{name}</b></h1>
              <h4 style={{fontFamily: "helvetica", fontSize: '18px'}} className="text-secondary">{role}</h4>
            </div>
            <div className="mt-4">
              
              <h5 className="text-primary">Personal info</h5>
              
              <div className="col">
                <div className="row">
                  <div className="row row-cols-3">
                    
                    <div className="col my-1">
                      <div className="d-flex">
                        <div style={{aspectRatio: '1/1', height: '30px'}} className="rounded-circle bg-main me-2 d-flex justify-content-center"><i className="text-white bi bi-gender-ambiguous"></i></div>
                        <span style={{fontFamily: 'helvetica'}}>{gender}</span>
                      </div>
                    </div>
                    <div className="col my-1">
                      <div className="d-flex">
                        <div style={{aspectRatio: '1/1', height: '30px'}} className="rounded-circle bg-main me-2 d-flex justify-content-center"><i className="text-white bi bi-cake2"></i></div>
                        <span style={{fontFamily: 'helvetica'}} >{birth_date}</span>
                      </div>
                    </div>
                    <div className="col my-1">
                      <div className="d-flex">
                        <div style={{aspectRatio: '1/1', height: '30px'}} className="rounded-circle bg-main me-2 d-flex justify-content-center"><i className="text-white bi bi-telephone"></i></div>
                        <span style={{fontFamily: 'helvetica'}}>{phone_number}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col my-1">
                    <div className="col my-1">
                      <div className="d-flex">
                        <div style={{aspectRatio: '1/1', height: '30px'}} className="rounded-circle bg-main me-2 d-flex justify-content-center"><i className="text-white bi bi-envelope"></i></div>
                        <span style={{fontFamily: 'helvetica'}} >{email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col my-1">
                    <div className="col my-1">
                      <div className="d-flex">
                        <div style={{aspectRatio: '1/1', height: '30px'}} className="rounded-circle bg-main me-2 d-flex justify-content-center"><i className="text-white bi bi-geo-alt-fill"></i></div>
                        <span style={{fontFamily: 'helvetica'}} >{place}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="text-primary">Summary</h5>
              <p>{summary}</p>
            </div>
          </div>
          
        </div>
        <div className="" />
      </div>
    </>
  );
}

export default CVHeader;
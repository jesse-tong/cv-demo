import React from 'react'

function CVHeader({image, name, role, personal_info, summary, contact_list}){
  const phone_number = contact_list['phone_number'];
  const email = contact_list['email'];
  const linkedin = contact_list.get('linkedin');
  const git = contact_list.get('git'); //Remote git repos, such as Github or Gitlab or Codeberg
  
  const gender = personal_info.get('gender') || 'Other';
  const birth_date = personal_info.get('birth_date') || 'N/A';
  const birth_place = personal_info.get('birth_place');
  
  return (
    <>
      <div className="container-fluid">
        <div className="mx-4 mt-4 mb-3 row" >
          <div className="col-9 ms-0 my-0 me-3">
            <h1 style={{fontFamily: "helvetica"}}><em>{name}</em></h1>
            <p style={{fontFamily: "Open Sans", fontSize: '18px'}} className="text-secondary">{role}</p>
            <div className="mt-3">
              <h5 className="text-primary">Summary</h5>
              <p>{summary}</p>
              <h5 className="text-primary">Personal info</h5>
              <ul>
                <li>Phone number: {phone_number}</li>
                <li>Email: {email}</li>
                <li>Gender: {gender}</li>
                <li>Birth date: {birth_date}</li>
                <li>Birth place: {birth_place}</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <img src={image} className="border border-2 border-secondary rounded-circle"alt="CV Image" style={{width: '100%', aspectRatio: '1/1'}}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVHeader;
import React from 'react'

function CVHeader({image, name, role, personal_info, contact_list}){
  const phone_number = contact_list['phone_number'];
  const email = contact_list['email'];
  const linkedin = contact_list.get('linkedin');
  const git = contact_list.get('git'); //Remote git repos, such as Github or Gitlab or Codeberg
  
  const gender = personal_info.get('gender') || 'Other';
  const birth_date = personal_info.get('birth_date') || '';
  const birth_place = personal_info.get('birth_place');
  
  return (
    <>
      <div className="container-fluid">
        <div className="mx-4 mt-4 mb-3 row" >
          <div className="col-9 ms-0 my-0 me-3">
            <h1 style='fontFamily: '></h1>
          </div>
        </div>
      </div>
    </>
  );
}
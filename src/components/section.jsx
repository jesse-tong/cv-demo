import { useState } from 'react';

function Section({icon, section_str}){
  return (
    <>
      <div className="row mb-4" style={{maxHeight: '50px'}}>
        <div className="col-1 bg-primary" style={{width: '35px'}}>
          <i className={" bi bi-" + icon}></i>
        </div>
        <div className="col border-bottom border-4 border-primary me-3">
          <span className="ms-2 my-auto" style={{fontFamily: "helvetica, arial", fontSize: 24 + 'px'}}><b>{section_str}</b></span>
        </div>
      </div>
    </>
  );
}

export default Section;
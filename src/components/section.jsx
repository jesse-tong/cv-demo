import { useState } from 'react';

function Section({icon, section_str}){
  return (
    <>
      <div className="list-group list-group-horizontal mb-4" style={{maxHeight: '50px'}}>
        <button className="list-group-item bg-primary" style={{width: '35px'}}>
          <i className={"m-auto bi bi-suitcase-lg-fill " + icon}></i>
        </button>
        <div className="list-group-item border-bottom-4 border-primary">
          <span className="ms-2 my-auto" style={{fontFamily: "helvetica, arial", fontSize: 24 + 'px'}}>{section_str}</span>
        </div>
      </div>
    </>
  );
}

export default Section;
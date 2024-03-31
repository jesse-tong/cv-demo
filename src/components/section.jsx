import { useState } from 'react';

function Section({icon, section_str}){
  return (
    <>
      <div className="list-group list-group-horizontal" style="max-height: 35px; width: 100%;">
        <div className="list-group-item bg-primary" style="width: 35px;">
          <i className={"m-auto bi bi-" + icon}></i>
        </div>
        <div className="list-group-item border-bottom-4 border-primary">
          <span className="ms-2 my-auto" style='fontFamily: "helvetica", "arial"; fontSize: 24px'>{section_str}</span>
        </div>
      </div>
    </>
  );
}

export default Section;
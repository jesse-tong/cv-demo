import React from 'react';

function Subsection({title, time, description, list}){
  const list_details = list || null;
  const subsection_list_elements = new Array();
  if (list_details !== null) {
    list_details.forEach(function(item){
      subsection_list_elements.push(
        (<>
          <li><p>{item}</p></li>
        </>)
      );}
    );
  }

  return (
    <>
      <div>
        <div className="d-flex justify-content-space-between">
          <p className="text-main me-2"><b>{title}</b></p>
          <p className="text-main"><b>{time}</b></p>
        </div>
        
        <ul>
          {subsection_list_elements}
        </ul>
        
      </div>
    </>
  );
}

export default Subsection;
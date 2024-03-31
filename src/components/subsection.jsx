import React from 'react';

function Subsection({title, time, description, list}){
  const list_details = list || null;
  const subsection_list_elements = list_details != null ? list_details.forEach(item => {
    return (
      <>
        <li><p>{item}</p></li>
      </>
    )}
  ) : '';
  console.log(list)
  return (
    <>
      <div>
        <div className="d-flex justify-content-space-between">
          <h5 className="text-main"><b>{title}</b></h5>
          <h5 className="text-main"><b>{time}</b></h5>
        </div>
        
        <ul>
          {subsection_list_elements}
        </ul>
        
      </div>
    </>
  );
}

export default Subsection;
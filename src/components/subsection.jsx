import React from 'react';

function Subsection({title, time = null, description, list}){
  const listStyle = {
    marginTop: '5px',
    marginBottom: '5px',
    paddingLeft: '25px',
    paddingTop: '0px',
    paddingBottom: '0px',
    fontSize: '15px',
    listStyleType: 'disc'
  }

  const list_details = list || null;
  const subsection_list_elements = new Array();
  if (list_details !== null) {
    list_details.forEach(function(item){
      subsection_list_elements.push(
        (<>
          <li key={String(item).slice(0, 10)}><span style={{marginBottom: '0px'}}>{item}</span></li>
        </>)
      );}
    );
  }

  return (
    <>
      <div>
        {title === null ? <></> :
        <div className="d-flex justify-content-between align-items-center" style={{marginRight: '3%'}}>
          <p className="text-main me-2" style={{ fontSize: '18px'}}><b>{title}</b></p>
          {time === null ? <p></p> : <p className="text-main" style={{ fontSize: '17px'}}><b>{time}</b></p>}
        </div> }
        <div className="d-flex">
          {description === null ? <></> : <p className="text-secondary mb-1"><b>{description}</b></p>}
        </div>
        <ul style={listStyle} className="list-unstyled">
          {subsection_list_elements}
        </ul>
        
      </div>
    </>
  );
}

export default Subsection;
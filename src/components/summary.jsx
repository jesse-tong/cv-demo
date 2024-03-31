import React from 'react';

function Summary({summary}){
  return (
    <>
      <div className="px-4 py-3 mt-4 bg-light border-1 rounded-4" style={{width: '130%', position: 'relative'}}>
        <h5 className="text-main"><b>Mục tiêu nghề nghiệp</b></h5>
        <span className="" style={{whiteSpace: 'pre-wrap'}}>{summary}</span>
        <img src="https://www.svgrepo.com/show/493717/quote-open-editor.svg" className="summary-left-quote" style={{width: '35px', height: '35px'}}/>
        <img src="https://www.svgrepo.com/show/493715/quote-close-editor.svg" className="summary-right-quote" style={{width: '35px', height: '35px'}}/>
      </div>
    </>
  );
}

export default Summary;
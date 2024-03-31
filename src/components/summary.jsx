import React from 'react';

function Summary({summary}){
  return (
    <>
      <div className="mt-4 bg-light border-0 border-rounded" style={{width: '250px'}}>
        <h4 className="text-main">SUMMARY</h4>
        <span className="">{summary}</span>
        <svg width="35" height="35" className="summary-left-quote">
          <image xlink:href="https://www.svgrepo.com/show/493717/quote-open-editor.svg" />
        </svg>
        <svg width="35" height="35" className="summary-right-quote">
          <image xlink:href="https://www.svgrepo.com/svg/493715/quote-close-editor" />
        </svg>
      </div>
    </>
  );
}

export default Summary;
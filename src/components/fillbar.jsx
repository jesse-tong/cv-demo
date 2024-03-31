import React from 'react';

function Fillbar({value, classNames}){
  return (
    <div className={'fillbar'}>
      <div className='fillbar-value' style={{width: value + '%'}}></div>
    </div>
  );
}

export default Fillbar;
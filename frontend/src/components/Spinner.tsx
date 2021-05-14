import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-border m-5'
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
        role='status'
      ></div>
    </div>
  );
};

export default Spinner;

import React from 'react';
const index = (): JSX.Element => {
  return (
    <div className={`w-full flex mx-auto h-screen`}>
      <div className={` w-full max-w-[34.56rem] h-full`}>
        <div className="h-full w-full flex flex-col justify-around">
          <div className="bg-lightBr max-w-[4.75rem] max-h-[5rem] h-full w-full"></div>
          <div className="bg-lightBr max-w-[4.75rem] max-h-[5rem] h-full w-full"></div>
          <div className="bg-lightBr max-w-[4.75rem] max-h-[5rem] h-full w-full"></div>
          <div className="bg-lightBr max-w-[4.75rem] max-h-[5rem] h-full w-full"></div>
        </div>
        <div></div>
      </div>
      <div className={`bg-blue-500 w-full max-w-[37.9rem] flex h-full`}></div>
    </div>
  );
};

export default index;

import React, { useEffect, useState } from "react";

const Paginaton = ({ showPerPage ,onPaginatonChange,len }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
      
     onPaginatonChange(value-showPerPage,value)



  }, [counter]);

  return (
    <div className="pageContainer flex gap-5 justify-end mt-5 pb-5">
      <button onClick={() => setCounter(counter  === 1 ? 1: counter-1  )}>Previous</button>

      <button onClick={() => setCounter(Math.ceil(len/showPerPage)  === counter ? counter: counter+1  )}>Next</button>
    </div>
  );
};

export default Paginaton;

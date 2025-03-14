import { useEffect, useRef } from 'react';

export const Alert: React.FC = () => {

  const getAlerted = () => {
	alert("your awesome!11");
  };

  return (
    <a style={{textDecoration: "underline", cursor: "pointer"}} className='ml-8' onClick={getAlerted}>Click here to get alerted!</a>
  );
};

import React, { useContext } from 'react';
import dataContext from '../../contexts/dataContext';

import './ErrorMsg.scss';

const ErrorMsg = () => {
  const { error } = useContext(dataContext);

  if (error) {
    return <div className="Error">{ error }</div>;
  }

  return null;
};

export default ErrorMsg;

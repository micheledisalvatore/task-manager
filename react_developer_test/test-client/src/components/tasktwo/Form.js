import React, { useContext, useRef } from 'react';
import dataContext from '../../contexts/dataContext';

import './Form.scss';

const Form = () => {
  const { onUserNameChange } = useContext(dataContext);
  const input = useRef();

  const handleSubmission = (e) => {
    e.preventDefault();
    const { value } = input.current;

    onUserNameChange(value);
  };

  return (
    <form
      className="Form"
      onSubmit={handleSubmission}
      action="POST"
    >
      <input
        type="text"
        ref={input}
      />
      <button
        className="Form__Button"
        type="submit"
      >
        Fetch
      </button>
    </form>
  );
};

export default Form;

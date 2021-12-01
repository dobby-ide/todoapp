import React, { useState } from 'react';
import Card from './Card';

const Form = ({ formHandler }) => {
  const data = { input: '', date: '' };
  const [values, setValue] = useState(data);
  const changesTransformer = (e) => {
    e.preventDefault();
    // console.log({ ...values, [e.target.name]: e.target.value.trim() });
    let j = e.target.value;

    console.log(j);

    setValue({ ...values, [e.target.name]: e.target.value.trim() });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //console.log(values);
    formHandler(values);
  };
  return (
    <Card className="form">
      <div>
        <form>
          <label>Add a task</label>
          <input type="text" name="input" onChange={changesTransformer}></input>
          <input type="date" name="date" onChange={changesTransformer} />
          <button type="submit" onClick={onSubmitHandler}>
            submit
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Form;

import React, { useState } from 'react';
import Card from './Card';

const Form = ({ formHandler }) => {
  const tagData = {input:""}
  const [browseTagging,setBrowseTagging] = useState(tagData);
  const data = { input: '', date: '' };
  const [values, setValue] = useState(data);
  const changesTransformer = (e) => {
    e.preventDefault();
    let j = e.target.value;


    setValue({ ...values, [e.target.name]: e.target.value.trim() });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    formHandler(values);
  };
  return (
    <Card className="form">
      <div className="addatask-form">
        <form className="addatask-form-main">
          <input
            placeholder="new task"
            className="addatask-form-main-input"
            id="addtask"
            type="text"
            name="input"
            onChange={changesTransformer}
          ></input>
          <label className="addatask-form-main-label" for="addtask">
            new task
          </label>
          <input
            type="date"
            name="date"
            onChange={changesTransformer}
            className="addatask-form-main-input"
          />
          <button
            className="addatask-form-main-btn"
            type="submit"
            onClick={onSubmitHandler}
          >
            ok
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Form;

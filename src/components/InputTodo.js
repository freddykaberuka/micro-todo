import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const addTodoProps = props;
      addTodoProps(title);
      setTitle('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit" type="button">
        <FaPlusCircle
          style={{
            color: 'darkcyan',
            fontSize: '20px',
            marginTop: '2px',
          }}
        />

      </button>
    </form>
  );
};
export default InputTodo;

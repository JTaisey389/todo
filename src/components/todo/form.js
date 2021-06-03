// REFACTORED FORM.JS FOR CLEANER CODE
import React from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import useForm from '../../hooks/useForm.js';

function TodoForm({ addItem }) {
  const [handleInputChange, handleSubmit] = useForm({ addItem });
  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </label>
        <Button type="submit">Add Item</Button>
      </Form>
    </>
  );
}

export default TodoForm;

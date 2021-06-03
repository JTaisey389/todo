import React from "react";

// BRING IN IMPORTS FOR THE CHANGE for GETTING RID OF THIS.STATE
// NEW ==========
import { useState } from "react";
import Button from "react-bootstrap/Button"; // Add the button for the page
// import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import useForm from '../../Hooks/useForm.js';
// END ==========

function TodoForm(props) {
  // Code from last night
  const [item, setItem] = useState({});
  // ==========
  // const [values, handleInputChange, handleSubmit] = useForm(addItem);


  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [value, setValue] = useState('');
  const toggleField = (id) => {
    setOpen(!open);
    setId(id);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.addItem(item)
    const newItem = {};
    setItem({ newItem });
    toggleField();
  };
  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
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
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </label>
        <Button type="submit">Add Item</Button>
      </form>
    </>
  );
}

export default TodoForm;

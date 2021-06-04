// Replace the current form change/submit handlers with the useForm() custom hook to manage the “Add Item” form
import { useState, useEffect, useContext } from 'react';
/* The useState is a Hook that lets you add React state to function components.  */
const useForm = (callback) => {
  const [values, setValue] = useState({}); //check the setValue and values, I think this needs to be list and SetList on ln 17 todo
  const handleInputChange = e => {
    let { name, value } = e.target;
    setValue({...values, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(values);
  }
  return [
    values,
    handleInputChange,
    handleSubmit
  ]
}

export default useForm;
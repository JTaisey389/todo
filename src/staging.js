// FROM FORM.js
  // const handleInputChange = (e) => {
  //   setItem({ ...item, [e.target.name]: e.target.value });
  // };
  // const [open, setOpen] = useState(false);
  // const [id, setId] = useState('');
  // const [value, setValue] = useState('');
  // const toggleField = (id) => {
  //   setOpen(!open);
  //   setId(id);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.addItem(item)
  //   const newItem = {};
  //   setItem({ newItem });
  //   toggleField();
  // };

  // import { useState } from "react";

// FROM LIST.js

// import { When } from 'react-if';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import { FormControl } from 'react-bootstrap';

// FROM TODO.js
  // const addItem = (item) => {
  //   item._id = Math.random();
  //   item.complete = false;
  //   setList({ list: [...list, item] });
  // };
  // const deleteItem = (id) => {
  //   let item = list.filter((i) => i._id === id)[0] || {};
  //   if (item._id) {
  //     let newList = list.filter((listItem) => listItem._id !== id);
  //     setList(newList);
  //   }
  // };
  // const toggleComplete = (id) => {
  //   let item = list.filter((i) => i._id === id)[0] || {};

  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let newList = list.map((listItem) =>
  //       listItem._id === item._id ? item : listItem
  //     );
  //     setList(newList);
  //   }
  // };

//   import "bootstrap/dist/css/bootstrap.min.css";
// import "./todo.scss";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

// useEffect(() => {
//   document.title = `To do List: ${list.length}`;
// });

// useEffect(() => {
//   let newList = [
//     {
//       _id: 1,
//       complete: false,
//       text: "Clean the Kitchen",
//       difficulty: 3,
//       assignee: "Person A",
//     },
//     {
//       _id: 2,
//       complete: false,
//       text: "Do the Laundry",
//       difficulty: 2,
//       assignee: "Person A",
//     },
//     {
//       _id: 3,
//       complete: false,
//       text: "Walk the Dog",
//       difficulty: 4,
//       assignee: "Person B",
//     },
//     {
//       _id: 4,
//       complete: true,
//       text: "Do Homework",
//       difficulty: 3,
//       assignee: "Person C",
//     },
//     {
//       _id: 5,
//       complete: false,
//       text: "Take a Nap",
//       difficulty: 1,
//       assignee: "Person B",
//     },
//   ];

//   setList(newList);
// }, []);

<Nav className="Nav">
<Navbar>
  <h1>Home</h1>
</Navbar>
</Nav>
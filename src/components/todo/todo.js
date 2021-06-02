import React, { useEffect, useState } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./todo.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// class ToDo extends React.Component: OLD CLASS FUNCTION
function Todo(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }
  const [list, setList] = useState([]);

  useEffect(() => {document.title = `To do List: ${list.length}`})

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList({ list: [...list, item] });
  };

  const toggleComplete = id => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      setList(newList);
    }
  };

  useEffect(() => {
    let newList = [
      { _id: 1, complete: false, text: "Clean the Kitchen", difficulty: 3, assignee: "Person A" },
      { _id: 2, complete: false, text: "Do the Laundry", difficulty: 2, assignee: "Person A" },
      { _id: 3, complete: false, text: "Walk the Dog", difficulty: 4, assignee: "Person B" },
      { _id: 4, complete: true, text: "Do Homework", difficulty: 3, assignee: "Person C" },
      { _id: 5, complete: false, text: "Take a Nap", difficulty: 1, assignee: "Person B" },
    ];

    setList(newList);
  }, [])
  return (
    <>
      <Nav className="Nav">
        <Navbar>
          <h1>Home</h1>
        </Navbar>
      </Nav>
      <header>
        <h2 className="h2-text">
          To Do List Manager ({list.filter(item => !item.complete).length})
        </h2>
      </header>
      <section className="todo">
        <div>
          <TodoForm addItem={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>
      </section>
    </>
  );
}
export default Todo;
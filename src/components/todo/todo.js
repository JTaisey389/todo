import React from 'react';
import { useEffect, useState } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import axios from "axios";
import useAjax from "../../hooks/useAjax.js";
import Header from "../header/header.js";
import Footer from "../footer/footer.js";
import SettingsProvider from "../../context/settings.js";
// import Login from '../../components/auth/login.js'
import Auth from "../auth/auth.js";
import AuthProvider from "../../context/authprovider.js";


// class ToDo extends React.Component: OLD CLASS FUNCTION

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

function If({ condition, children }) {
  return condition ? children : null;
}

function Todo(props) {

  const [list, setList] = useState([]);
  document.title = `To Do List: ${list.filter((item) => !item.complete).length}`;

  const [request, response] = useAjax();
  const [data, setData] = useState();

  useEffect(() => {
    setData(response);
  }, [response]);

  const getItems = async () => {
    //CREATE
    let request = await axios({
      method: "get",
      url: todoAPI,
    });
    setList(request.data.results);
  };
  const postItems = (input) => {
    //READ
    let options = {
      url: todoAPI,
      method: "post",
      mode: "cors",
      headers: { "Context-type": "application/json" },
      data: input,
    };
    request(options);
  };
  const putItems = (id) => {
    // UPDATE
    const taskToPut = list.filter((i) => i._id === id)[0];
    if (taskToPut._id) {
      let options = {
        url: `${todoAPI}/${id}`,
        method: "put",
        mode: "cors",
        headers: { "Context-type": "application/json" },
        data: { complete: !putItems.complete },
      };
      request(options);
    }
  };
  const deleteItems = (id) => {
    // DELETE
    let options = {
      url: `${todoAPI}/${id}`,
      method: "delete",
      mode: "cors",
      headers: { "Context-type": "application/json" },
    };
    request(options);
  };
  useEffect(() => {
    getItems();
  }, [putItems, deleteItems]);
  // YESTERDAY ===============

  return (
    <>
      <AuthProvider>
        <SettingsProvider>
          <Header />
          <Auth capability="read">
            {/* */}
            <main>
                <h2 className="h2-text">To Do List Manager ({list.filter((item) => !item.complete).length})</h2>
              <section className="todo">
                <div>
                  <TodoForm addItem={postItems} />
                </div>
                <div>
                  <TodoList
                    list={list}
                    handleComplete={putItems}
                    deleteItem={deleteItems}
                  />
                </div>
              </section>
            </main>
          </Auth>
          <Footer/>
        </SettingsProvider>
      </AuthProvider>
    </>
  );
}
export default Todo;

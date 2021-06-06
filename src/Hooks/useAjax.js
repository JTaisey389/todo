import { useEffect, useState, useContext } from 'react';
import axios from 'axios'
// const axios = require('axios').default;

// TODO: pass in method, body from todo-connected
const useAjax = (apiUrl, method, body) => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    axios({
      method: 'post',
      url: apiUrl,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(item)
    })
      .then(response => response.data)
      .then(parsedItem => {
        setList([...list, parsedItem])
      })
      .catch(e);
  };

  const _toggleComplete = id => {

    const item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let url = `${apiUrl}/${id}`;
      axios({
        url: url,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(item)
      })
        .then(response => response.data)
        .then(parsedItem => {
          setList(list.map(listItem => listItem._id === item._id ? parsedItem : listItem));
        })
        .catch(e);
    }
  };
  const _deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      let url = `${apiUrl}/${id}`;
      axios({
        url: url,
        method: 'delete',
      })
        .then(() => {
          _getTodoItems();
        })
        .catch(e);
    }
  };
  const _getTodoItems = () => {
    axios({
      url: apiUrl,
      method: 'get',
    })
      .then(response => response.data)
      .then(data => setList(data))
      .catch(console.error);
  };
  useEffect(_getTodoItems, []);
  useEffect(() => {
    let todoCount = list.filter(item => !item.complete).length;
    document.title = `To Do List: ${todoCount}`;
  }, )
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse]= useState(null);
  const [error, setError] = useState(null);

  const response = (url, method, body = {}) => {
    setisLoading(true);
    axios({
      method: method,
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: body
    })
    .then(axiosResponse => setResponse(axiosResponse.data))
    .catch(axiosError => setError(axiosError))
    .finally(() => setIsLoading(false));
  };
  return [
    _addItem,
    _toggleComplete,
    _deleteItem,
    list,
    isLoading,
    response,
    error,
    request
  ]
}
export default useAjax;

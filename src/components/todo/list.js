// LIST IS GTG
import React, { useState, useEffect, useContext } from 'react';
// import { useState, useEffect, useContext } from 'react';
import { When } from 'react-if';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import useForm from '../../hooks/useForm.js';
import Badge from 'react-bootstrap/Badge'
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SettingsContext } from '../../context/site.js';
import Pagination from './pagination.js';

import './todo.scss';
export default function TodoList(props) { 
  
  const context = useContext(SettingsContext);
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState('');
  const [value, setValue] = useState('');
  const [handleSubmit] = useForm(lotsTodo);

  function toggleEvent(id) {
    setToggle(!toggle);
    setId(id);
  }
  useEffect(() => {
    console.log(value)
  });
  function lotsTodo(task) {
    setValue(task);
    props.updateItem(id, value)
  }
  const indexOfLastPost = context.currentPage * context.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - context.itemsPerPage;
  const currentPosts = props.list.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginateTogether = pageNumber => context.setCurrentPage(pageNumber);

  return (
    <>
    <div id="modal-container">
      <Modal.Dialog>
        {currentPosts.map(item => (
          <section>
            <Modal.Header>
              <Modal.Title>
                <button id="delete" type="submit" onClick={() => props.deleteItem(item._id)} type="button" class="btn-close float-right"></button>
                <Badge 
                className={`complete-${item.complete.toString()}`}
                key={item._id}
                onClick={() => props.toggleComplete(item._id)}
                type="submit"
                pill
                variant={item.complete === true ? 'danger' : 'success'}
                >
                {item.complete === true ? 'complete' : 'pending'}
                </Badge>{''}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{item.text}</p>
            </Modal.Body>
            <Modal.Footer id="modal-footer">
              <small id="difficulty">Difficulty Level: {item.difficulty}</small>
              <Button onClick={() => toggleEvent(item._id)} variant="primary">Update</Button>
            </Modal.Footer>
          </section>
        ))}
      </Modal.Dialog>
    </div>
    <When condition={toggle === true}>
      <Form id="formToggle">
        <FormControl onChange={(e) => setValue(e.target.value)} placeholder="update task"/>
        <Button onClick={(e) => { handleSubmit(e); toggleEvent(id); }}>UPDATE</Button>
      </Form>
    </When>
    <Pagination
    itemsPerPage={context.itemsPerPage}
    totalPosts={props.list.length}
    paginateTogether={paginateTogether}
    />
    </>
  )
}
// example of  turnArray which takes place of an if/else statement
// {item.complete === true ? 'danger' : 'success}

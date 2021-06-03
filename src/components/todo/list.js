// LIST IS GTG
import React, { useEffect, useState } from 'react';
import { When } from 'react-if';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormControl } from 'react-bootstrap';


export default function TodoList(props) {  
    return (
      <ul>
        {props.list.map(item => (
          <ListGroup>
            <ListGroup.Item

            className={`complete-${item.complete.toString()}`}
            key={item._id}
            variant={item.complete ? 'danger' : 'success'}
            >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          
            </ListGroup.Item>
            <Button className="deleteItemButton" type="submit" onClick={() => 
            props.deleteItem(item._id)}>DELETE</Button>
          </ListGroup>
        ))}
      </ul>
    );
}

// LIST IS GTG
import React from 'react';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import Pagination from 'react-bootstrap/Pagination';
import { useState, useContext } from 'react';
import { SettingsContext } from '../../context/settings.js'

export default function TodoList(props) { 

  const context = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(context.startingPage);
  const lotsTodo = context.itemCount;

  const effects = {
    pill: {
      cursor: 'pointer',
    },
  };

  const sortedList = props.list.sort((firstItem, secondItem) => {
    if (secondItem.difficultyRating > firstItem.difficultyRating) {
      return 1;
    } else if (firstItem.difficultyRating > secondItem.difficultyRating) {
      return -1;
    } else {
      return 0;
    }
  })
  const filterList = sortedList.filter((item) => !item.complete);
  const filteredListIncomplete = sortedList.filter((item) => item.complete);
  const allListItems = [...filterList, ...filteredListIncomplete];

  const numberOfPages = Math.ceil(allListItems.length / lotsTodo);
  const indexOfLastPost = currentPage * lotsTodo;
  const indexOfFirstPost = indexOfLastPost - lotsTodo;
  const currentPosts = allListItems.slice(indexOfFirstPost, indexOfLastPost);

  const paginateNext = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumber = [];
  const activePage = currentPage;
  for (let i = 1; i < numberOfPages; i++){
    pageNumber.push(
      <Pagination.Item key={number} activePage={i === activePage} onClick={() => paginateNext(i)}>
        {i}
      </Pagination.Item>
    )
  }
    return (
      <>
      {currentPosts.map((item) => (
        <Toast key={item._id} onClose={() => props.handleDelete(item._id)}>
          <Toast.Header>
            <Badge
              pill
              style={effects.pill}
              variant={item.complete ? "danger" : "success"}
              onClick={() => props.handleComplete(item._id)}
            >
              {!item.complete ? "Pending" : "Complete"}
            </Badge>
            <strong className="mr-auto">{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body>
            {item.text}
              difficulty:{item.difficulty}
          </Toast.Body>
        </Toast>
      ))}
      <Pagination>
        {pageNumbers}
      </Pagination>
    </>
    );
}

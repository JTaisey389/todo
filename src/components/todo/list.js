// LIST IS GTG
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

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
          </ListGroup>
        ))}
      </ul>
    );
}
// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

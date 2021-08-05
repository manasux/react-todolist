import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id)
          }}
        ></i>
        <li> {props.text} </li>
      </div>
    </div>
  );
};

export default TodoList;

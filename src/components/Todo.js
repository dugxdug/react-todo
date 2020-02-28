import React from "react";

const Todo = props => {
  return (
    <div className={`todo ${props.todo.isCompleted && "todo-is-completed"}`}>
      <div
        className={"checkbox"}
        onClick={() => props.toggleTodoCompleteAtIndex(props.index)}
      >
        {props.todo.isCompleted && <span>&#x2714;</span>}
      </div>
      <input
        type="text"
        value={props.todo.content}
        onKeyDown={e => props.handleKeyDown(e, props.index)}
        onChange={e => props.updateTodoAtIndex(e, props.index)}
      />
    </div>
  );
};

export default Todo;

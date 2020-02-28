import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      content: "Make Todo app for Sully",
      isCompleted: true
    },
    {
      content: "Get haircut",
      isCompleted: false
    },
    {
      content: "Sleep",
      isCompleted: false
    }
  ]);

  const handleKeyDown = (e, i) => {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  };

  const createTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false
    });
    setTodos(newTodos);
    // Add a timeout delay to the focus to wait for the state to finish updating before focusing onthe newly rendered input
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  };

  const updateTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  };

  const removeTodoAtIndex = i => {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  };

  const toggleTodoCompleteAtIndex = i => {
    const tempTodos = [...todos];
    tempTodos[i].isCompleted = !tempTodos[i].isCompleted;
    setTodos(tempTodos);
  };

  return (
    <form className="todo-list">
      <ul>
        {todos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            handleKeyDown={handleKeyDown}
            updateTodoAtIndex={updateTodoAtIndex}
            toggleTodoCompleteAtIndex={toggleTodoCompleteAtIndex}
            index={i}
          />
        ))}
      </ul>
    </form>
  );
};

export default TodoList;

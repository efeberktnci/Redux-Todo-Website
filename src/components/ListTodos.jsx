import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  const store = useSelector((store) => store.todoReducer);

  console.log(store.todos)
  return (
    <div>
      {store.todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ListTodos;

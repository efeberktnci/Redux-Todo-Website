import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";
import { ActionTypes } from "../redux/reducers/actionTypes";
import { removeTodo, updateTodo } from "../redux/actions/todoActions";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const[isOpen, setIsOpen] = useState(false)

  const handleDelete = () => {

   axios.delete(`/todos/${todo.id}`)

   dispatch(removeTodo(todo.id))
  };

  const handleStatus = () => {
   
    const updated = { ...todo , is_done: !todo.is_done };

    dispatch(updateTodo(updated))
  }

  return (
    <div className="border rounded-5 shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Completed" : "In Progress"}</h6>
      <p>{todo.created_at}</p> 
      <button onClick={()=>setIsOpen(true)} className="btn btn-primary">Edit</button>
      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? "Undo" : "Complete"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>

     {isOpen && <Modal todo={todo} close={()=>setIsOpen(false)} />}

    </div>
  );5
};

export default TodoCard;

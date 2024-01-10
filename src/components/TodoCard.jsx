import { useDispatch } from "react-redux";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
   dispatch({
    type:"REMOVE_TODO",
    payload: todo.id,
   })
  };

  const handleStatus = () => {
   
    const updated = { ...todo , is_done: !todo.is_done };

    dispatch({
      type: "UPDATE_TODO",
      payload: updated,

    })
  }

  return (
    <div className="border rounded-5 shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Completed" : "In Progress"}</h6>
      <p>{todo.created_at}</p>
      <button className="btn btn-primary">Edit</button>
      <button onClick={handleStatus} className="btn btn-success mx-3">Complete</button>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default TodoCard;

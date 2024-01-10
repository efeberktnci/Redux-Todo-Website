import { useDispatch } from "react-redux";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
   dispatch({
    type:"REMOVE_TODO",
    payload: todo.id,
   })
  };

  return (
    <div className="border rounded-5 shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-success mx-3">Complete</button>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default TodoCard;

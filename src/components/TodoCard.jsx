const TodoCard = ({ todo }) => {
  return (
    <div>
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>
      <button>Edit</button>
      <button>Complete</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoCard;

import { useDispatch } from "react-redux";
import axios from "axios";
import { updateTodo } from "../redux/actions/todoActions";

const Modal = ({todo , close}) => {

 const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newText = e.target[1].value;

    const updated = {...todo, text:newText };

    axios.put(`/todos/${todo.id}` , updated)
    .then(() => dispatch( updateTodo(updated)));

  
    close();
  }

  


  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50" tabindex="-1">
      <div className="modal-dialog-centered modal-dialog">
        <form  onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Todo</h5>
            <button type="button" className="btn-close" onClick={close}></button>
          </div>
          <div className="modal-body">
            <label>New Title</label>
            <input className="form-control shadow mt-2" type="text" defaultValue={todo.text}/>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={close}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

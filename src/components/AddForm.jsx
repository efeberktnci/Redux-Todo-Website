import { v4 } from "uuid";
import { useDispatch } from 'react-redux';

const AddForm = () => {

   const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      created_at: new Date().toLocaleDateString(),
      isDone: false ,
    
    };
    
    dispatch({
      type:"ADD_TODO",
      payload: newTodo,
    })
  
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex gap-1'>
      <input
        placeholder='Orn: Market Listesi'
        className='form-control'
        type="text"
      />
      <button type="submit" className='btn btn-warning'>
        Add
      </button>
    </form>
  );
};

export default AddForm;

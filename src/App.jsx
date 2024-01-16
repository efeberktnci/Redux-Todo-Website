import React, { useEffect } from 'react'
import AddForm from './components/AddForm'
import ListTodos from './components/ListTodos'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useDispatch } from "react-redux";
import { setTodos } from './redux/actions/todoActions'

axios.defaults.baseURL = "http://localhost:3040"


const App = () => {
  const  dispatch = useDispatch();

  useEffect(() => {
    axios.get("/todos")
    .then((res) => dispatch(setTodos(res.data)))
  },[]);

  return (
   <div className='bg-dark vh-100 vw-100'>
    <div className='container p-5'>
     <h2 className='text-center'>
      REDUX <span className='text-warning'>CRUD</span>
      </h2>
      <AddForm/>
      <ListTodos/>
     </div>
    </div>

  )
}

export default App
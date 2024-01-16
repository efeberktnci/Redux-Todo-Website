import React, { useEffect } from 'react'
import AddForm from './components/AddForm'
import ListTodos from './components/ListTodos'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3040"


const App = () => {

  useEffect(() => {
    axios.get("/todos").then((res) => console.log(res.data))
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
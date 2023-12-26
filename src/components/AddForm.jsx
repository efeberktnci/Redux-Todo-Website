import React from 'react'

const AddForm = () => {
  return (
    <div className='d-flex gap-1'>
     <input placeholder='Orn: Market Listesi' className='form-control'  type="text" />
     <button className='btn btn-warning'>Add</button>
    </div>
  )
}

export default AddForm
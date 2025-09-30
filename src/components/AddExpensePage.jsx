import React, { useState } from 'react'
import '../styles/AddExpense.css'
const AddExpensePage = () => {
    const[expense,setExpense]=useState({
        title:"",
        amount:"",
        date:"" 
    })
    function handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        setExpense({...expense,[name]:value});
    }
  return (
    <form action=""
    id='add-expense'
    >
        <input placeholder='Enter Title' type="text" name='title' onChange={handleChange} />
        <input placeholder='Enter Amount' type="Number"  name='amount' onChange={handleChange}/>
        <input placeholder='select Date' type="date" name='date' onChange={handleChange}/>
    </form>
  )
}

export default AddExpensePage
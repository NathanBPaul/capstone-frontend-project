import React, { useState } from 'react'
import '../styles/AddExpense.css'
import axios from 'axios';
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
    async function submitExpense(e){
        e.preventDefault();
        try {
           await axios.post("http://localhost:5000/expenses",{
            ...expense
           }) 
           console.log("Expense added successfully",expense);

        } catch (error) {
          alert("Error adding expense")  
        }

    }
  return (
    <form action=""
    id='add-expense'
    onSubmit={submitExpense}
    >
        <input placeholder='Enter Title' type="text" name='title' onChange={handleChange} />
        <input placeholder='Enter Amount' type="Number"  name='amount' onChange={handleChange}/>
        <input placeholder='select Date' type="date" name='date' onChange={handleChange}/>
        <input type="submit" value={"Add Expense"} />
    </form>
  )
}

export default AddExpensePage
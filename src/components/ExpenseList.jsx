import React, { useEffect,useState } from 'react'
import Data from './Data'
import ExpenseItem from './ExpenseItem'
import ExpenseTotal from './ExpenseTotal';
import axios from 'axios';
const ExpenseList = () => {
    const[total,setTotal]=useState(0);
    const [expences,setExpences]=useState([]);

        async function fetchExpences(){
            try {
                const data = await axios.get("http://localhost:5000/expenses");
                setExpences(data.data);
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(()=>{
        fetchExpences();       
         },[])
         useEffect(()=>{
            let sum= 0;
            expences.forEach((item)=>{
            sum += item.amount;
        })
        setTotal(sum);
         },[expences])
    return (
        <>
    <table>
        <tr>
            <th>Amount</th>
            <th>Title</th>
            <th>Date</th>
        </tr>
        {
            expences.map((item)=>{
                return(
                    <ExpenseItem amount={item.amount} date={item.date} title={item.title}/>
                )
            })
        }
    </table>
    <ExpenseTotal total={total}/>
</>
  )
}

export default ExpenseList
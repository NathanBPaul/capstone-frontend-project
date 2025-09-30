import React, { useEffect,useState } from 'react'
import Data from './Data'
import ExpenseItem from './ExpenseItem'
import ExpenseTotal from './ExpenseTotal';

const ExpenseList = () => {
    const[total,setTotal]=useState(0);

        useEffect(()=>{
        let sum = 0;
        Data().forEach((item)=>{
            sum += item.amount;
        })
        setTotal(sum);
    },[])
    return (
        <>
    <table>
        <tr>
            <th>Amount</th>
            <th>Title</th>
            <th>Date</th>
        </tr>
        {
            Data().map((item)=>{
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
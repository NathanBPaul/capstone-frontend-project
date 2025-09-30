import React from 'react'

const ExpenseItem = ({title,amount,date}) => {
    

    return (
    <tr>
        <td>{amount}</td>
        <td>{title}</td>
        <td>{date}</td>
    </tr>
  )
}

export default ExpenseItem
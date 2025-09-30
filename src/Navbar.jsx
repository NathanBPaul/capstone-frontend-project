import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
    style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    }}
    >
       
       <Link to="/">Expense</Link>
        <Link to="/add">Add Expense</Link>
    </div>
  )
}

export default Navbar
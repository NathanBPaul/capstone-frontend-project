import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseList from './components/ExpenseList'
import Expen from './components/Expen'
import AddExpensePage from './components/AddExpensePage'
import Navbar from './Navbar'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Chart from './Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Expen/>}/>
      <Route path='/add' element={<AddExpensePage/>}/>
    </Routes>
     </BrowserRouter>
     <Chart/>
    </>
  )
}

export default App

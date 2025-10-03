import React, { useEffect,useState } from 'react'
import Data from './Data'
import ExpenseItem from './ExpenseItem'
import ExpenseTotal from './ExpenseTotal';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import axios from 'axios';
const ExpenseList = () => {
    const[total,setTotal]=useState(0);
    const [expences,setExpences]=useState([]);
    const[searchText,setSearchText]=useState("");
    const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
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
        <select name="" id=""
            onChange={async(e)=>{
               try {
                const val = e.target.value;
                await fetchExpences();
               const filteredData = expences.filter((ele)=>{
                return ele.title == val;
               })
               if(filteredData.length == 0){
                alert("No data found");
                return;
               }
               setExpences(filteredData); 
               } catch (error) {
                
               }
            }}
        >   <option value="">Select</option>
            <option value="Groceries">Groceries</option>
            <option value="Electricity Bill">Electricity Bill</option>
            <option value="Kirana">Kirana</option>
            <option value="Fuel">Fuel</option>
        </select>
        <form action=""
        onSubmit={(e)=>{
            e.preventDefault();
            const filteredData = expences
            .filter((ele)=>{
                return ele.title.toLowerCase().includes(searchText.toLowerCase());
            })
            setExpences(filteredData)
        }}
        >
            <input type="text" placeholder='Search...' onChange={(e)=>{
                setSearchText(e.target.value);
            }} />
            <input type="submit" />
        </form>
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
    <div>
        <ResponsiveContainer width="500px" height="500px">
            
      <BarChart width={150} height={40} data={data1}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </div>
</>
  )
}

export default ExpenseList
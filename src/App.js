import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expense/ExpenseFilter";
import ExpenseChart from "./components/Expense/ExpenseChart";
import "./style/all.css"

const init_Expense = [
  // {id:0,title:"Toilet Paper",price:450,date:new Date(2022,1,4)},
  // {id:1,title:"Bag",price:1200,date:new Date(2022,2,4)},
]

function App() {

  const [addData,setAddData] = useState(init_Expense);
  const [selectYear,setSelectYear] = useState("2022");
  const addExpenseHandler = (data) => {
    setAddData((prevData)=>{
      return [...prevData,data]
    })
  }

  const filterHandler = (filterYear) =>{
    setSelectYear(filterYear)
  }

  const filtered_data = addData.filter((item)=>{
    return item.date.getFullYear().toString()===selectYear;
  })

  let expenseContent = filtered_data.length>0 
  ? <>
      <Expenses data={filtered_data}/>
    </>
  : <p className="notFound">No Expense Found!</p> ;

  return (
    <div>
      <NewExpense getData={addExpenseHandler}/>
      <div className="expense-Wrap">
        <ExpenseChart expenses={filtered_data}/>
        <ExpenseFilter selected={filterHandler} year={selectYear}/>
        {expenseContent}
      </div>
    </div>
  );
}

export default App;
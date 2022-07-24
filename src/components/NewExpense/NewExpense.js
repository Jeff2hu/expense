import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

  const [showForm,setShowForm] = useState(false);
  const getNewExpense = (data) => {
    const saveNewExpense = {
      ...data,
      id:Math.random()
    }
    props.getData(saveNewExpense)
    setShowForm(false)
  }

  return (
    <div className='newExpense'>
      {showForm ? <NewExpenseForm getData={getNewExpense} onCancel={()=>{setShowForm(!showForm)}}/>
      :<button className='newExpense-show' onClick={()=>{setShowForm(!showForm)}}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense;
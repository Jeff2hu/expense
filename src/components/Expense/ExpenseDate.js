import React from 'react'

const ExpenseDate = (props) => {

  const month = props.date.toLocaleString("en-US",{ month: "long"});
  const day = props.date.toLocaleString("en-US",{ day:"2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-Item__date'>
      <h4 className='expense-Item__date__year'>{year}</h4>
      <h4 className='expense-Item__date__month'>{month}</h4>
      <h3 className='expense-Item__date__day'>{day}</h3>
    </div>
  )
}

export default ExpenseDate
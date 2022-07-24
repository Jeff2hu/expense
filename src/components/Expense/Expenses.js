import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

  return (
    <div>
      {props.data.map((item,index)=><ExpenseItem item={item} key={index}/>)}
    </div>
  )
}

export default Expenses;
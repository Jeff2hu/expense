import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-Item">
      <ExpenseDate date={props.item.date}/>
      <div className="expense-Item__description">
        <h2 className="expense-Item__description__title">{props.item.title}</h2>
        <h2 className="expense-Item__description__price">{props.item.price}</h2>
      </div>
    </Card>
  )
}

export default ExpenseItem;
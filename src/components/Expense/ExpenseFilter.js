import React from 'react';

const ExpenseFilter = (props) => {

  const selectHandler = (e) => {
    props.selected(e.target.value)
  }

  return (
    <div className='expense-filter'>
    <div className='expense-filter__control'>
      <label htmlFor='expense-filter__control__select'>Filter by year</label>
      <select id="expense-filter__control__select" onChange={selectHandler} value={props.year}>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </div>
  </div>
  )
}

export default ExpenseFilter
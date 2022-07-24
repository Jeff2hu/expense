import React,{ useState } from 'react'

const NewExpenseForm = (props) => {

  const [userInput,setUserInput] = useState({
    titleChange:"",
    dateChange:"",
    priceChange:""
  });

  const titleHandler = (e) => {
    setUserInput((prevInput)=>{
      return {...prevInput , titleChange:e.target.value}
    });
  }
  const dateHandler = (e) => {
    setUserInput((prevInput)=>{
      return {...prevInput,dateChange:e.target.value}
    });
  }
  const priceHandler = (e) => {
    setUserInput((prevInput)=>{
      return{...prevInput,priceChange:e.target.value}
    })
  }

  const addNewBtn = (e) => {
    e.preventDefault();
    const newExpense = {
      title:userInput.titleChange,
      date:new Date(userInput.dateChange),
      price:Number(userInput.priceChange)
    }
    props.getData(newExpense)
    
    setUserInput({
      titleChange:"",
      dateChange:"",
      priceChange:""
    })
  }

  return (
    <form className='newExpense-Form'>
      <div className="newExpense-Form__title">
        <label htmlFor="newExpense-Form__title__input">Title</label>
        <input id="newExpense-Form__title__input" type="text" 
          onChange={titleHandler} value={userInput.titleChange}/>
      </div>
      <div className="newExpense-Form__price">
        <label htmlFor="newExpense-Form_price__input">Date</label>
        <input id="newExpense-Form_price__input" type="date" min="2019-01-01" max="2022-12-31" 
          onChange={dateHandler} value={userInput.dateChange}/>
      </div>
      <div className="newExpense-Form__date">
        <label htmlFor="newExpense-Form_date__input">Price</label>
        <input id="newExpense-Form_date__input" type="num" 
          onChange={priceHandler} value={userInput.priceChange}/>
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit" onClick={addNewBtn}>Add</button>
    </form>
  )
}

export default NewExpenseForm;
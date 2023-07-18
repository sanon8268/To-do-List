import './App.css';
import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])  //EMPTY ARRAY

  function handleChange(event) {
    const task = event.target.value;
    setInputText(task)
  }

  function handleClick() {
    setItems((prevItems)=>{
       return [...prevItems, inputText]
    })
    setInputText("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder='Enter Anything'
          // name='task' as there is only one input
          value={inputText}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li> // yha is { } me koii naam de sakte hai even items
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;


import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { saveDataToRedux, removeDataFromRedux } from './redux';
import './App.css';
const App = () => {
  const [input, setInput] = useState();
  const stateX = useSelector((state) => state);
  const dispatchX = useDispatch();
  const ChangeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }
  const saveToRedux = (e) => {
    console.log("Clicke")
    dispatchX(saveDataToRedux(input));
  }
  const RemoveFromRedux = (id) => {
    dispatchX(removeDataFromRedux(id));
  }
  return (
    <div>
      <div className="MainContainer">
        <h1>Task Manager</h1>
        <div className="Container">
          <div className="InputField">
            <input placeholder='Enter Your Task' defaultValue={input} type="text" onChange={ChangeHandler} />
            <button onClick={saveToRedux}>Add Task</button>
          </div>
          <hr />
          <div className="DisplayField">

            {
              stateX.tasks.map((task, id) =>
                <div className="ItemBox" key={id}>
                  <h3>{task}</h3>
              <button onClick={()=>RemoveFromRedux(id)}>Delete</button>
            </div>)
            }
   
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

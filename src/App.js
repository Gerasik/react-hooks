import React, { Component } from 'react';
import './App.css';
import InputComponent from './InputComponent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputList: []
    }
  }

  addInput(){
    this.setState(function(prevState){
      if(prevState.inputList.length === 0 ){
        return {
          ...prevState,
          inputList: [{id: 1}],
        }
      }
      return {
        ...prevState,
        inputList: [...prevState.inputList, {id: prevState.inputList[prevState.inputList.length - 1].id + 1}]
      } 
    })
  }

  removeInput(id){
    this.setState(function(prevState){
      return {
        ...prevState,
        inputList: [...prevState.inputList.filter(item => item.id !== id )]
      } 
    })
  }

  render(){
    return (
      <>
        <button onClick={() => this.addInput()} className="add_input">Add input</button>
        <ul>
          {
            this.state.inputList.map(item => <InputComponent key={item.id} id={item.id} removeInput={(a) => this.removeInput(a)}/>)
          }
        </ul>
      </>
    );
  }
}

export default App;

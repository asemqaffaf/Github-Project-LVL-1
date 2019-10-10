import React, { Component } from 'react';
import Add from "./components/Add"
import Table from './components/Table';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 40,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 50,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };
  deleteHandler =(id)=>{
    console.log(id);
    const newArray = this.state.repos.filter((item,i)=>{
    return   item.id !== id
    })
    this.setState({
      repos : newArray
    })
  }
  addHandler = (item)=>{
    this.state.repos.push(item)
    this.setState({
      repos : this.state.repos
    })
  }
  render() {
    const {repos} = this.state
    const {deleteHandler} = this
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
        <Add add={this.addHandler} array={repos} ></Add>
        <Table array={repos} delete={deleteHandler}  ></Table>
      </div>
    );
  }
}

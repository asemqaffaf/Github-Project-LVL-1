import React, { Component } from 'react';
import Add from "./components/Add"
import Table from './components/Table';
import axios from "axios"
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
  componentDidMount=()=>{
    this.getElementsFromServer()
  }
  deleteHandler =(id)=>{
    console.log(id);
 
    axios.get(`http://localhost:9000/delete/${id}`)
    .then((arr)=>{
      this.setState({
        repos : arr.data
      })
    })
    // const newArray = this.state.repos.filter((item,i)=>{
    // return   item.id !== id
    // })
    // this.setState({
    //   repos : newArray
    // })
  }

  checkHandler = (id)=>{

    axios.get(`http://localhost:9000/check/${id}`)
    .then((arr)=>{
      this.setState({
        repos : arr.data
      })
    })

    //  this.state.repos.map((item,i)=>{
    //   if (item.id === id){
    //       // item.status = !item.status
    //       if(item.status === "Public" ){
    //         item.status = "Private"
    //       }
    //       else{
    //         item.status = "Public"
    //       }
    //   }
    //   return item;
    // }
    // )
    // this.setState({
    //   repos : this.state.repos
    // })
  }
  addHandler = (item)=>{
    console.log(item.title);
    axios.post('http://localhost:9000/post', {title : item.title , language : item.language, status : item.status})
    .then(res=>{
      console.log();
     this.setState({
       repos : res.data
     })
    })
 
  }
  getElementsFromServer=()=>{
    axios.get('http://localhost:9000/getAll')
   .then(a=>{
     console.log(a.data);
    this.setState({
      repos : a.data
    })
   }) 

  }
  render() {
    const {repos} = this.state
    const {deleteHandler} = this
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
        <button onClick={this.getElementsFromServer} >get Elements From Server </button>
        <Add add={this.addHandler} array={repos} ></Add>
        <Table array={repos} delete={deleteHandler} check={this.checkHandler}  ></Table>
      </div>
    );
  }
}

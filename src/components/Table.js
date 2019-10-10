import React, { Component } from 'react';
import Repo from "./Repo"
export default class Table extends Component {
  
  identifier =(id)=>{
   this.props.delete(id)
  }
  checkHandler = (id) =>{
    // console.log(id);
    this.props.check(id)
  }
  render() {
   const {array} = this.props
   const {identifier,checkHandler} = this
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>

        <table border="1px solid black">
          
            <tr>         
          <th>Number</th>
          <th>Title</th>
          <th>Repo status</th>
          <th>check</th>
          <th>is private</th>
          <th>language</th>
          <th>delete</th>
          </tr>
          
     {array.map((item) => {
     return(  
      <Repo key={item.id} data={item} id={identifier} check={checkHandler} ></Repo> 
      ) 
     })}
      
     </table>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Repo from "./Repo"
export default class Table extends Component {
  
  identifie =(id)=>{
   this.props.delete(id)
  }
  
  render() {
   const {array} = this.props
   const {identifie} = this
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>

        <table border="1px solid black">
          
            <th>         
          <td>Number</td>
          <td>Title</td>
          <td>Repo status</td>
          <td>check</td>
          <td>is private</td>
          <td>language</td>
          <td>delete</td>
          </th>
 
          
     {array.map((item) => {
     return(  
      <Repo key={item.id} data={item} id={identifie} ></Repo> 
      ) 
     })}
      
     </table>
      </div>
    );
  }
}

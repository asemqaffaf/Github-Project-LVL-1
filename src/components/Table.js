import React, { Component } from 'react';
import Repo from "./Repo"
export default class Table extends Component {
  render() {
   const {array} = this.props
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>

        <table border="1px solid black">
          {/* <thead>
          <tr>
          <th>Number</th>
          <th>Title</th>
          <th>Repo status</th>
          <th>check</th>
          <th>is private</th>
          <th>language</th>
          <th>delete</th>
          </tr>
          </thead> */}
          <tbody>

     {array.map((item) => {
     return(  
      <tr>
       <Repo>data={item} ></Repo> 
       </tr>
      )
     })}
       </tbody>     
     </table>
      </div>
    );
  }
}

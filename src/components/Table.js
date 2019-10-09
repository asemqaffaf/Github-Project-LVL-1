import React, { Component } from 'react';
import Repo from "./Repo"
export default class Table extends Component {
  render() {
   const {array} = this.props
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>
        <table border="1px solid black">
          <tr>
          <th>head</th>
          <th>head2</th>
          <th>head3</th>
          </tr>
     {array.map((item) => {
     return(  
      <tr key={item.id} > 
        <td>
      <Repo key={item.id}  data={item} >item.title</Repo> 
      </td>
      </tr>
      )
     })}
     </table>
      </div>
    );
  }
}

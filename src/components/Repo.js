import React, { Component } from 'react';

export default class Repo extends Component {
  state = {
    isChecked : true
  }
  deleteHandler =(id)=>{
    // console.log(id);
    this.props.id(id)
  }
  render() {
    const {data} = this.props
    const {deleteHandler} = this
    return (
      <tr style={{ border: '3px red solid' }}>    

      <td>
      {data.id}
      </td>
       <td>
         {data.title}
       </td>
       <td>
         {data.status}
       </td>
       <td>
         {data.language}
       </td>
       <td>
        <label>check</label>
      <input type="checkbox" checked={this.state.isChecked? "checked" : ""} ></input>
       </td>
       <td>
      <button style={{backgroundColor:'Red'}} onClick={deleteHandler.bind(this,data.id)}>X</button>
      </td>
      </tr>
    );
  }
}
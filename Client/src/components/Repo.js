import React, { Component } from 'react';

export default class Repo extends Component {
  // state = {
  //   isChecked : true
  // }
  deleteHandler =(id)=>{
    this.props.id(id)
  }
  checkHandler = (id)=>{
    this.props.check(id)
  }

  render() {
    const {data} = this.props
    const {deleteHandler,checkHandler} = this
    return (
      <tr>    
      <td>
      # {data.id}
      </td>
       <td>
         {data.title}
       </td>
       <td>
         {data.status.toUpperCase()}
       </td>
       <td>
        {/* <label>check</label>asdasdasdsa */}
      <input type="checkbox" checked={data.status=== 'Private'? true : false } onChange={checkHandler.bind(this,data.id)} ></input>
       </td>
       <td>
         {data.status==='Private'? "YES" : "NO"}
       </td>
       <td>
         {data.language}
       </td>
       <td>
      <button style={{backgroundColor:'Red'}} onClick={deleteHandler.bind(this,data.id)}>X</button>
      </td>
      </tr>
   
    );
  }
}
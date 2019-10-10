import React, { Component } from 'react';

export default class Add extends Component {

  state = {
    title: null,
    repoLang : null,
    status : null
  }
  
  onChangeHandler = (event)=>{
this.setState({
  [event.target.name] : event.target.value
})
  }
  addTitle=()=>{
    let newId = 1
    try{
   newId = this.props.array[this.props.array.length-1].id+1
    }
    catch{
       newId = 1
    }
  const newTitle = this.state.title
  const repoLang = this.state.repoLang
  const newStatus = this.state.status

    const newObject = {
      id : newId,
      title : newTitle,
      status : newStatus,
      language : repoLang,
    }
    if(this.state.title != null && this.state.repoLang!= null&& this.state.status!= null){
this.props.add(newObject)
    }
  }

  selectElement =(event)=>{
    this.setState({
      status : event.target.value
    })
  }
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>
        <input placeholder="title language" name="title"  onChange={this.onChangeHandler}></input>
        <input placeholder="repo language" name="repoLang" onChange={this.onChangeHandler}></input>

        <select onChange={this.selectElement}>
        <option  hidden>Repo state (Private/Public)</option>
          <option  value="Public" >Public</option>
          <option value="Private"  >Private</option>
        </select>
        <button onClick={this.addTitle}>add</button>
      </div>
    );
  }
}

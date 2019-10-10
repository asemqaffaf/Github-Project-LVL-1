import React, { Component } from 'react';

export default class Add extends Component {

  state = {
    title: "",
    repoLang : "",
    status : ""
  }
  
  onChangeHandlerTitle = (event)=>{
this.setState({
  title : event.target.value
})
  }
  onChangeHandlerRepo = (event)=>{
    this.setState({
      repoLang : event.target.value.id
    })
  }
    // {
  //   id: 1,
  //   title: 'Array',
  //   status: 'Private',
  //   language: 'HTML'
  // },

  addTitle=()=>{
  const newId = this.props.array[this.props.array.length-1].id+1

  const newTitle = this.state.title
  const repoLang = this.state.repoLang
  const newStatus = this.state.status

    const newObject = {
      id : newId,
      title : newTitle,
      status : newStatus,
      language : repoLang,
    }

this.props.add(newObject)
  }
  selectElement =(event)=>{
    this.setState({
      status : event.target.value
    })
    // console.log(event.target.value);
  }
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>
        <input placeholder="title language"  onChange={this.onChangeHandlerTitle}></input>
        <input placeholder="repo language" onChange={this.onChangeHandlerRepo}></input>

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

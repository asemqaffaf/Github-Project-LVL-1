import React, { Component } from 'react';

export default class Repo extends Component {

  render() {
    const {data} = this.props
    return (
      <div style={{ border: '3px red solid' }}>
  
          <p>{data.title}</p>
       
        {/* <h6>{data.title}</h6> */}
      </div>
    );
  }
}
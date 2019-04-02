import React, { Component } from 'react';

export default class BillResults extends Component {
  render() {
    return (
      <div>
        <h2>Person count: {this.props.person ? this.props.person : 0}</h2>
        <h1>Total: ฿{this.props.sum ? this.props.sum : 0}</h1>
        {this.props.remark ? this.props.remark : 'Welcome !'}
      </div>
    );
  }
}

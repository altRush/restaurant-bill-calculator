import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billValue: '',
      personCount: '',
      couponCode: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const bill = {
      personCount: parseInt(this.state.personCount),
      billValue: this.state.billValue,
      couponCode: this.state.couponCode
    };

    let { couponCode, personCount } = bill;

    // The assignment said these rules can be in a combination, need to separate them apart as objects.

    if (personCount < 14) {
      if (couponCode === 'LUCKY ONE' || personCount * 459 >= 1000) {
        bill.billValue = personCount * 459 - (personCount * 459 * 15) / 100;
      } else if (couponCode === 'LUCKY TWO') {
        bill.billValue = personCount * 459 - (personCount * 459 * 20) / 100;
      } else if (couponCode === '4PAY3') {
        if (personCount > 3) {
          let personDeduct = personCount / 4;
          let exceedingPersonRatio = personDeduct % 1;
          let personDuringDisount = 0;

          if (exceedingPersonRatio !== 0) {
            personDeduct = Math.floor(personDeduct);
          }

          personDuringDisount = personCount - personDeduct;
          bill.personFinalCount = personDuringDisount;
          bill.billValue = bill.personFinalCount * 459;
        } else {
          bill.billValue = personCount * 459;
          console.log(
            'This coupon code is not applicable for your total payment amount.'
          );
        }
      } else {
        bill.billValue = personCount * 459;
      }
    } else {
      console.log(
        (bill.billValue = personCount * 459 - (personCount * 459 * 25) / 100)
      );
    }

    console.log(bill);
  }

  render() {
    return (
      <div className="App">
        <h1>Enter the coupon code</h1>
        <form onSubmit={this.onSubmit}>
          Person count:{' '}
          <input
            type="number"
            name="personCount"
            id="personCount"
            value={this.state.personCount}
            onChange={this.onChange}
          />
          <br />
          Coupon Code:{' '}
          <input
            type="text"
            name="couponCode"
            id="couponCode"
            value={this.state.couponCode}
            onChange={this.onChange}
          />{' '}
          <br />
          <button type="submit">Check</button>
        </form>
      </div>
    );
  }
}

export default App;

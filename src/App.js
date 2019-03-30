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

    // Don't forget to apply code destructuring
    if (bill.personCount < 14) {
      if (bill.couponCode === 'LUCKY ONE') {
        bill.billValue = (bill.personCount * 459 * 15) / 100;
      } else if (bill.couponCode === 'LUCKY TWO') {
        bill.billValue = (bill.personCount * 459 * 20) / 100;
      } else if (bill.couponCode === '4PAY3') {
        let personDiscount = bill.personCount / 4;
        if (personDiscount >= 1) {
          if (bill.personCount % 4 === 0) {
            console.log('4PAY3 is a success');
            bill.personFinalCount = bill.personCount - personDiscount;
            bill.billValue = bill.personFinalCount * 459;
          } else if (bill.personCount % 4 !== 0) {
            let exceedingPerson = bill.personCount % 4;
            console.log(exceedingPerson);
            switch (exceedingPerson) {
              case 0.75:
                bill.billValue = bill.personFinalCount * 459;
                break;
              case 1.5:
                bill.personCount = bill.personCount + 1;
                bill.billValue = bill.personCount * 459;
                break;
              case 2.25:
                bill.personCount = bill.personCount + 2;
                bill.billValue = bill.personCount * 459;
                break;
              default:
                bill.billValue = bill.personCount * 459;
            }
          }
        } else {
          bill.billValue = bill.personCount * 459;
          console.log(
            'This coupon code is not applicable for your total payment amount.'
          );
        }
      } else {
        bill.billValue = bill.personCount * 459;
      }
    } else {
      console.log((bill.billValue = (bill.personCount * 459 * 25) / 100));
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

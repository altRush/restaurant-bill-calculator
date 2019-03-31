import React, { Component } from 'react';

export default class CouponForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billValue: '',
      personCount: '',
      couponCode: '',
      couponStack: []
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
      couponCode: this.state.couponCode,
      couponStack: this.state.couponStack
    };

    let { couponCode, couponStack, personCount } = bill;
    let estimatedBill = personCount * 459;
    // The assignment said these rules can be in a combination, need to separate them apart as objects.

    if (couponCode === 'LUCKY ONE' || estimatedBill >= 1000) {
      if (couponStack.indexOf('LUCKY ONE') === -1) {
        couponStack.push('LUCKY ONE');
      } else {
        console.log('"LUCKY ONE" coupon code is already applied!');
      }
      console.log(couponStack);
    }

    if (couponCode === 'LUCKY TWO') {
      if (personCount > 1) {
        if (couponStack.indexOf('LUCKY TWO') === -1) {
          couponStack.push('LUCKY TWO');
        } else {
          console.log('"LUCKY TWO" coupon code is already applied!');
        }
        console.log(couponStack);
      } else {
        console.log('This coupon code is not applicable for you.');
      }
    }

    if (couponCode === '4PAY3') {
      if (personCount > 3) {
        if (couponStack.indexOf('4PAY3') === -1) {
          couponStack.push('4PAY3');
        } else {
          console.log('"4PAY3" coupon code is already applied!');
        }
        console.log(couponStack);
      } else {
        console.log('This coupon code is not applicable for you.');
      }
    }
    console.log(bill);
  }
  render() {
    return (
      <div>
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

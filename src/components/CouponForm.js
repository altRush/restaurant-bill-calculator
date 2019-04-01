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
      couponStack: this.state.couponStack
    };

    const couponCode = this.state.couponCode;
    let { couponStack, personCount } = bill;
    // The assignment said these rules can be in a combination, need to separate them apart as objects.

    if (couponCode === 'LUCKY ONE') {
      if (couponStack.indexOf('LUCKY ONE') === -1) {
        couponStack.push('LUCKY ONE');
        // console.log(bill);
      } else {
        console.log('"LUCKY ONE" coupon code is already applied!');
      }
    }

    if (couponCode === 'LUCKY TWO') {
      if (personCount > 1) {
        if (couponStack.indexOf('LUCKY TWO') === -1) {
          couponStack.push('LUCKY TWO');
          // console.log(bill);
        } else {
          console.log('"LUCKY TWO" coupon code is already applied!');
        }
      } else {
        console.log('This coupon code is not applicable for you.');
      }
    }

    if (couponCode === '4PAY3') {
      if (personCount > 3) {
        if (couponStack.indexOf('4PAY3') === -1) {
          couponStack.push('4PAY3');
          // console.log(bill);
        } else {
          console.log('"4PAY3" coupon code is already applied!');
        }
      } else {
        console.log('This coupon code is not applicable for you.');
      }
    }

    // Coupon activation
    let estimatedBill = personCount * 459;

    const lucky = estimatedBill => {
      if (couponStack.indexOf('LUCKY TWO') !== -1) {
        estimatedBill = Math.floor(estimatedBill - (estimatedBill * 20) / 100);
        console.log(`This is LUCKY TWO`);
      } else if (couponStack.indexOf('LUCKY ONE') !== -1) {
        estimatedBill = Math.floor(estimatedBill - (estimatedBill * 15) / 100);
        console.log(`This is LUCKY ONE`);
      }
      return estimatedBill;
    };

    const fourPayThree = estimatedBill => {
      if (personCount > 3) {
        let personDeduct = personCount / 4;
        let exceedingPersonRatio = personDeduct % 1;
        let personDuringDisount = 0;

        if (exceedingPersonRatio !== 0) {
          personDeduct = Math.floor(personDeduct);
        }

        personDuringDisount = personCount - personDeduct;
        bill.personFinalCount = personDuringDisount;
        console.log('This is 4PAY3');
        estimatedBill = Math.floor(bill.personFinalCount * 459);
      } else {
        estimatedBill = Math.floor(estimatedBill);
        console.log('This coupon code is not applicable for you.');
      }
      return estimatedBill;
    };

    let couponCase = '';
    if (
      (couponStack.indexOf('LUCKY ONE') !== -1 ||
        couponStack.indexOf('LUCKY TWO') !== -1) &&
      couponStack.indexOf('4PAY3') === -1
    ) {
      couponCase = 'lucky';
    } else if (
      couponStack.indexOf('LUCKY ONE') === -1 &&
      couponStack.indexOf('LUCKY TWO') === -1 &&
      couponStack.indexOf('4PAY3') !== -1
    ) {
      couponCase = 'fourPayThree';
    } else if (
      (couponStack.indexOf('LUCKY ONE') !== -1 ||
        couponStack.indexOf('LUCKY TWO') !== -1) &&
      couponStack.indexOf('4PAY3') !== -1
    ) {
      couponCase = 'luckyFourPayThree';
    } else {
      couponCase = 'No case';
    }

    switch (couponCase) {
      case 'lucky':
        estimatedBill = lucky(estimatedBill);
        break;
      case 'fourPayThree':
        estimatedBill = fourPayThree(estimatedBill);
        break;
      case 'luckyFourPayThree':
        estimatedBill = lucky(fourPayThree(estimatedBill));
        break;
      default:
        return estimatedBill;
    }

    console.log(`Estimated bill: ${estimatedBill}`);

    // if (estimatedBill > 6000) {
    //   bill.couponStack.length = 0;
    //   console.log(
    //     (bill.billValue = Math.floor(
    //       estimatedBill - (estimatedBill * 25) / 100
    //     ))
    //   );
    // } else {
    //   console.log(estimatedBill);

    // }

    bill.billValue = estimatedBill;

    console.log(`Grand total: `);
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

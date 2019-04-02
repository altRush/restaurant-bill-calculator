import React, { Component } from 'react';
import { black } from 'ansi-colors';

export default class CouponCard extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.coupon.indexOf('LUCKY ONE') !== -1 &&
          this.props.coupon.indexOf('OVER 6000') === -1 ? (
            <img
              style={{ border: 'solid 2px black' }}
              alt="Lucky One"
              src={
                'https://dummyimage.com/200x50/42de5c/3b3b3b.png&text=Lucky+One'
              }
            />
          ) : (
            ''
          )}{' '}
          {this.props.coupon.indexOf('LUCKY TWO') !== -1 &&
          this.props.coupon.indexOf('OVER 6000') === -1 ? (
            <img
              style={{ border: 'solid 2px black' }}
              alt="Lucky Two"
              src={
                'https://dummyimage.com/200x50/c7e62b/3b3b3b.png&text=Lucky+Two'
              }
            />
          ) : (
            ''
          )}{' '}
          {this.props.coupon.indexOf('4PAY3') !== -1 &&
          this.props.coupon.indexOf('OVER 6000') === -1 ? (
            <img
              style={{ border: 'solid 2px black' }}
              alt="Lucky One"
              src={
                'https://dummyimage.com/200x50/ff7300/ffffff.png&text=4+Pay+3'
              }
            />
          ) : (
            ''
          )}{' '}
          {this.props.coupon.indexOf('OVER 6000') !== -1 ? (
            <img
              style={{ border: 'solid 2px black' }}
              alt="Lucky One"
              src={
                'https://dummyimage.com/200x50/6f43e0/ffffff.png&text=Over+6000'
              }
            />
          ) : (
            ''
          )}{' '}
        </p>
      </div>
    );
  }
}

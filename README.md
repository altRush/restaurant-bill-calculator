### Restaurant Bill Calculator

1. Make a calc to manage bills and their relevant promotions.
2. Seats:

## Zone A

- Restaurant zone 60 seats
- Counter bar 12 seats  
  -- sum 72 seats in Zone A

## Zone B

- 2 x 8 seats table = 16 seats
- 6 x 4 seats table = 24 seats
- 4 x 2 seats table = 8 seats  
  -- sum 48 seats in Zone B

3. Regular price is 459 per seat

## Draft logics on promotions

1.1 if (couponCode === "LUCKY ONE" || bill > 1000){  
bill = bill - 15%  
}  
1.2 if ((customerBillAmount % 4) === 0 && couponCode === "4PAY3"){  
bill = bill - 459  
}  
1.3 if((customerBillAmount % 2) === 0 && couponCode === "LUCKY TWO") {  
bill = bill - 20%  
}

else

2.1 if (bill > 6000) { bill = bill - 25% }

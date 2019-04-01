if (couponCode === 'LUCKY ONE') {
  bill.billValue = Math.floor(
    personCount * 459 - (personCount * 459 * 15) / 100
  );
} else if (couponCode === 'LUCKY TWO') {
  bill.billValue = Math.floor(
    personCount * 459 - (personCount * 459 * 20) / 100
  );
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
    bill.billValue = Math.floor(bill.personFinalCount * 459);
  } else {
    bill.billValue = Math.floor(personCount * 459);
    console.log('This coupon code is not applicable for you.');
  }
} else {
  bill.billValue = Math.floor(personCount * 459);
}

if (estimatedBill > 6000) {
  bill.couponStack.length = 0;
  console.log(
    (bill.billValue = Math.floor(
      personCount * 459 - (personCount * 459 * 25) / 100
    ))
  );
}

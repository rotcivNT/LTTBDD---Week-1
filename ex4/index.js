// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

const bills = [275, 40, 430]

bills.forEach(bill => {
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
    console.log(`The bill was: ${bill},  the tip was: ${tip}, and the total value ${bill + tip}`)
})
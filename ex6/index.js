// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
const calcTip = (bills) => {
    return bills.map(bill => (
        (bill >= 50 && bill <= 300)? bill * 0.15 : bill * 0.2
    ))
}

const bills = [125, 55, 44]

const tips = calcTip(bills)

const totals = bills.map((bill, index) => bill + tips[index])

console.log("Original Bills:", bills)
console.log("Tips:", tips)
console.log("Totals:", totals)
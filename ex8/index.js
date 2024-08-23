// Let's improve Steven's tip calculator even more, this time using loops!

const calcTip = (bills) => {
    return bills.map(bill => (
        (bill >= 50 && bill <= 300)? bill * 0.15 : bill * 0.2
    ))
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = calcTip(bills)

const totals = bills.map((bill, index) => bill + tips[index])

totals.forEach(total => {
    console.log(`The bill was: ${bills[totals.indexOf(total)]}, the tip was: ${tips[totals.indexOf(total)]}, and the total value ${total}`)
})
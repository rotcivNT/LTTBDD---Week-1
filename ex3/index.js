// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

const WINNER_LOG = {
    "DOLPHIN": "Dolphins win the trophy!",
    "KOALA": "Koalas win the trophy!",
    "DRAW": "It's a draw!"
}

// const dolphinsScore = [96, 108, 89]
// const koalasScore = [88, 91, 110]

// const dolphinAvgScore = dolphinsScore.reduce((cur, pre) => {
//     return cur + pre
// },0)
// const koalasAvgScore = koalasScore.reduce((cur, pre) => {
//     return cur + pre
// },0)


// const winner = dolphinAvgScore > koalasAvgScore? "DOLPHIN" : dolphinAvgScore < koalasAvgScore? "KOALA" : "DRAW"

// console.log(WINNER_LOG[winner])

// Bonus test case 1 - include requirement for score at least 100

// const dolphinsScore = [97, 112, 101]
// const koalasScore = [109, 95, 123]

// const dolphinAvgScore = dolphinsScore.reduce((cur, pre) => {
//     return cur + pre
// },0)
// const koalasAvgScore = koalasScore.reduce((cur, pre) => {
//     return cur + pre
// },0)

// let winner = WINNER_LOG["DRAW"]

// if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100) {
//     winner = WINNER_LOG["DOLPHIN"]
// } else if (koalasAvgScore  > dolphinAvgScore && koalasAvgScore >= 100) {
//     winner = WINNER_LOG["KOALA"]
// }

// console.log(winner)


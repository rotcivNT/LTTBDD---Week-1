// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!


const calcAverage = (scores) => {
    return scores.reduce((acc, score) => acc + score, 0) / scores.length;
}

const checkWinner = (dolphinsAvgScore, koalasAvgScore) => {
    if (dolphinsAvgScore >= koalasAvgScore * 2) {
        console.log(`Dolphins win the trophy!, (${dolphinsAvgScore} vs ${koalasAvgScore})`);
        
    } else if (koalasAvgScore >= dolphinsAvgScore * 2) {
        console.log(`Koalas win the trophy!, (${koalasAvgScore} vs ${dolphinsAvgScore})`);
    } 
    else console.log("No team win the trophy !");
    
    
}

// Test data 2
const dolphinsScores = [85, 54, 41];
const koalasScores = [23, 34, 27];

const dolphinsAvgScore = calcAverage(dolphinsScores);
const koalasAvgScore = calcAverage(koalasScores);

checkWinner(dolphinsAvgScore, koalasAvgScore);

// Test data 1
// const dolphinsScores = [44, 23, 71];
// const koalasScores = [65, 54, 49];

// const dolphinsAvgScore = calcAverage(dolphinsScores);
// const koalasAvgScore = calcAverage(koalasScores);

// checkWinner(dolphinsAvgScore, koalasAvgScore);
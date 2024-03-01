function rollSixSidedDie() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollCustomDie(sides) {
    if (sides < 1) {
        throw new Error("Number of sides must be at least 1.");
    }

    return Math.floor(Math.random() * sides) + 1;
}


const resultSixSided = rollSixSidedDie();
console.log(`Rolling a six-sided die: ${resultSixSided}`);

const resultCustomDie = rollCustomDie(10);
console.log(`Rolling a 10-sided die: ${resultCustomDie}`);

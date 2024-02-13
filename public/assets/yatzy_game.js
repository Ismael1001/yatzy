class YatzyGame {
    constructor() {
        this.turn = 0; 
        this.diceValues = [0, 0, 0, 0, 0]; 
        this.keepState = [false, false, false, false, false]; 
    }

    rollDice() {
        if (this.turn < 3) {
            for (let i = 0; i < 5; i++) {
                if (!this.keepState[i]) {
                    this.diceValues[i] = Math.floor(Math.random() * 6) + 1;
                }
            }
            this.turn++;
        } else {
            console.log("Game over! You've reached the maximum number of turns.");
        }
    }

    toggleKeepDie(index) {
        if (index >= 0 && index < 5) {
            this.keepState[index] = !this.keepState[index];
        } else {
            console.error("Invalid die index.");
        }
    }

    displayGameState() {
        console.log(`Turn: ${this.turn}`);
        console.log(`Dice Values: ${this.diceValues}`);
        console.log(`Keep State: ${this.keepState}`);
    }
}
const yatzyGame = new YatzyGame();

yatzyGame.rollDice();
yatzyGame.displayGameState();

yatzyGame.toggleKeepDie(0);
yatzyGame.toggleKeepDie(2);

yatzyGame.rollDice();
yatzyGame.displayGameState();

yatzyGame.rollDice();
yatzyGame.displayGameState();

yatzyGame.rollDice();
yatzyGame.displayGameState();

class YatzyEngine {
    static calculateTurnScore(game, scoreBox) {
        if (game.turn > 0) {
            const diceValues = game.diceValues;

            switch (scoreBox) {
                case 'ones':
                    return YatzyEngine.calculateSumForNumber(diceValues, 1);
                case 'twos':
                    return YatzyEngine.calculateSumForNumber(diceValues, 2);
                case 'threes':
                    return YatzyEngine.calculateSumForNumber(diceValues, 3);
                default:
                    console.error("Invalid score box.");
                    return 0;
            }
        } else {
            console.error("Cannot calculate score before any turns have been taken.");
            return 0;
        }
    }

    static calculateSumForNumber(diceValues, number) {
        return diceValues.reduce((sum, value) => (value === number ? sum + value : sum), 0);
    }

    static updateOverallScore(game) {
        if (game.turn === 3) {
            const upperSectionScore = YatzyEngine.calculateUpperSectionScore(game);
            const bonus = upperSectionScore >= 63 ? 35 : 0;
            const totalScore = upperSectionScore + bonus;

            game.score = totalScore;
            game.bonus = bonus;

            console.log("Overall Score Updated:");
            console.log(`Total Score: ${totalScore}`);
            console.log(`Bonus: ${bonus}`);
        } else {
            console.error("Cannot update overall score before completing all turns.");
        }
    }

    static calculateUpperSectionScore(game) {
        const upperSectionDiceValues = game.diceValues.slice(0, 6);

        return upperSectionDiceValues.reduce((sum, value) => sum + value, 0);
    }
}

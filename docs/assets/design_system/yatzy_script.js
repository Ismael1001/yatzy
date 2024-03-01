document.addEventListener("DOMContentLoaded", function () {
    if (yatzyGame) {
        yatzyGame.displayGameState();
        yatzyGame.toggleKeepDie(0);
        yatzyGame.toggleKeepDie(2);

        const turnScore = YatzyEngine.calculateTurnScore(yatzyGame, 'ones');
        console.log(`Score for the ones box on turn ${yatzyGame.turn}: ${turnScore}`);

        YatzyEngine.updateOverallScore(yatzyGame);
    } else {
        console.error("Yatzy game object not found.");
    }
});

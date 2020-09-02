var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
function startGame() {
    var playerName = getInputValue("playername");
    logPlayer(playerName);
    postScore(200, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath player"; }
    console.log("New game starting for player: " + name);
}
function getInputValue(elementID) {
    var inputElement = (document.getElementById(elementID));
    if (inputElement.value === "")
        return undefined;
    return inputElement.value;
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var logger;
    if (score < 0)
        logger = logError;
    else
        logger = logMessage;
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
function logError(err) {
    console.error(err);
}
function logMessage(message) {
    console.log(message);
}
document.getElementById("startGame").addEventListener("click", startGame);
var firstPlayer = new Player();
firstPlayer.name = "Tony Soprano";
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map
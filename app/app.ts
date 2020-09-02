/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// handler for start game
document.getElementById("startGame")!.addEventListener("click", () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue("playername");

  const problemCount: number = Number(Utility.getInputValue("problemCount"));
  const factor: number = Number(Utility.getInputValue("factor"));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// handler for calculate score button
document.getElementById("calculate")!.addEventListener("click", () => {
  newGame.calculateScore();
});

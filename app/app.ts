import { Player } from "./player";
import { Game } from "./game";
import * as Helpers from "./utility";

let newGame: Game;

// handler for start game
document.getElementById("startGame")!.addEventListener("click", () => {
  const player: Player = new Player();
  player.name = Helpers.getValue("playername");

  const problemCount: number = Number(Helpers.getValue("problemCount"));
  const factor: number = Number(Helpers.getValue("factor"));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// handler for calculate score button
document.getElementById("calculate")!.addEventListener("click", () => {
  newGame.calculateScore();
});

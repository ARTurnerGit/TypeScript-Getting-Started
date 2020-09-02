import { getValue } from "./utility";
import { Result } from "./result";
import { Player } from "./player";
import { Scoreboard } from "./scoreboard";

export class Game {
  private scoreboard: Scoreboard = new Scoreboard();

  constructor(
    public player: Player,
    public problemCount: number,
    public factor: number
  ) {}

  displayGame(): void {
    // create the game HTML
    let gameForm: string = "";
    for (let i = 1; i <= this.problemCount; i++) {
      gameForm += '<div class="form-group">';
      gameForm +=
        '<label for="answer' + i + '" class="col-sm-2 control-label">';
      gameForm += String(this.factor) + " x " + i + " = </label>";
      gameForm +=
        '<div class="col-sm-1"><input type="text" class="form-control" id="answer' +
        i +
        '" size="5" /></div>';
      gameForm += "</div>";
    }

    // add element to game page
    const gameElement: HTMLElement = document.getElementById("game")!;
    gameElement.innerHTML = gameForm;

    // activate the button
    document.getElementById("calculate")!.removeAttribute("disabled");
  }

  calculateScore(): void {
    let score: number = 0;

    // calculate the number of correct answers
    for (let i = 1; i <= this.problemCount; i++) {
      const answer: number = Number(getValue("answer" + i));
      if (i * this.factor === answer) score++;
    }

    // create a new Result object for the Scoreboard
    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor,
    };

    // add result and update scoreboard
    this.scoreboard.addResult(result);
    this.scoreboard.updateScoreboard();

    // disable the button
    document.getElementById("calculate")!.setAttribute("disabled", "true");
  }
}

/// <reference path="player.ts" />

function startGame() {
  let playerName: string | undefined = getInputValue("playername");
  logPlayer(playerName);

  postScore(200, playerName);
  postScore(-5, playerName);
}

function logPlayer(name: string = "MultiMath player"): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === "") return undefined;
  return inputElement.value;
}

function postScore(
  score: number,
  playerName: string = "MultiMath Player"
): void {
  let logger: (value: string) => void;
  if (score < 0) logger = logError;
  else logger = logMessage;
  const scoreElement: HTMLElement | null = document.getElementById(
    "postedScores"
  );
  // ....! is the ts non-null assertion operator
  scoreElement!.innerText = `${score} - ${playerName}`;
  logger(`Score: ${score}`);
}
function logError(err: string): void {
  console.error(err);
}
function logMessage(message: string): void {
  console.log(message);
}

document.getElementById("startGame")!.addEventListener("click", startGame);

let firstPlayer: Player = new Player();
firstPlayer.name = "Tony Soprano";
console.log(firstPlayer.formatName());

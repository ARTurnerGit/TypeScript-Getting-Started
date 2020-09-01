function startGame() {
  let playerName: string | undefined = getInputValue("playername");
  logPlayer(playerName);

  postScore(200, playerName);
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
  const scoreElement: HTMLElement | null = document.getElementById(
    "postedScores"
  );
  // ....! is the ts non-null assertion operator
  scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById("startGame")!.addEventListener("click", startGame);

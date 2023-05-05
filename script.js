var sounds = ["assets/kick.mp3"];
makeClickNoise(document.getElementById("help-icon"));
makeClickNoise(document.getElementById("ersterButton"));
makeClickNoise(document.getElementById("close-q"));
function playSample(sounds) {
    var sound = new Audio(sounds);
    sound.play();
}
document.getElementById("help-icon").addEventListener("click", createQuestionbox);
var questionBox;
questionBox = document.querySelector("#questionbox");
var box = document.createElement("div");
box.classList.add("active-q");
document.getElementById("close-q").addEventListener("click", closeQuestionBox);
function createQuestionbox() {
    questionBox.classList.add('active-qbox');
    console.log("frage wurde geklickt");
    box.innerHTML = "hallo";
    questionBox.appendChild(box);
}
function closeQuestionBox() {
    if (questionBox.classList.contains("active-qbox")) {
        questionBox.classList.remove("active-qbox");
        box.innerHTML = "";
    }
}
document.getElementById("ersterButton").addEventListener("click", startGame);
function startGame() {
    console.log("spiel wird gestartet");
}
function makeClickNoise(button) {
    button.addEventListener("mousedown", function () { playSample("assets/kick.mp3"); });
}
// let clicked: boolean = false;
// function boxErstellen(): void {
//     if (clicked == true ) {
//         let box: HTMLDivElement = document.createElement("div");
//         box.innerHTML = "";
//         box.classList.add("feld");
//         questionBox.appendChild(box);
//     }
// }
// spielButton.addEventListener("click", () => {
//     // Überprüfen, ob die Spiel-Erklärung bereits vorhanden ist
//     if (!spielErklaerung.innerHTML) {
//       // Spiel-Erklärung erstellen
//       const erklaerungSpan = document.createElement("span");
//       erklaerungSpan.innerHTML = "Hier steht die Erklärung des Spiels.";
// function createYesNoButton(callback: (isYes: boolean) => void): void {
//     const yesButton = document.createElement("button");
//     yesButton.innerText = "Ja";
//     yesButton.addEventListener("click", () => {
//       callback(true);
//     });
//     const noButton = document.createElement("button");
//     noButton.innerText = "Nein";
//     noButton.addEventListener("click", () => {
//       callback(false);
//     });
//     document.body.appendChild(yesButton);
//     document.body.appendChild(noButton);
//   }
//   createYesNoButton((isYes: boolean) => {
//     if (isYes) {
//       console.log("Benutzer hat 'Ja' geklickt");
//     } else {
//       console.log("Benutzer hat 'Nein' geklickt");
//     }
//   });
//# sourceMappingURL=script.js.map
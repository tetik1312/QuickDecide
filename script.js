var sounds = ["assets/kick.mp3"];
makeClickNoise(document.getElementById("help-icon"));
makeClickNoise(document.getElementById("ersterButton"));
makeClickNoise(document.getElementById("close-q"));
makeClickNoise(document.getElementById("yes"));
makeClickNoise(document.getElementById("no"));
function playSample(sounds) {
    var sound = new Audio(sounds);
    sound.play();
}
//funktion für klick geräusch
function makeClickNoise(button) {
    button.addEventListener("mousedown", function () { playSample("assets/Button_Click.wav"); });
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
    box.innerHTML = "Entscheide dich einfach.";
    questionBox.appendChild(box);
}
function closeQuestionBox() {
    if (questionBox.classList.contains("active-qbox")) {
        questionBox.classList.remove("active-qbox");
        box.innerHTML = "";
    }
}
//klick auf start also erstes "JA"
document.getElementById("ersterButton").addEventListener("click", startGame);
var gameBox;
gameBox = document.querySelector("#gamefield");
var yesnobox = document.createElement("div");
yesnobox.classList.add("active-game");
function startGame() {
    console.log("spiel wird gestartet");
    gameBox.classList.add('active-game');
    console.log("ja wurde geklickt");
    yesnobox.innerHTML = questions[qCounter].q;
    gameBox.appendChild(yesnobox);
    // timer = setInterval(() => {
    //     spreadQuestion();
    //     if(qCounter === questions.length-2) {
    //         clearInterval(timer);
    //     }
    //     qCounter++;
    //     yesnobox.innerHTML = questions[qCounter].q;
    // },timerDuration);
}
var qCounter = 0;
var questions = [
    { "q": "Wirst du auf die Party gehen?", "sound": "assets/Party.mp3" },
    { "q": "Möchtest du mit einem neuen Hobby anfangen?", "sound": "assets/Hobby.mp3" },
    { "q": "Würdest du dich für deinen Traumjob bewerben?", "sound": "assets/Traumjob.mp3" },
    { "q": "Hast du genug Geld?", "sound": "assets/Geld.mp3" },
    { "q": "Willst du Heiraten?", "sound": "assets/Heiraten.mp3" },
    { "q": "Willst du Kinder haben?", "sound": "assets/Kinder.mp3" },
    { "q": "Bist du glücklich?", "sound": "assets/Glücklich.mp3" },
    { "q": "Führst du ein erfolgreiches leben?", "sound": "assets/Erfolgreich.mp3" },
    { "q": "Bereust du etwas in deinem leben?", "sound": "assets/Reue.mp3" },
    { "q": "Hast du den Sinn des Lebens gefunden?", "sound": "assets/Sinn.mp3" },
    { "q": "Was ist die Antwort auf das Leben, das Universum und alles?", "sound": "assets/Button_Click.wav" },
    { "q": "Wer hat die Relativitätstheorie entwickelt?", "sound": "assets/Button_Click.wav" }
];
var ybtn = document.getElementById("yes");
var nbtn = document.getElementById("no");
var timer;
var timerDuration = 1000;
ybtn.addEventListener("click", function () {
    if (qCounter < questions.length - 1) {
        deleteQuestion();
        qCounter++;
        yesnobox.innerHTML = questions[qCounter].q;
        clearInterval(timer);
        if (qCounter > 1) {
            timer = setInterval(function () {
                spreadQuestion();
                if (qCounter === questions.length - 2) {
                    clearInterval(timer);
                }
                qCounter++;
                yesnobox.innerHTML = questions[qCounter].q;
            }, timerDuration);
        }
    }
    if (qCounter === questions.length - 1) {
        clearInterval(timer);
        yesnobox.innerHTML = "Dein leben liegt in deiner Hand. Wie wirst DU dich entscheiden?";
        playSample("assets/FinalQuestion.mp3");
        deleteQuestion();
    }
});
nbtn.addEventListener("click", function () {
    if (qCounter < questions.length - 1) {
        deleteQuestion();
        qCounter++;
        yesnobox.innerHTML = questions[qCounter].q;
        clearInterval(timer);
        if (qCounter > 1) {
            timer = setInterval(function () {
                spreadQuestion();
                if (qCounter === questions.length - 2) {
                    clearInterval(timer);
                }
                qCounter++;
                yesnobox.innerHTML = questions[qCounter].q;
            }, timerDuration);
        }
    }
    if (qCounter === questions.length - 1) {
        clearInterval(timer);
        yesnobox.innerHTML = "Dein leben liegt in deiner Hand. Wie wirst DU dich entscheiden?";
        playSample("assets/FinalQuestion.mp3");
        deleteQuestion();
    }
});
function spreadQuestion() {
    var unanswered = document.createElement("div");
    unanswered.classList.add("unanswered");
    unanswered.innerHTML = questions[qCounter].q;
    var height = document.body.offsetHeight;
    var width = document.body.offsetWidth;
    var hRand = Math.floor(Math.random() * height);
    var wRand = Math.floor(Math.random() * width);
    unanswered.setAttribute("style", "top: ".concat(hRand * .8, "px; left: ").concat(wRand * .8, "px;"));
    document.body.appendChild(unanswered);
    playSample(questions[qCounter].sound);
}
function deleteQuestion() {
    var unansweredQs = document.getElementsByClassName('unanswered');
    var allQs = unansweredQs.length;
    for (var i = 0; i < allQs; i++) {
        unansweredQs[allQs - i - 1].remove();
    }
}
//# sourceMappingURL=script.js.map
var sounds: string[] = ["assets/kick.mp3"];
makeClickNoise(document.getElementById("help-icon"));
makeClickNoise(document.getElementById("ersterButton"));
makeClickNoise(document.getElementById("close-q"));
makeClickNoise(document.getElementById("yes"));
makeClickNoise(document.getElementById("no"));

function playSample(sounds: string): void {
    var sound: HTMLAudioElement = new Audio(sounds);
    sound.play();
}

//funktion für klick geräusch
function makeClickNoise(button): void {
    button.addEventListener("mousedown", () => { playSample("assets/Button_Click.wav"); });
}

document.getElementById("help-icon").addEventListener("click", createQuestionbox)
var questionBox: HTMLElement;
questionBox = document.querySelector("#questionbox");
let box: HTMLDivElement = document.createElement("div");
box.classList.add("active-q");

document.getElementById("close-q").addEventListener("click", closeQuestionBox);

function createQuestionbox(): void {
    questionBox.classList.add('active-qbox');
    console.log("frage wurde geklickt");
    box.innerHTML = "Entscheide dich einfach.";
    questionBox.appendChild(box);
}

function closeQuestionBox(): void {
    if (questionBox.classList.contains("active-qbox")) {
        questionBox.classList.remove("active-qbox");
        box.innerHTML = "";
    }
}

//klick auf start also erstes "JA"
document.getElementById("ersterButton").addEventListener("click", startGame)

var gameBox: HTMLElement;
gameBox = document.querySelector("#gamefield");
let yesnobox: HTMLDivElement = document.createElement("div");
yesnobox.classList.add("active-game");

function startGame(): void {
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

let qCounter: number = 0;

const questions: {q: string, sound:string}[] = [
    {"q": "Wirst du auf die Party gehen?", "sound": "assets/Party.mp3"},
    {"q": "Möchtest du mit einem neuen Hobby anfangen?", "sound": "assets/Hobby.mp3"},
    {"q":"Würdest du dich für deinen Traumjob bewerben?", "sound": "assets/Traumjob.mp3"},
    {"q": "Hast du genug Geld?", "sound": "assets/Geld.mp3"},
    {"q": "Willst du Heiraten?", "sound": "assets/Heiraten.mp3"},
    {"q":"Willst du Kinder haben?", "sound": "assets/Kinder.mp3"},
    {"q": "Bist du glücklich?", "sound": "assets/Glücklich.mp3"},
    {"q": "Führst du ein erfolgreiches leben?", "sound": "assets/Erfolgreich.mp3"},
    {"q":"Bereust du etwas in deinem leben?", "sound": "assets/Reue.mp3"},
    {"q": "Hast du den Sinn des Lebens gefunden?", "sound": "assets/Sinn.mp3"},
    {"q": "Was ist die Antwort auf das Leben, das Universum und alles?", "sound": "assets/Button_Click.wav"},
    {"q":"Wer hat die Relativitätstheorie entwickelt?", "sound": "assets/Button_Click.wav"}
];

const ybtn: HTMLElement = document.getElementById("yes");
const nbtn: HTMLElement = document.getElementById("no");
let timer: number;
let timerDuration:number = 1000;


ybtn.addEventListener("click", () => {
    if (qCounter < questions.length - 1) {
        deleteQuestion();
        qCounter++;
        yesnobox.innerHTML = questions[qCounter].q;
        clearInterval(timer);
        if (qCounter > 1){
            timer = setInterval(() => {
            spreadQuestion();
            if(qCounter === questions.length-2) {
                clearInterval(timer);
            }
            qCounter++;
            yesnobox.innerHTML = questions[qCounter].q;
        },timerDuration);}
    }
    if (qCounter === questions.length - 1) {
        clearInterval(timer);
        yesnobox.innerHTML = "Dein leben liegt in deiner Hand. Wie wirst DU dich entscheiden?";
        playSample("assets/FinalQuestion.mp3");
        deleteQuestion();
    }
});

nbtn.addEventListener("click", () => {
    if (qCounter < questions.length - 1) {
        deleteQuestion();
        qCounter++;
        yesnobox.innerHTML = questions[qCounter].q;
        clearInterval(timer);
        if (qCounter > 1) {
        timer = setInterval(() => {
            spreadQuestion();
            if(qCounter === questions.length-2) {
                clearInterval(timer);
            }
            qCounter++;
            yesnobox.innerHTML = questions[qCounter].q;
        },timerDuration);}
    }
    if (qCounter === questions.length - 1) {
        clearInterval(timer);
        yesnobox.innerHTML = "Dein leben liegt in deiner Hand. Wie wirst DU dich entscheiden?";
        playSample("assets/FinalQuestion.mp3");
        deleteQuestion();
    }
});


function spreadQuestion(): void {
    let unanswered: HTMLDivElement = document.createElement("div");
    unanswered.classList.add("unanswered");
    unanswered.innerHTML = questions[qCounter].q;
    let height :number = document.body.offsetHeight;
    let width:number = document.body.offsetWidth;
    let hRand:number= Math.floor(Math.random()*height);
    let wRand:number = Math.floor(Math.random()*width);
    unanswered.setAttribute("style", `top: ${hRand*.8}px; left: ${wRand*.8}px;`);
    document.body.appendChild(unanswered);
    playSample(questions[qCounter].sound);
}

function deleteQuestion(): void {
    let unansweredQs:HTMLCollection = document.getElementsByClassName('unanswered');
    let allQs:number = unansweredQs.length;
    for(let i:number = 0; i < allQs; i++) {
        unansweredQs[allQs-i-1].remove();
    }
}

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
//klick auf start also erstes "JA"
document.getElementById("ersterButton").addEventListener("click", startGame);
var gameBox;
gameBox = document.querySelector("#gamefield");
var yesnobox = document.createElement("div");
yesnobox.classList.add("active-game");
var gameTimeout;
var qCounter = 0;
function startGame() {
    window.alert("Für ein besseres Erlebnis empfehle ich Dir die Nutzung von Kopfhörern.");
    console.log("spiel wird gestartet");
    gameBox.classList.add('active-game');
    console.log("ja wurde geklickt");
    yesnobox.innerHTML = questions[qCounter].q;
    playSample(questions[qCounter].sound);
    gameBox.appendChild(yesnobox);
    gameTimeout = setTimeout(increaseInterval, timerDuration);
    // timer = setInterval(() => {
    //     spreadQuestion();
    //     if(qCounter === questions.length-2) {
    //         clearInterval(timer);
    //     }
    //     qCounter++;
    //     yesnobox.innerHTML = questions[qCounter].q;
    // },timerDuration);
}
var increaseInterval = function () {
    qCounter++;
    timerDuration *= .88;
    var uaQuestions = document.getElementsByClassName('unanswered');
    if (qCounter < questions.length) {
        if (qCounter < questions.length - 1) {
            yesnobox.innerHTML = questions[qCounter].q;
            spreadQuestion();
            playSample(questions[qCounter].sound);
        }
        gameTimeout = setTimeout(increaseInterval, timerDuration);
        for (var i = 0; i < uaQuestions.length; i++) {
            uaQuestions[i].style.transform = "scale(".concat(1 + Math.pow(qCounter * .25, 2), ")");
        }
    }
    else if (qCounter < questions.length) {
        uaQuestions[uaQuestions.length].style.transform = "scale(".concat(1 + Math.pow(qCounter * .25, 2), ")");
        yesnobox.innerHTML = questions[qCounter].q;
        spreadQuestion();
    }
    else if (qCounter === questions.length) {
        var unanswered = document.createElement("div");
        unanswered.classList.add("unanswered");
        unanswered.innerHTML = questions[qCounter - 1].q;
        var height = document.body.offsetHeight;
        var width = document.body.offsetWidth;
        var hRand = Math.floor(Math.random() * height);
        var wRand = Math.floor(Math.random() * width);
        unanswered.setAttribute("style", "top: ".concat(hRand * .8, "px; left: ").concat(wRand * .8, "px;"));
        document.body.appendChild(unanswered);
        var uaQuestions_1 = document.getElementsByClassName('unanswered');
        for (var i = 0; i < uaQuestions_1.length; i++) {
            uaQuestions_1[i].style.transform = "scale(".concat(1 + Math.pow(qCounter * .25, 2), ")");
        }
        yesnobox.innerHTML = '';
        gameBox.style.display = 'none';
        document.body.querySelector('main').style.display = 'none';
        document.getElementById("help-icon").style.display = 'none';
        clearTimeout(gameTimeout);
        document.querySelector('html').style.backgroundColor = 'white';
    }
};
var questions = [
    { "q": "Wirst du auf die Party gehen?", "sound": "assets/Party.mp3" },
    { "q": "Möchtest du mit einem neuen Hobby anfangen?", "sound": "assets/Hobby.mp3" },
    { "q": "Würdest du dich für deinen Traumjob bewerben?", "sound": "assets/Traumjob.mp3" },
    { "q": "Würdest du in eine andere Stadt ziehen und von Null auf Neustarten?", "sound": "assets/Neustart.mp3" },
    { "q": "Hast du genug Geld?", "sound": "assets/Geld.mp3" },
    { "q": "Glaubst du an die Liebe?", "sound": "assets/Liebe.mp3" },
    { "q": "Willst du Heiraten?", "sound": "assets/Heiraten.mp3" },
    { "q": "Willst du Kinder haben?", "sound": "assets/Kinder.mp3" },
    { "q": "Bist du mitfühlend?", "sound": "assets/Mitgefühl.mp3" },
    { "q": "Bist du glücklich?", "sound": "assets/Glücklick.mp3" },
    { "q": "Vertraust du dir selbst?", "sound": "assets/Vertrauen.mp3" },
    { "q": "Bist du nachtragend?", "sound": "assets/Nachtragend.mp3" },
    { "q": "Neigst du dazu neidisch zu sein?", "sound": "assets/Neid.mp3" },
    { "q": "Kannst du gut mit Konfrontationen umgehen?", "sound": "assets/Konfrontation.mp3" },
    { "q": "Führst du ein erfolgreiches Leben?", "sound": "assets/Erfolgreich.mp3" },
    { "q": "Setzt du dich selbst zu sehr unter Erfolgsdruck? ", "sound": "assets/Erfolgsdruck.mp3" },
    { "q": "Hast du ein gutes Verhältnis zu deiner Familie?", "sound": "assets/Familie.mp3" },
    { "q": "Bereust du etwas in deinem Leben?", "sound": "assets/Reue.mp3" },
    { "q": "Willst du etwas vergessen, das du getan hast?", "sound": "assets/Vergessen.mp3" },
    { "q": "Bist du zufrieden mit deinem Aussehen?", "sound": "assets/Aussehen.mp3" },
    { "q": "Liebst du dich selbst?", "sound": "assets/Selbstliebe.mp3" },
    { "q": "Gibt es einen Charakterzug an dir, den du gerne ablegen würdest?", "sound": "assets/Charakter.mp3" },
    { "q": "Gibt es eine Person, der du nie verzeihen konntest?", "sound": "assets/Verzeihen.mp3" },
    { "q": "Hast du Verlustängste?", "sound": "assets/Verlustangst.mp3" },
    { "q": "Hast du eine Angst, der du nicht gegenübertreten kannst?", "sound": "assets/AngstTreten.mp3" },
    { "q": "Hast du den Sinn des Lebens gefunden?", "sound": "assets/Sinn.mp3" },
    { "q": "Wünschst du dir ein anderes Leben?", "sound": "assets/AnderesLeben.mp3" }
];
var ybtn = document.getElementById("yes");
var nbtn = document.getElementById("no");
var timer;
var timerDuration = 6000;
function clickNextQuestion() {
    if (qCounter < questions.length - 1) {
        deleteQuestion();
        qCounter++;
        yesnobox.innerHTML = questions[qCounter].q;
        playSample(questions[qCounter].sound);
    }
}
ybtn.addEventListener("click", function () {
    clickNextQuestion();
});
nbtn.addEventListener("click", function () {
    clickNextQuestion();
});
function spreadQuestion() {
    var unanswered = document.createElement("div");
    unanswered.classList.add("unanswered");
    unanswered.innerHTML = questions[qCounter - 1].q;
    var height = document.body.offsetHeight;
    var width = document.body.offsetWidth;
    var hRand = Math.floor(Math.random() * height);
    var wRand = Math.floor(Math.random() * width);
    unanswered.setAttribute("style", "top: ".concat(hRand * .8, "px; left: ").concat(wRand * .8, "px;"));
    document.body.appendChild(unanswered);
}
function deleteQuestion() {
    var unansweredQs = document.getElementsByClassName('unanswered');
    var allQs = unansweredQs.length;
    for (var i = 0; i < allQs; i++) {
        unansweredQs[allQs - i - 1].remove();
    }
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
//# sourceMappingURL=script.js.map
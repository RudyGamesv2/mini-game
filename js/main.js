// =========================== start music ===========================

bgcMusic = () =>{
    backgroundMusic = new Audio('./music/emotional-music.mp3');
    if (typeof backgroundMusic.loop == 'boolean') {
        backgroundMusic.loop = true;
    }
    else {
        backgroundMusic.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    backgroundMusic.play();
}



// =========================== section ===========================
let sectionStart = document.getElementById('start');

let sectionLevelOne = document.getElementById('level-one');
let sectionLevelTwo = document.getElementById('level-two');
let sectionLevelThree = document.getElementById('level-three');
let sectionLevelFour = document.getElementById('level-four');

let sectionEndWinner = document.getElementById('end-win');
let sectionEndLose = document.getElementById('end-lose');


//=========================== hearts and bulbs and endGame===========================

endGame = () => {

    endGameAudio = new Audio('./music/happy.mp3');
    if (typeof endGameAudio.loop == 'boolean') {
        endGameAudio.loop = true;
    }
    else {
        endGameAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    endGameAudio.play();
    backgroundMusic.pause();


    document.getElementById('end-heart-text').textContent = `Pozostałe życia: ${hearts}`
    document.getElementById('end-bulbs-text').textContent = `Pozostałe wskazówki: ${bulbs}`

}

let hearts = 3;
let bulbs = 1;

let bulbsOne = document.getElementById('bulbs-one')
let textHint = document.getElementById('text-hint')
let textSend = document.getElementById('text-send')

textHintClear = () => {
    textHint.textContent = ''
}

textSend.textContent = ''

textHintClear()

textHint.style.visibility = "visible";

bulbsHidden = () => {
    bulbsOne.style.visibility = "hidden"
}

let heartOne = document.getElementById('heart-one')
let heartTwo = document.getElementById('heart-two')
let heartThree = document.getElementById('heart-three')

checkHearts = () => {
    textSend.textContent = 'Zła odpowiedź!'
    if (hearts == 3) {
        heartOne.style.visibility = "visible"
        heartTwo.style.visibility = "visible"
        heartThree.style.visibility = "visible"
    }

    if (hearts == 2) {
        heartOne.style.visibility = "visible"
        heartTwo.style.visibility = "visible"
        heartThree.style.visibility = "hidden"
    }

    if (hearts == 1) {
        heartOne.style.visibility = "visible"
        heartTwo.style.visibility = "hidden"
        heartThree.style.visibility = "hidden"
    }

    if (hearts == 0) {
        heartOne.style.visibility = "hidden"
        heartTwo.style.visibility = "hidden"
        heartThree.style.visibility = "hidden"
    }

    if (hearts <= 0) {
        sectionLevelOne.classList.add('no-visible');
        sectionLevelTwo.classList.add('no-visible');
        sectionLevelThree.classList.add('no-visible');
        sectionLevelFour.classList.add('no-visible');

        sectionEndLose.classList.remove('no-visible')
    }
}

//=========================== title and parahraph ===========================

titleFunction = () => {
    let titleText = ["strona", "Zobacz", "konsolę"];
    let counter = 0;

    setInterval(function () {
        document.title = titleText[counter % titleText.length];
        counter++;
    }, 2000)

    randomConsoleNumber = Math.floor(Math.random() * 10)
    console.log("Ostatnia cyfra: ", randomConsoleNumber)
}

// checkHearts()

let levelFourFirstParagraph = document.getElementById('level-four-first-paragraph')
let levelFourSecondParagraph = document.getElementById('level-four-second-paragraph')

//===========================  ===========================

let randomConsoleNumber

//=========================== start ===========================

document.getElementById('start-btn').onclick = () => {

    sectionStart.classList.add('no-visible');
    sectionLevelOne.classList.remove('no-visible');
    bgcMusic()
}

//=========================== first level ===========================

document.getElementById('hint-one').onclick = () => {
    if (bulbs == 1) {
        textHint.textContent = "f = () => {}"
        bulbs--
        bulbsHidden()
    }
    else {
        textHint.textContent = "Wykorzystałeś wszystkie podpowiedzi!"
    }
}

document.getElementById('send-one').onclick = () => {

    let inputLevelOne = document.getElementById('input-level-one').value;

    if (inputLevelOne == "arrow" || inputLevelOne == "strzałkowa" || inputLevelOne == "arrow function" || inputLevelOne == "funkcja strzałkowa") {
        sectionLevelOne.classList.add('no-visible');
        sectionLevelTwo.classList.remove('no-visible');
        textHintClear()
        textSend.textContent = 'Dobra odpowiedź!'
    }
    else {
        hearts--;
        checkHearts()
    }
}

//=========================== second level ===========================

document.getElementById('hint-two').onclick = () => {
    if (bulbs == 1) {
        textHint.textContent = "indeks tablicy liczy się od 0"
        bulbs--

        bulbsHidden()
    }
    else {
        textHint.textContent = "Wykorzystałeś wszystkie podpowiedzi!"
    }
}

document.getElementById('send-two').onclick = () => {
    let inputLevelTwo = document.getElementById('input-level-two').value;

    if (inputLevelTwo == "NaN") {
        sectionLevelTwo.classList.add('no-visible');
        sectionLevelThree.classList.remove('no-visible');
        textHintClear()
        textSend.textContent = 'Dobra odpowiedź!'
        titleFunction()

        let hideImage = document.getElementById('hide-image');

        document.getElementById('image-show').onclick = () => {
            hideImage.style.display = 'block';
        }
    }
    else {
        hearts--;
        checkHearts()
    }
}


//=========================== third level ===========================

document.getElementById('hint-three').onclick = () => {
    if (bulbs == 1) {
        textHint.textContent = "jedno zdjęcie jest ukryte, polecam też zobaczyć na tytuł strony."
        bulbs--

        bulbsHidden()
    }
    else {
        textHint.textContent = "Wykorzystałeś wszystkie podpowiedzi!"
    }
}

document.getElementById('send-three').onclick = () => {

    let inputLevelThree1 = document.getElementById('input-level-three-1').value;
    let inputLevelThree2 = document.getElementById('input-level-three-2').value;
    let inputLevelThree3 = document.getElementById('input-level-three-3').value;
    let inputLevelThree4 = document.getElementById('input-level-three-4').value;


    if (inputLevelThree1 == 1 && inputLevelThree2 == 5 && inputLevelThree3 == 7 && inputLevelThree4 == randomConsoleNumber) {
        sectionLevelThree.classList.add('no-visible');
        sectionLevelFour.classList.remove('no-visible');
        textHintClear()
        textSend.textContent = 'Dobra odpowiedź!'
    }
    else {
        hearts--;
        checkHearts()
    }
}


//=========================== fourth level ===========================

let btnLevelFour = document.getElementById('btn-level-four')

btnLevelFour.onclick = () => {
    btnLevelFour.classList.add("no-visible")

    levelFourFirstParagraph.textContent = "Myślałeś że to takie proste?"

    let sendFourBtn = document.getElementById('send-four')
    let secondStep = document.getElementById('second-step')
    let hintFour = document.getElementById('hint-four')

    secondStep.classList.remove('no-visible')

    let lockBtn = document.getElementById('lock')
    let lockOpenBtn = document.getElementById('lock-open')
    lockOpenBtn.style.display = "none"
    let checked = false

    lockBtn.onclick = () => {
        checked = true
        lockBtn.style.display = "none"
        lockOpenBtn.style.display = "block"
        lockOpenBtn.style.color = "crimson"
    }

    hintFour.onclick = () => {
        if (bulbs == 1) {
            textHint.textContent = "Musisz podążac myszką za przyciskiem i go kliknąć."
            bulbs--

            bulbsHidden()
        }
        else {
            textHint.textContent = "Wykorzystałeś wszystkie podpowiedzi!"
        }
    }

    sendFourBtn.onclick = () => {
        textHint.textContent = "Spróbuj kliknąć ten przycisk więcej niż jeden raz";
        levelFourFirstParagraph.textContent = "Spróbuj kliknąć ten przycisk więcej niż jeden raz";

        hintFour.onclick = () => {
            if (bulbs == 1) {
                textHint.textContent = "Spróbuj odblokować jakoś przycisk"
                bulbs--
                bulbsHidden()
            }
            else {
                textHint.textContent = "Wykorzystałeś wszystkie podpowiedzi!"
            }
        }

        sendFourBtn.ondblclick = () => {
            if (checked == true) {
                sectionLevelFour.classList.add('no-visible');
                sectionEndWinner.classList.remove('no-visible');
                textHintClear()
                textSend.textContent = 'Ukończyłeś grę.'
                endGame()
            }
            else {
                levelFourFirstParagraph.textContent = "Zablowane"
                textHint.textContent = "Zablowane"
            }
        }
    }
}


// =========================== reset btn ===========================

document.getElementById('reset').onclick = () => {
    location.reload()
}



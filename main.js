// Setup sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

// Setup metronome count
let metCount = 0;

// DOM Element for Count
let countText = document.querySelector('#count');

// DOM Element for Inputs
let metronomeBox = document.querySelector('#metronome');
let snareDrumBox = document.querySelector('#snare-drum');
let snareDrumCount = document.querySelector('#snare-drum-timing');
let hiHatBox = document.querySelector('#hi-hat');
let hiHatBoxCount = document.querySelector('#hi-hat-timing');
let kickDrumBox = document.querySelector('#kick-drum');
let kickDrumBoxCount = document.querySelector('#kick-drum-timing');


// This function is called every 600ms
function update() {

    // Update count
    metCount = (metCount % 4) + 1;
    console.log(metCount);

    if (metronomeBox.checked == true){
        if (metCount%4 === 0){
            tock.play();
            console.log('tock')
        } else {
            tick.play();
            console.log('tick')
        }
    } 
    
    if (snareDrumBox.checked == true){
        if (Number(snareDrumCount.value) == metCount){
            snareDrum.play();
        }
        
    }
    
    if (hiHatBox.checked == true){
        if (Number(hiHatBoxCount.value) == metCount){
            hiHat.play();
        }
        
    } 
    
    if (kickDrumBox.checked == true){
        if (Number(kickDrumBoxCount.value) == metCount){
            kickDrum.play();
        } 
        
    }

    countText.innerText = metCount;
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

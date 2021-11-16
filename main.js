//! Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");

//! Setup 'tock' sound
const tock = new Audio("sounds/tock.mp3");

//! Setup 'kick-drum' sound
const kickDrum = new Audio("sounds/kick-drum.mp3");

//! Setup 'kick-drum' sound
const snareDrum = new Audio("sounds/snare-drum.mp3");

//! Setup 'kick-drum' sound
const hiHat = new Audio("sounds/hi-hat.mp3");

let tickCounter = 0;

//! Define the counter for metronome-counter
const counter = document.querySelector(".counter");

//! Define the counter for metronome-counter
const metronomeCheck = document.querySelector("#metronome-drum");

const kickDrumCheck = document.querySelector("#kick-drum");

const snareDrumCheck = document.querySelector("#snare-drum");

const hiHatCheck = document.querySelector("#hi-hat");

//! This function is called every 600ms
function update() {
	tickCounter++;
	//! Count the ticks and tock and reset after 4 counts
	if (tickCounter < 5) {
		counter.innerHTML = tickCounter;
	}

	if (kickDrumCheck.checked) {
		kickDrum.play();
	}

	if (snareDrumCheck.checked) {
		snareDrum.play();
	}

	if (hiHatCheck.checked) {
		hiHat.play();
	}

	//! Play the 'tick' sound for three beats
	//! Play the 'tock' every fouth beat
	if (metronomeCheck.checked) {
		if (tickCounter % 4 === 0) {
			tock.play();
			tickCounter = 0;
		} else {
			tick.play();
		}
	} else {
		if (tickCounter % 4 === 0) {
			tickCounter = 0;
		}
	}
}

//! This function sets up update() to be called every 600ms
function setupUpdate() {
	setInterval(update, 600);
}

//! Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

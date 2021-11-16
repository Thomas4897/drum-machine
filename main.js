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
const kickDrumTiming = document.querySelector("#kick-drum-timing");

const snareDrumCheck = document.querySelector("#snare-drum");
const snareDrumTiming = document.querySelector("#snare-drum-timing");

const hiHatCheck = document.querySelector("#hi-hat");
const hiHatTiming = document.querySelector("#hi-hat-timing");

//! This function is called every 600ms
function update() {
	tickCounter++;
	//! Count the ticks and tock and reset after 4 counts
	if (tickCounter < 5) {
		counter.innerHTML = tickCounter;
	}

	//! if kick-drum check play sound
	if (kickDrumCheck.checked) {
		if (Number(kickDrumTiming.value) === tickCounter) {
			kickDrum.play();
		} else if (Number(kickDrumTiming.value) === 0) {
			kickDrum.play();
		}
	}

	//! if snare-drum check play sound
	if (snareDrumCheck.checked) {
		if (Number(snareDrumTiming.value) === tickCounter) {
			snareDrum.play();
		} else if (Number(snareDrumTiming.value) === 0) {
			snareDrum.play();
		}
	}

	//! if hi-hat check play sound
	if (hiHatCheck.checked) {
		if (Number(hiHatTiming.value) === tickCounter) {
			hiHat.play();
		} else if (Number(hiHatTiming.value) === 0) {
			hiHat.play();
		}
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

//! Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");

//! Setup 'tock sound
const tock = new Audio("sounds/tock.mp3");

let tickCounter = 0;

//! Define the counter for metronome-counter
const counter = document.querySelector(".counter");

//! This function is called every 600ms
function update() {
	tickCounter++;
	//! Count the ticks and tock and reset after 4 counts
	if (tickCounter < 5) {
		counter.innerHTML = tickCounter;
	}

	//! Play the 'tock' every fouth beat
	if (tickCounter > 3) {
		tock.play();
		tickCounter = 0;
	}

	//! Play the 'tick' sound
	if (tickCounter < 4) {
		tick.play();
	}
}

//! This function sets up update() to be called every 600ms
function setupUpdate() {
	setInterval(update, 600);
}

//! Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

// function showContent(buttonElement) {
// 	const hiddenContent = buttonElement.parentElement.nextElementSibling;

// 	if (hiddenContent.style.height === "15rem") {
// 		hiddenContent.style.height = "0";
// 		buttonElement.style.transform = "rotate(0deg)";
// 	} else {
// 		hiddenContent.style.height = "15rem";
// 		buttonElement.style.transform = "rotate(90deg)";
// 	}
// }
// function showContentTwo(buttonElement) {
// 	const hiddenContent = buttonElement.parentElement.nextElementSibling;

// 	if (hiddenContent.style.height === "10rem") {
// 		hiddenContent.style.height = "0";
// 		buttonElement.style.transform = "rotate(180deg)";
// 	} else {
// 		hiddenContent.style.height = "10rem";
// 		buttonElement.style.transform = "rotate(90deg)";
// 	}
// }

// Предположим что я проживу до 56 ти, 23 из которых уже позади, половину я просплю получается 16,5
// a это делает 6020 дней что делает 144480 часов
const birth = new Date(2001, 9, 27);
const energy = new Date(2026, 9, 27);
const death = new Date(2057, 9, 27);

const elements = ["months", "weeks", "days", "hours", "minutes", "seconds"];
const suffixes = ["|W", "|M", "|D", "|h", "|min", "|Sec"];

function calc() {
	const now = new Date();

	// Life
	let totalTime = death - birth;
	let ramainingTime = death - now;
	// Energy
	let totalEnergyTime = death - energy;
	let ramainingEnergy = energy - now;

	let remaining_life_percent = (ramainingTime / totalTime) * 100;
	let remaining_energy_percent = (ramainingEnergy / totalEnergyTime) * 100;

	const timeTillDeath = showTime(ramainingTime);
	const energyLeft = showTime(ramainingEnergy);

	for (let i = 0; i < elements.length; i++) {
		document.getElementById(elements[i]).innerHTML =
			timeTillDeath[i] + suffixes[i];

		document.getElementById(elements[i] + "-two").innerHTML =
			energyLeft[i] + suffixes[i];
	}

	document.getElementById("zaryad").style.height =
		remaining_life_percent + "%";

	document.getElementById("Energy").style.height =
		remaining_energy_percent + "%";
	document.getElementById("PrOne").innerHTML =
		remaining_life_percent.toPrecision(4) + "%";
	document.getElementById("PrTwo").innerHTML =
		remaining_energy_percent.toPrecision(3) + "%";
}

function showTime(defference) {
    let hour = 1000 * 60 * 60;
    let day = hour * 24;
    let week = day * 7;
    let month = day * 30.5; // Approximate month length

    let months = Math.floor(defference / month);
    defference %= month;

    let weeks = Math.floor(defference / week);
    defference %= week;

    let days = Math.floor(defference / day);
    defference %= day;

    let hours = Math.floor(defference / hour);
    defference %= hour;

    let minutes = Math.floor(defference / (1000 * 60));
    defference %= (1000 * 60);

    let seconds = Math.floor(defference / 1000);

    return [weeks, months, days, hours, minutes, seconds];
}

setInterval(calc, 1000);

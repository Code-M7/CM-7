function showContent(buttonElement) {
	const hiddenContent = buttonElement.parentElement.nextElementSibling;

	if (hiddenContent.style.height === "15rem") {
		hiddenContent.style.height = "0";
		buttonElement.style.transform = "rotate(0deg)";
	} else {
		hiddenContent.style.height = "15rem";
		buttonElement.style.transform = "rotate(90deg)";
	}
}
function showContentTwo(buttonElement) {
	const hiddenContent = buttonElement.parentElement.nextElementSibling;

	if (hiddenContent.style.height === "10rem") {
		hiddenContent.style.height = "0";
		buttonElement.style.transform = "rotate(180deg)";
	} else {
		hiddenContent.style.height = "10rem";
		buttonElement.style.transform = "rotate(90deg)";
	}
}

// Предположим что я проживу до 56 ти, 23 из которых уже позади, половину я просплю получается 16,5
// a это делает 6020 дней что делает 144480 часов
const energy = new Date(2026, 9, 27);
const birth = new Date(2001, 9, 27);
const death = new Date(2057, 9, 27);

function calc() {
	const now = new Date();

	let totalTime = death - birth;
	let totalEnergyTime = death - energy;
	let ramainingTime = death - now;
	let ramainingEnergy = energy - now;
	let remaining_life_percent = (ramainingTime / totalTime) * 100;
	let remaining_energy_percent = (ramainingEnergy / totalEnergyTime) * 100;

    const timeTillDeath = showTime(ramainingTime);
    const energyLeft = showTime(ramainingEnergy);


    const elements = ['weeks', 'months', 'hours', 'minutes', 'seconds'];
    const suffixes = ['|W', '|M', '|H', '|min', '|Sec'];

    for(let i = 0; i < elements.length; i++){
        document.getElementById(elements[i]).innerHTML = timeTillDeath[i] + suffixes[i];
        document.getElementById(elements[i] + '-two').innerHTML = energyLeft[i] + suffixes[i];
    }
    document.getElementById('zaryad').style.height = remaining_life_percent + '%';
    document.getElementById('Energy').style.height = remaining_energy_percent + '%';

}

function showTime(defference) {
	let hour = 1000 * 60 * 60;
	let weeks = Math.floor(defference / (hour * 24 * 7));
	let months = Math.floor(defference / (hour * 24 * 30.5));
	let hours = Math.floor(
		(defference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((defference % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((defference % (1000 * 60)) / 1000);
	timeArray = [weeks, months, hours, minutes, seconds];
	return timeArray;
}

setInterval(calc, 1000);

// PROJECTS

const start = new Date(2024, 3, 17);
const graduation = new Date(2024, 7, 15);

// Current Iteration
const IterationStart = new Date(2024, 6, 8);
const IterationEnd = new Date(2024, 6, 22);

const elements = ["months", "weeks", "days","hours", "minutes", "seconds"];
const suffixes = ["|W", "|M", "|D","|h", "|min", "|Sec"];

function calc() {
	const now = new Date();

	let totalTillGraduatuon = graduation - start;
	let remainingTillGraduation = graduation - now;
	let remainingTillGraduationPr =
		(remainingTillGraduation / totalTillGraduatuon) * 100;
	const tillGraduation = showTime(remainingTillGraduation);

	for (let i = 0; i < elements.length; i++) {
		document.getElementById(elements[i] + "-graduation").innerHTML =
			tillGraduation[i] + suffixes[i];
	}

	document.getElementById("Energy").style.height =
		remainingTillGraduationPr + "%";
	document.getElementById("PrTwo").innerHTML =
		remainingTillGraduationPr.toPrecision(3) + "%";
}

function calcIteration() {
	const now = new Date();

	let totalTillEnd = IterationEnd - IterationStart;
	let remainingTillEnd = IterationEnd - now;
	let remainingTillEndPR = (remainingTillEnd / totalTillEnd) * 100;
	const tillEnd = showTime(remainingTillEnd);

	for (let i = 0; i < elements.length; i++) {
		document.getElementById(elements[i] + "-iter").innerHTML =
			tillEnd[i] + suffixes[i];
	}

	document.getElementById("Energy-iter").style.height =
		remainingTillEndPR + "%";
	document.getElementById("Pr-iter").innerHTML =
		remainingTillEndPR.toPrecision(3) + "%";
}graduation

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
setInterval(calcIteration, 1000);


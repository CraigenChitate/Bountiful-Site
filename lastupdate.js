let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;


document.getElementById("lstmoddate").textContent = document.lastModified;
document.getElementById("currentYear").textContent = year;
document.getElementById("todaysDate").textContent = fulldate


let z = new Date().getDay();

const banner = document.getElementById("banner");
if (z === 1 || z === 2) {
    banner.style.display = "block";
}

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


/*code for getting day of week written out*/
let weekday = new Date().toLocaleString('en-us', {weekday:'long'});
console.log(weekday);

//code to toggle invite banner based on day of week being Tuesday or Wednesday
window.addEventListener("load", () => {
    if (weekday == "Monday" || weekday == "Tuesday") {
        document.querySelector(".banner").style.display = "block";
    } else {
        document.querySelector(".banner").style.display = "none";
    }
});

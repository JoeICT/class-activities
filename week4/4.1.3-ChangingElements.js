// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar");

console.log("Nav-Bar outer HTML ...", navBar.outerHTML);

// print the inner HTML of the navigation bar
console.log("Nav-Bar inner HTML ...", navBar.innerHTML);

// print the text content of the #class-schedule-list element
console.log(
"Class Schedule List text ...",
document.querySelector("#class-schedule-list").textContent
);

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");

firstClassWeek.classList.add("week-1");

console.log(
    "first Class Week outer HTML ...",
    firstClassWeek.outer
)

// select the img element and add a src attribute

// change the font color of the h1 element

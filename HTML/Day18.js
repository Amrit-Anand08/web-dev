// ================= If Else Condition =================
let currtime = Number(prompt("Time in 24hour format"));
if (currtime > 4 && currtime < 12) {
  console.log("Good Morning");
} else if (currtime > 12 && currtime < 17) {
  console.log("Good Afternoon");
} else if (currtime > 17 && currtime < 24) {
  console.log("Good Night");
}
// Note: add 0,1,2,3,4 ka logic from your side

// ================= JavaScript Ternary Operator =================
let age = Number(prompt("Enter your Age"));
let text = age < 18 ? "Minor" : "Adult";
console.log("You are " + text);

// ================= Switch Cases =================
let day = Number(prompt("Enter the day as Number"));
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

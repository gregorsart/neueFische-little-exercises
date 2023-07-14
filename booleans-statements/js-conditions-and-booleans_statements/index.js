console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

// Part 2: Even / Odd
const number = 5;

// Part 3: Hotdogs
const numberOfHotdogs = 999_999;

// Part 4: Daytime
// const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const firstname = "Roland";

const greeting = "Hello " + "// enter your code here" + "!";

console.log(greeting);
console.log("");

// MY CODE
console.log("Part 1 -----------------------------------");
if (SUPER_SECRET_PASSWORD === receivedPassword) console.log("Welcome");
else console.log("Access denied");

//
console.log("");
console.log("Part 2 -----------------------------------");

number % 2
  ? console.log("Die Zahl", number, "ist ungerade")
  : console.log("Die Zahl", number, "ist gerade");

//
console.log("");
console.log("Part 3 -----------------------------------");

if (numberOfHotdogs < 5) console.log(numberOfHotdogs, "2 Euro");
else if (numberOfHotdogs < 100) console.log(numberOfHotdogs, "1.50 Euro");
else if (numberOfHotdogs < 1_000_000) console.log(numberOfHotdogs, "1 Euro");

//
console.log("");
console.log("Part 4 -----------------------------------");

const currentDate = new Date();
const currentHour = currentDate.getHours();

console.log(
  `${currentHour < 17}` ? `Still need to learn` : `It is Partytime!!!`
);

//
console.log("");
console.log("Part 5 -----------------------------------");

console.log(firstname === "Roland" ? "Hello Coach" : "Hello " + firstname);

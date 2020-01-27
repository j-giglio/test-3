const readlineSync = require("readline-sync");

let value;
let endValue;
let startUnit = "";
let endUnit = "";

console.log("\n")

do {

  startUnit = (readlineSync.question("Enter an origin unit: "));
  startUnit = startUnit.toLowerCase();

} while (startUnit != "miles")

do {

  endUnit = (readlineSync.question("Enter a destination unit: "));
  endUnit = endUnit.toLowerCase();

} while (endUnit != "inches" && endUnit != "feet" && endUnit != "yards")

do {

  value = Number(readlineSync.question("Enter a value: "));

} while (value < 0 || value > Number.MAX_SAFE_INTEGER || Number.isNaN(value))

if (value == 1) {
  startUnit = "mile";
}

if (endUnit == "inches") {
  endValue = value * 63360;
  endUnit = (endValue === 1) ? "inch" : "inches"
}

if (endUnit == "feet") {
  endValue = value * 5280;
  endUnit = (endValue === 1) ? "foot" : "feet"
}

if (endUnit == "yards") {
  endValue = value * 1760;
    endUnit = (endValue === 1) ? "yard" : "yards"
}

endValue = endValue.toLocaleString("en", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

value = value.toLocaleString("en", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

if (endValue === 1.0) {
  console.log("There is " + endValue + " " + endUnit + " in " + value + " " + startUnit + ".")
} else {
  console.log("There are " + endValue + " " + endUnit + " in " + value + " " + startUnit + ".")
}

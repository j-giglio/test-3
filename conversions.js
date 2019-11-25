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

} while (value < 0 || value > Number.MAX_SAFE_INTEGER)

if (value == 1) {
  startUnit = "mile"
}

if (endUnit == "inches"){
  endValue = value * 63,360;
  if (value == 1) {
    endUnit == "inch"
  }
}

if (endUnit == "feet"){
  endValue = value * 5,280 ;
  if (value == 1) {
    endUnit == "foot"
  }
}

if (endUnit == "yards"){
  endValue = value * 1,760 ;
  if (value == 1) {
    endUnit == "yard"
  }
}

endValue = endValue.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
if (endValue == 1){
  console.log("There is " + endValue + endUnit + " in " + value + startUnit + ".")
} else {
  console.log("There are " + endValue + endUnit + " in " + value + startUnit + ".")
}

if (true) console.log("true");

const month = 14;

switch (month) {
  case 1:
    console.log("JANUARY");
    break;
  case 2:
    console.log("FEBRUARY");
    break;
  case 3:
    console.log("MARCH");
    break;
  case 4:
    console.log("APRIL");
    break;
  case 5:
    console.log("MAY");
    break;
  case 6:
    console.log("JUNE");
    break;
  case 7:
    console.log("JULY");
    break;
  case 8:
    console.log("AUGUST");
    break;
  case 9:
    console.log("SEPTEMBER");
    break;
  case 10:
    console.log("OCTOBER");
    break;
  case 11:
    console.log("NOVEMBER");
    break;
  case 12:
    console.log("DECEMBER");
    break;

  default:
    console.log("Entered value is incorrect");
    break;
}

// FALSY VALUES
// 0, -0, "", false, 0n, null, undefined

// TRUTHY VALUES
//true, 1, [], { }, " ", "false", 'false,

let DB_DATA;

// DB_DATA = undefined ?? 100;
// DB_DATA = null ?? 100
DB_DATA = null ?? null ?? 200;

console.log(DB_DATA);

let name = "S";

name !== "" ? console.log("Valid Name") : console.log("Not a Valid Name");

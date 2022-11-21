const argvs = process.argv;
const argv = argvs.slice(2);
const operator = argv[0];
const num1 = parseFloat(argv[1]);
const num2 = parseFloat(argv[2]);

const sum = () => {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero!");
  } else {
    console.log("La " + operator + " è: " + (num1 + num2));
  }
};
const sub = () => {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero!");
  } else {
    console.log("La " + operator + " è: " + (num1 - num2));
  }
};
const div = () => {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero!");
  } else {
    if (num2 === 0) {
      console.log("Impossibile!");
    } else {
      console.log("La " + operator + " è: " + num1 / num2);
    }
  }
};
const times = () => {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero!");
  } else {
    console.log("La " + operator + " è: " + num1 * num2);
  }
};

switch (operator) {
  case "somma":
    sum();
    break;
  case "sottrazione":
    sub();
    break;
  case "divisione":
    div();
    break;
  case "moltiplicazione":
    times();
    break;
}

// if (operator === "somma") {
//   sum();
// }
// if (operator === "sottrazione") {
//   sub();
// }
// if (operator === "divisione") {
//   div();
// }
// if (operator === "moltiplicazione") {
//   times();
// }

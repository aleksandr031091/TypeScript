const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// let age = 50;
let age: number;
// let name = "Max";
let nameUser: string;
// let toggle = true;
let toggle: boolean;
// let empty = null;
let empty: null;
// let notInitialize = undefined;
let notInitialize: undefined;

let callback: (a: number) => number;
//  let callback = (a) => {
//  return 100 + a;
//  };

// let anything = -20;
// anything = "Text";
// anything = {};
let anything: any;

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") str = some;

// let person = ["Max", 21];
let person: [string, number];

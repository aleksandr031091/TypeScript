var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// let age = 50;
var age;
// let name = "Max";
var nameUser;
// let toggle = true;
var toggle;
// let empty = null;
var empty;
// let notInitialize = undefined;
var notInitialize;
var callback;
//  let callback = (a) => {
//  return 100 + a;
//  };
// let anything = -20;
// anything = "Text";
// anything = {};
var anything;
var some;
some = "Text";
var str;
if (typeof some === "string")
    str = some;
// let person = ["Max", 21];
var person;
// ===========================enum===========================
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var load = {
    status: Status.LOADING
};
if (load.status === Status.LOADING) {
    console.log("Сраница загружается");
}
else {
    console.log("Сраница загружена");
}
// ===========================enum===========================
// ===========================Union Type===========================
var init;
init = "String";
init = 3;
// ===========================Union Type===========================
// ===========================Literal Type===========================
var value;
// ===========================Literal Type===========================
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "open"
};

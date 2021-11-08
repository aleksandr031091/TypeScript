"use strict";
const button = document.getElementById("buttonFormId");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let age;
let nameUser;
let toggle;
let empty;
let notInitialize;
let callback;
let anything;
let some;
some = "Text";
let str;
if (typeof some === "string")
    str = some;
let person;
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const load = {
    status: Status.LOADING,
};
if (load.status === Status.LOADING) {
    console.log("Сраница загружается");
}
else {
    console.log("Сраница загружена");
}
let init;
init = "String";
init = 3;
let value;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "open",
};
//# sourceMappingURL=app.js.map
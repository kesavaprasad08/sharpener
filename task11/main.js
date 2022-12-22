const btn = document.querySelector(".btn");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

btn.style.background = "green";
btn.addEventListener("mouseover", onMouseOver);
btn.addEventListener("mouseout", onmouseOut);
btn.addEventListener("click", onclick);
myForm.addEventListener("submit", onSubmit);

function onMouseOver(e) {
btn.style.background = "darkgreen";
}

function onmouseOut(e) {
btn.style.background = "green";
}

function onclick(e) {
btn.style.background = "blue";
}

function onSubmit(e) {
e.preventDefault();

if (nameInput.value === "" || emailInput.value === "") {
 msg.classList.add("error");

    msg.innerHTML = "please enter all fields";

    setTimeout(() => msg.remove(), 3000);
} else {
var myobj = {
    name : nameInput.value,
     email: emailInput.value
}
var myobjserialized =JSON.stringify(myobj);
console.log(myobjserialized);

localStorage.setItem('myobj',myobjserialized);
console.log(JSON.parse(localStorage.getItem('myobj')));
}
nameInput.value = "";
emailInput.value = "";
}

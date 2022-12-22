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

    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
}
nameInput.value = "";
emailInput.value = "";
}

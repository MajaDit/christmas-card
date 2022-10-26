const nameForm = document.getElementById("name");
const greetingForm = document.getElementById("greeting");

function submitName(event) {
  event.preventDefault();
  let name = document.getElementById("customize-name");
  name.textContent = `${event.target.value}`;
}
function submitGreeting(event) {
  event.preventDefault();
  let greeting = document.getElementById("customize-greeting");
  greeting.textContent = `${event.target.value}`;
}

nameForm.addEventListener("change", submitName);
greetingForm.addEventListener("change", submitGreeting);

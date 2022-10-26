const form = document.getElementById("customize-form");

function submitForm(event){
  event.preventDefault();
  console.log(event.target.value);
}

form.addEventListener("change", submitForm);
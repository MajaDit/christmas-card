const nameForm = document.getElementById("name");
const greetingForm = document.getElementById("greeting");
const saveButton = document.getElementById("save-card-button");

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

function downloadURI(uri, name) {
  let link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

nameForm.addEventListener("change", submitName);
greetingForm.addEventListener("change", submitGreeting);

html2canvas(
  (document.getElementById("save-card-button").onclick = function () {
    const screenshotTarget = document.getElementById("card-display");
    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "now-holiday-card.png");
      anchor.click();
      anchor.remove();
    });
  })
);

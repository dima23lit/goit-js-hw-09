let formData = { email: "", message: "" };
const feedbackForm = document.querySelector('.feedback-form');
const modalInput = feedbackForm.email
const modalTextArea = feedbackForm.message


feedbackForm.addEventListener('input', getInput); 
feedbackForm.addEventListener('submit', onButton); 

function getInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onButton(evt) {
    evt.preventDefault()
    if (modalInput.value === "" || modalTextArea.value === "") {
        alert("«Fill please all fields»")
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        localStorage.removeItem("feedback-form-state");
        modalInput.value = "";
        modalTextArea.value = "";
        formData = { email: "", message: "" }
        evt.currentTarget.reset();
    }
}

const localState = JSON.parse(localStorage.getItem("feedback-form-state"));

if (localState) {
  for (const key of Object.keys(localState)) {
    document.querySelector(`[name="${key}"]`).value = localState[key];
  }
}
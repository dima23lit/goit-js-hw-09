let formData = { email: "", message: "" };
const feedbackForm = document.querySelector('.feedback-form');
const modalInput = document.querySelector('.modal-input')
const modalTextArea = document.querySelector('.modal-text-area')

feedbackForm.addEventListener('input', getInput); 
feedbackForm.addEventListener('submit', onButton); 

function getInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onButton(evt) {
    evt.preventDefault()
    if (modalInput.value === "" || modalInput.value.includes(" ") || modalTextArea.value === "" || modalTextArea.value.includes(" ")) {
        alert("«Fill please all fields»")
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        localStorage.removeItem("feedback-form-state");
        modalInput.value = "";
        modalTextArea.value = "";
        formData = { email: "", message: "" }
    }
}
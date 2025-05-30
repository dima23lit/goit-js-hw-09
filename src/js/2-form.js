let formData = {
    email: "",
    message: ""
}; 

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.form-input');
const formTextArea = document.querySelector('.form-text-area');

form.addEventListener('input', formF);

function formF(event) {
    if (event.target.nodeName === 'INPUT') {
        formData.email = event.target.value
    }
    if (event.target.nodeName === "TEXTAREA") {
        formData.message = event.target.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

if (!(localStorage.getItem("feedback-form-state") === null)) {
    let usedFormDate = JSON.parse(localStorage.getItem("feedback-form-state"));
    formData.email = usedFormDate.email;
    formData.message = usedFormDate.message;
    formInput.value = usedFormDate.email;
    formTextArea.value = usedFormDate.message;
} else {
    formData.email = "";
    formData.message = "";
}

form.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault();
    console.log(event)
    if (event.target.elements[0].value === "" || event.target.elements[1].value === "") {
        alert('Fill please all fields')
    } else {
        console.log(formData);
        formData.email = "";
        formData.message = "";
        formInput.value = "";
        formTextArea.value = "";
        localStorage.clear();
    }

    form.reset()
}
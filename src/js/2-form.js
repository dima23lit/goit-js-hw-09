let formData = {
    email: "",
    message: ""
}; 

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInputEvent);

function handleInputEvent(event) {
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
    document.querySelector('[name="email"]').value = usedFormDate.email;
    document.querySelector('[name="message"]').value = usedFormDate.message;
} else {
    formData.email = "";
    formData.message = "";
}

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault();

    // if (event.target.elements[0].value === "" || event.target.elements[1].value === "")

    if (formData.email === "" || formData.message === "") {
        alert('Fill please all fields')
    } else {
        console.log(formData);
        formData.email = "";
        formData.message = "";
        document.querySelector('[name="email"]').value = "";
        document.querySelector('[name="message"]').value = "";
        localStorage.removeItem("feedback-form-state");
    }
}
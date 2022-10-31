const loginForm = document.querySelector(".login-form");

const formValidator = (event) => {
    event.preventDefault();

    const { elements } = event.currentTarget;

    const emailFildValue = elements["email"].value;
    const passwdFildValue = elements["password"].value.trim();

    if (emailFildValue === "" || passwdFildValue === "") {
        alert("Some fields are empty!!!");
        return;
    }

    console.log({ email: `${emailFildValue}`, password: `${passwdFildValue}` });

    event.currentTarget.reset();
};

loginForm.addEventListener("submit", formValidator);
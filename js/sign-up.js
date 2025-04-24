document.addEventListener("DOMContentLoaded", function () {
  AddEventListeners();
});

function AddEventListeners() {
  const form = document.getElementById("sign-up-form");
  document.getElementById("firstname").focus();

  form.addEventListener("submit", function(event) {
    ValidatePassword();
    if (!form.checkValidity()) {
      // Prevent actual submission if form is invalid
      event.preventDefault();
      form.classList.add("submitted");
      form.reportValidity();
      return;
    }
    //alert("Form submitted successfully!");
    event.preventDefault();
    document.getElementById("form-submitted").showModal();
    form.reset();
    form.classList.remove("submitted");
  });
}

function ValidatePassword() {
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  if (password1.value !== password2.value) {
    password1.setCustomValidity("Passwords don't match");
    console.log("password1 " + password1.value);
    console.log("password2 " + password2.value);
  } else {
    password1.setCustomValidity("");
  }
}
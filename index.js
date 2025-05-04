const form = document.getElementById("form");
const successMessage = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const concent = document.getElementById("concent").checked;
  const queryType = document.querySelector('input[name="radio"]:checked');
  const formError = document.querySelectorAll(".form-error");
  const queryLabel = document.querySelectorAll(".radio-el")

  let isValid = true;

  // First Name
  if (fname === "") {
    isValid = false;
    formError[0].style.visibility = "visible";
    document.querySelector("#fname").style.border = "1px solid rgb(255, 0, 0)";
  } else {
    formError[0].style.visibility = "hidden";
    document.querySelector("#fname").style.border = "1px solid rgb(26, 128, 47)";
  }

  // Last Name
  if (lname === "") {
    isValid = false;
    formError[1].style.visibility = "visible";
    document.querySelector("#lname").style.border = "1px solid rgb(255, 0, 0)";
  } else {
    formError[1].style.visibility = "hidden";
    document.querySelector("#lname").style.border =
      "1px solid rgb(26, 128, 47)";
  }

  // Email
  if (!isValidEmail(email)) {
    isValid = false;
    formError[2].style.visibility = "visible";
    document.querySelector("#email").style.border = "1px solid rgb(255, 0, 0)";
  } else {
    formError[2].style.visibility = "hidden";
    document.querySelector("#email").style.border =
      "1px solid rgb(26, 128, 47)";
  }
  // console.log(queryLabel);

  // Query type
  if (!queryType) {
    isValid = false;
    queryLabel[0].style.border = "1px solid rgb(255, 0, 0)";
    queryLabel[1].style.border = "1px solid rgb(255, 0, 0)";
    formError[3].style.visibility = "visible";
  } else {
    formError[3].style.visibility = "hidden";
    queryLabel[0].style.border = "1px solid rgb(12, 128, 28)";
    queryLabel[1].style.border = "1px solid rgb(12, 128, 28)";
  }
  //message textbox Error 
  const textbox = document.getElementById("txt-area").value.trim();
  if(textbox == ""){
    isValid = false;
    document.querySelector("#txt-area").style.border = "1px solid rgb(255, 0, 0)";
    formError[4].style.visibility = "visible"
  }else{
    document.querySelector("#txt-area").style.border =
      " 1px solid rgb(26, 128, 47)";
    formError[4].style.visibility = "hidden";
  }

  // Concent checkbox
  if (!concent) {
    isValid = false;
    formError[5].style.visibility = "visible";
  } else {
    formError[5].style.visibility = "hidden";
  }

  // If valid, show success message
  if (isValid) {
    successMessage.classList.toggle("active");
    form.reset();

    // Hide success message after 2.5 seconds
    setTimeout(() => {
      successMessage.classList.toggle("active");
    }, 2500);
  }
});

// Email validation function
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const message = document.querySelector(".message");
const radio = document.querySelector('input[name="radio"]:checked')
const queryError = document.querySelector(".q-error")
const radioLabel = document.querySelector('.radio')


form.addEventListener("submit", (e) => {
  e.preventDefault(); // Always prevent form refresh first

  // Check if fields are filled
  if (fname.value.trim() === "" || lname.value.trim() === "") {
    alert("Please fill in both first and last names.");
    return; // Stop execution here
  }
  if(!radio){
    queryError.classList.add("active")
    
    radioLabel.classList.add("error")
    return
  }


  // Show the message
  message.classList.remove("hidden");
  message.classList.add("active");

  form.reset();
  // Hide after 2 seconds
  setTimeout(() => {
    message.classList.remove("active");
    message.classList.add("hidden");
  }, 2000);
  // checking if the radio is selected
});

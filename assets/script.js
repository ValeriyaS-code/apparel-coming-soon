var emailField = document.getElementById("email");
var button = document.getElementById("btn");
var response = document.getElementById("hidden");

button.addEventListener('click', function() {
    var email = emailField.value;
    console.log(email);
  });

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  button.addEventListener('click', function() {
    var email = emailField.value;
    if (validateEmail(email)) {
      hidden.innerHTML = "Thank you for providing your email address!";

      const changeColorGood = document.getElementById("hidden");
        changeColorGood.style.color = "hsl(0, 36%, 70%)";
    } else {
        const changeColor = document.getElementById("email");
        changeColor.style.border = "1px solid hsl(354, 100%, 66%)";

        const changeColorText = document.getElementById("hidden");
        changeColorText.style.color = "hsl(354, 100%, 66%)";

        hidden.innerHTML = "Please provide a valid email";
    }
  });
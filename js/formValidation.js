const submitButton = document.querySelector(".submit");
const textInputs = document.querySelectorAll(".js-text__input");
const emailInput = document.querySelector(".js-email__input");
const radios = document.querySelectorAll(".js-radio");

submitButton.addEventListener("click", event => {
  event.preventDefault();
  checkTextsOnSubmit();
  checkEmail(emailInput);
  checkradios();

  if (
    event.preventDefault() &&
    checkTextsOnSubmit() &&
    checkEmail(emailInput) &&
    checkradios()
  ) {
    // make axios call
  }
});

function checkTextsOnSubmit() {
  let areAllFull = false;
  textInputs.forEach(textInput => {
    if (textInput.value === "") {
      textInput.classList.add("error");
      return areAllFull;
    }
    return (areAllFull = true);
  });
}

function checkEmail(input) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailformat)) {
    return true;
  } else {
    input.classList.add("error");
    return false;
  }
}

function checkradios() {
  let areAllchecked = false;
  radios.forEach(radio => {
    if (radio.checked) {
      return (areAllchecked = true);
    } else {
      radio.classList.add("error");
      return areAllchecked;
    }
  });
}

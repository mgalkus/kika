const submitButton = document.querySelector(".submit");
const textInputs = document.querySelectorAll(".js-text__input");
const emailField = document.querySelector(".js-email__input");
const phoneField = document.querySelector(".js-phone");
const radios = document.querySelectorAll(".js-radio");
const petTypeInput = document.querySelector(".js-pet-type");
const name = document.querySelector(".js-name").value;
const phone = document.querySelector(".js-phone").value;
const pickupLocation = document.querySelector(".js-pickup-location").value;
const petName = document.querySelector(".js-pet-name").value;
const email = document.querySelector(".js-email__input").value;
let petType;

const params = {
  name,
  phone,
  email,
  pickupLocation,
  petName,
  petType
};

submitButton.addEventListener("click", event => {
  event.preventDefault();

  checkTextsOnSubmit();
  checkEmail(emailField);
  checkPhone(phoneField);
  checkradios();

  if (
    checkTextsOnSubmit() &&
    checkEmail(emailField) &&
    checkPhone(phoneField) &&
    checkradios()
  ) {
    (async () => {
      try {
        const response = await axios.post(
          "https://reqres.in/api/users",
          params
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }
});

(function getPetType() {
  petType = petTypeInput.checked ? "Dog" : "Cat";
})();

function checkTextsOnSubmit() {
  let areAllFull = false;
  textInputs.forEach(textInput => {
    if (textInput.value === "") {
      textInput.classList.add("error");
      areAllFull === false;
    }
    areAllFull = true;
  });
  return areAllFull;
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
      areAllchecked = true;
    } else {
      radio.parentElement.classList.add("error");
      areAllchecked = false;
    }
  });
  return areAllchecked;
}

function checkPhone(input) {
  const phoneFormat = /^[\+]?[0-9]{5,12}$/;
  if (input.value.match(phoneFormat)) {
    return true;
  } else {
    input.classList.add("error");
    return false;
  }
}

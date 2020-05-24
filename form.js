document.addEventListener("DOMContentLoaded", function () {
  class Person {
    constructor(fullName, tel, comment) {
      this.fullName = fullName;
      this.tel = tel;
      this.comment = comment;
    }

    send() {
      document.querySelector(".form__full-name").value = this.fullName;
      document.querySelector(".form__tel").value = this.tel;
      document.querySelector(".form__comment").value = this.comment;
    }
  }

  function createButton() {
    const button = document.createElement("button");
    const lineBreak = document.createElement("br");
    button.textContent = "+ Add number";
    button.className = "form__button form__button_add-tel";
    button.addEventListener("click", addNewInput);
    document.querySelector(".form__comment").before(button, lineBreak);
  }
  createButton();

  function addNewInput(e) {
    e.preventDefault();
    createField();
    removeButton();
    createButton();
  }

  function createField() {
    const input = document.createElement("input");
    input.className = "form__tel-n";
    input.setAttribute("name", "tel");
    input.setAttribute("placeholder", "Enter telephone");
    document.querySelector(".form__comment").before(input);
  }

  function removeButton() {
    document
      .querySelector(".form__button_add-tel")
      .removeEventListener("click", addNewInput);
    document.querySelector(".form__button_add-tel").remove();
  }

  const form = document.querySelector(".form");
  form.addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    new Person("John Doe", +123456789, "Hello, I'm John!").send();
  }
});

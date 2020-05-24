document.addEventListener('DOMContentLoaded', function() {
  function createButton() {
    const button = document.createElement('button');
    const lineBreak = document.createElement('br');
    button.textContent = '+ Add number';
    button.className = "form__button form__button_add-tel";
    button.addEventListener('click', addNewInput);
    document.querySelector('.form__comment').before(button, lineBreak);
  }
  createButton();  

  function addNewInput(e) {
    e.preventDefault();
    createField();
    removeButton();
    createButton();
  }

  function createField() {
    const input = document.createElement('input');
    input.className = 'form__tel-n'; 
    input.setAttribute('name', 'tel');
    input.setAttribute('placeholder', 'Enter telephone');
    document.querySelector('.form__comment').before(input);
  }

  function removeButton() {
    document.querySelector(".form__button_add-tel").removeEventListener('click', addNewInput);
    document.querySelector(".form__button_add-tel").remove();
  }
});

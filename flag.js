document.addEventListener('DOMContentLoaded', function() {
  function createFlag(char, width, height) {
    let row = '';
    for (let i = 0; i < width; i++) {
      row += `${char}`;
    }
    let redStripe = '';
    for (let i = 0; i < height/3; i++) {
      redStripe += `${row}<br>`;
    }
    let whiteStripe = '';
    for (let i = 0; i < height/3; i++) {
      whiteStripe += `${row}<br>`;
    }
    let blueStripe = '';
    for (let i = 0; i < height/3; i++) {
      blueStripe += `${row}<br>`;
    }
  
    document.querySelector('.red-stripe').innerHTML = redStripe;
    document.querySelector('.white-stripe').innerHTML = whiteStripe;
    document.querySelector('.blue-stripe').innerHTML = blueStripe;
  }
  
  createFlag('O', 60, 80);
})

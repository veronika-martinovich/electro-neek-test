const MODE_1 = 'desc';
const MODE_2 = 'asc';

Array.prototype.sorting  = function(mode) {
  for (let i = 0; i < this.length; i++) {
    let rule = i;

    if (mode === MODE_1) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[j] > this[rule]) {
          let temp = this[rule];
          this[rule] = this[j];
          this[j] = temp;
        }
      }
    } 

    if (mode === MODE_2) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[j] < this[rule]) {
          let temp = this[rule];
          this[rule] = this[j];
          this[j] = temp;
        }
      }
    }
    
  }
  return this;
}

console.log([1,5,6,2,9,10,3,12,25,57,24].sorting('desc'));
console.log([1,5,6,2,9,10,3,12,25,57,24].sorting('asc'));
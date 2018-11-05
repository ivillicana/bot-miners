let rowNumber = 20;
let cellNumber = 20;

const rows = []

let r;
let c;
for (r = 0; r < rowNumber; r++) {
  let array = []
  for (c = 0; c < cellNumber; c++){
    array.push(' ')
  }
  rows.push(array)   
}

export default rows
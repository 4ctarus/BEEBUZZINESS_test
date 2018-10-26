const NUMBERS = [
  0b111101010, //-> 0
  0b100100000, // -> 1
  0b011110010, // -> 2
  0b110110010, //-> 3
  0b100111000, // -> 4
  0b110011010, // -> 5
  0b111011010, //-> 6
  0b100100010, // -> 7
  0b0111111010, // -> 8
  0b100111010 // -> 9
];

let nb = process.argv[2];
let output = '';

if (!nb) nb = '0123456789';

for(let y = 0; y < 3; y++) {
  for(let l = 0; l < nb.length; l++) {
    for(let x = 0; x < 3; x++) {
      let value = (NUMBERS[nb[l]] || 0b000000000) >> (x+(y*3));
      let symbol = '.';
      if (value % 2) {
        if (x === 1) symbol = '_';
        else symbol = '|';
      }
      output += symbol;
    }
    output += ' ';
  }
  output += '\n';
}
console.log(output);
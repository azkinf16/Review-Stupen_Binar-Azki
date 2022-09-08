console.log('SOAL 1');
console.log('\n');

const soalSatu = require('./soal1')

console.log(soalSatu);

console.log('\n');
console.log('-------------------------');
console.log('\n');
console.log('SOAL 2');
console.log('\n');

const { Shark, Cat, Dog } = require('./soal2')

let iniShark = new Shark('Hiu', 10, 'Berenang')
let iniCat = new Cat('Stray', 2, 'Bermain')
let iniDog = new Dog('Puppy', 3, 'Berjalan', 'Azki')

console.log(iniShark.introduce() + '\n');
console.log(iniCat.introduce() + '\n');
console.log(iniDog.introduce() + '\n');
console.log(iniDog.GreetMaster());

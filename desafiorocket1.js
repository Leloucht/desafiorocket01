alert('iremos fazer alguns calculos rapidos');

let numberOne = prompt('insira o primeiro numero');
let numberTwo = prompt('insira o segundo numero');

let sum = Number(numberOne) + Number(numberTwo);
let sub = Number(numberOne) - Number(numberTwo);
let multi = Number(numberOne) * Number(numberTwo);
let division = (Number(numberOne) / Number(numberTwo)).toFixed(2);
let rest = Number(numberOne) % Number(numberTwo);


alert(`a soma de ${numberOne} e ${numberTwo} é ${sum}`);
alert(`a subtracao de ${numberOne} e ${numberTwo} é ${sub}`);
alert(`a multiplicacao de ${numberOne} e ${numberTwo} é ${multi}`);
alert(`a divisao de ${numberOne} e ${numberTwo} é ${division}`);
alert(`o resto da divisao de ${numberOne} e ${numberTwo} é ${rest}`);

if(sum % 2 == 0) {
    alert(`a soma de ${numberOne} e ${numberTwo} é par`);
} else alert(`a soma de ${numberOne} e ${numberTwo} é impar`)
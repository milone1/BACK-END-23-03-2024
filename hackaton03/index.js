const $btn = document.getElementById('btn-read-number')
const $number = document.getElementById('number')
const $maxNumber = document.getElementById('num-max')
const $btn35 = document.getElementById('btn-read-number-35')
const $textOpacity = document.getElementById('list-numbers-opacity');
const $opacity = document.getElementById('opacity-list')
const $btn16 = document.getElementById('btn-read-number-16')
const $nameDay = document.getElementById('name-day')
const $numbeNilakantha = document.getElementById('number-nilakantha')
const $btn40 = document.getElementById('btn-read-number-40')
const $textPi = document.getElementById('text-pi');
const $btn38 = document.getElementById('btn-read-number-38')
const $numberPerfect = document.getElementById('number-perfect')
const $textPerfect = document.getElementById('num-perfect')

const $btn21 = document.getElementById('btn-read-number-21')
const $numberFactorial = document.getElementById('number-factorial')
const $textFactorial = document.getElementById('text-factorial')

const $btn24 = document.getElementById('btn-read-number-24')
const $numberPar = document.getElementById('number-par')
const $textPar = document.getElementById('text-par')


$btn.addEventListener('click', () => {

  if (!$number.value.length || $number.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  if ($number.value.length == 3) {
    alert('El numero ingresado tiene 3 cifras.')
  } else {
    alert('No tiene 3 cifras')
  }
})
//! Ejercicio 16

window.addEventListener("load", () => handlerDay());
$btn16.addEventListener('click', () => handlerDay())

function handlerDay() {
  const numberDay = Math.floor(Math.random() * 7) + 1
  switch (numberDay) {
    case 1:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a Lunes`
      // console.log("lunes")
      break;
    case 2:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a martes`
      break;
    case 3:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a miercoles`
      break;
    case 4:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a jueves`
      break;
    case 5:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a viernes`
      break;
    case 6:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a sabado`
      break;
    case 7:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a domingo`
      break;
    default:
      $nameDay.innerHTML = `Error`
      console.log("dia invalido")
  }
}

//! Ejercicio 35
$btn35.addEventListener('click', () => {
  const listNumer = []
  for (let i = 0; i < 20; i++) {
    const numeroSelected = Math.floor(Math.random() * (1000 - 100))
    listNumer.push(numeroSelected)
  }
  const numMax = Math.max(...listNumer)
  $maxNumber.innerHTML = numMax.toString()
  const text = listNumer.join('-').toString()
  $textOpacity.innerHTML = text
  $opacity.style.opacity = 1;
})

$btn40.addEventListener('click', () => {
  if ($numbeNilakantha.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  let pi = 3;
  let signo = 1;

  for (let i = 2; i <= 2 * $numbeNilakantha.value; i += 2) {
    pi += 4 / (i * (i + 1) * (i + 2)) * signo;

    signo += -1
  }
  $textPi.innerHTML = pi.toString()
})

$btn38.addEventListener('click', () => {
  
  const number = parseInt($numberPerfect.value);

  if ($numberPerfect.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  let sumaDivisores = 0;
  for (let i = 1; i <= number/2; i++) {
    if (number % i === 0) {
      sumaDivisores += i;
    }
  }
  
if (sumaDivisores === number) {
    $textPerfect.innerHTML = `El ${number} es un numero perfectp` 
  } else {
    $textPerfect.innerHTML = `El ${number} no es perfecto`  
  }
})

$btn21.addEventListener('click', () => {
  const number = parseInt($numberFactorial.value);
  let result = 1;
  if ($numberFactorial.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  for(let i = 1; i <= number; i++) {
    result = result * i
  }
  
  $textFactorial.innerHTML = `El factorial de ${number}! es ${result}`
})

$btn24.addEventListener('click', () => {
  const number = parseInt($numberPar.value);
  let result = 0;
  
  if ($numberPar.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  for(let i = 1; i <= number; i++) {
    if(i % 2 === 0) {
      result += i
    }
  }
  
  $textPar.innerHTML = `El suma de pares es de: ${result}`
})


const $num2 = document.getElementById('number-2')
const $num1 = document.getElementById('number-1')

const $btn1 = document.getElementById('btn-1')

const $num3 = document.getElementById('number-3')
const $num4 = document.getElementById('number-4')
const $btn2 = document.getElementById('btn-2')
const $num5 = document.getElementById('number-5')
const $btn3 = document.getElementById('btn-3')

const $num6 = document.getElementById('number-6')
const $num7 = document.getElementById('number-7')

const $btn4 = document.getElementById('btn-4')

const $num8 = document.getElementById('number-8')
const $num9 = document.getElementById('number-9')
const $num10 = document.getElementById('number-10')

const $btn5 = document.getElementById('btn-5')


const sumOfTwoNumbers = ($num1, $num2) => {
  const sum = $num1 + $num2;
  return sum
};

$btn1.addEventListener('click', () => {

  if ($num1.value == null || $num1.value == undefined && $num2.value == null || $num2.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  const suma = sumOfTwoNumbers(parseInt($num1.value), parseInt($num2.value))
  alert(`La suma es: ${suma}`)
})

// !     EJERCICIO-2

const power = (base, exponente) => {
  const CalculatingThePower = Math.pow(base, exponente);
  return CalculatingThePower;
};

$btn2.addEventListener('click', () => {
  if ($num3.value == null || $num3.value == undefined && $num4.value == null || $num4.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  const num = power(parseInt($num3.value), parseInt($num4.value))

  alert(`El calculo es: ${num}`)
})

// !     EJERCICIO-3

// const arguments = [1, 5, 9];
const sumOfCubes = (listaNumbers) => {
  let sum = 0;
  console.log(listaNumbers.length)
  for (let i = 0; i <= listaNumbers.length - 1; i++) {
    sum += Math.pow(listaNumbers[i], 3);
    console.log(sum)
  }
  return sum;
};

// console.log(sumOfCubes(1, 5, 9));

$btn3.addEventListener('click', () => {
  if ($num5.value == null || $num5.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }
  alert(`La suma de cubos es: ${sumOfCubes($num5.value.split(',').map(Number))}`)
})

// !     EJERCICIO-4

const triArea = (base, altura) => {
  const multiplicationOfBaseAndHeight = base * altura;
  const area = multiplicationOfBaseAndHeight / 2;
  return area;
};

$btn4.addEventListener('click', () => {
  if ($num6.value == null || $num6.value == undefined && $num7.value == null || $num7.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  alert(`El area del triangulo es: ${triArea(parseInt($num6.value), parseInt($num7.value))}`)

})


// !     EJERCICIO-5


$btn5.addEventListener('click', () => {
  if ($num8.value == null || $num8.value == undefined && $num9.value == null || $num9.value == undefined && $num10.value == null || $num10.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  var resultado;

  switch ($num9.value) {
    case 'suma':
    case '+':
      resultado = (parseInt($num8.value) + parseInt($num10.value))
      break;
    case 'resta':
    case '-':
      resultado = (parseInt($num8.value) - parseInt($num10.value))
      break;
    case 'multiplicacion':
    case '*':
      resultado = (parseInt($num8.value) * parseInt($num10.value))
      break;
    case 'division':
    case '/':
      resultado = (parseInt($num8.value) / parseInt($num10.value))
      break;
    default:
      return alert('Operacion no valida')
  }

  alert(`${$num8.value} ${$num9.value} ${$num10.value} = ${resultado}`)
})
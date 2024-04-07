const $btn = document.getElementById('btn-read-number')
const $number = document.getElementById('number')
const $maxNumber = document.getElementById('num-max')
const $btn35 = document.getElementById('btn-read-number-35')
const $textOpacity = document.getElementById('list-numbers-opacity');
const $opacity = document.getElementById('opacity-list')

$btn.addEventListener('click', () => {
  
  if (!$number.value.length || $number.value.length == 0) {
   return alert('Ingrese numero a validar')
  } 

  if($number.value.length == 3 ) {
    alert('El numero ingresado tiene 3 cifras.')
  } else {
    alert('No tiene 3 cifras')
  }
})

//! Ejercicio 35
$btn35.addEventListener('click', () => {
  const listNumer = []
  for(let i = 0; i < 20 ; i++) {
    const numeroSelected = Math.floor(Math.random() * (1000 - 100))
    listNumer.push(numeroSelected)
  }
  const numMax = Math.max(...listNumer)
  $maxNumber.innerHTML = numMax.toString() 
  const text = listNumer.join('-').toString()
  $textOpacity.innerHTML = text
  $opacity.style.opacity = 1;
})

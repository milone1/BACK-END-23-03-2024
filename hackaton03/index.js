const $btn = document.getElementById('btn-read-number')
const $number = document.getElementById('number')

$btn.addEventListener('click', () => {
  
  if (!$number.value.length || $number.value.length == 0) {
    return alert('Ingrese numero a validar')
  } 

  if($number.value.length > 3 ) {
    alert('El numero ingresado tiene mas de 3 cifras.')
  } else {
    alert('No tiene 3 cifras')
  }
})

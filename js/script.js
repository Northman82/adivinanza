let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerEdad);

function establecerEdad() {
  let eleccion = seleccionar.value;

  if (eleccion === 'menor') {
    parrafo.textContent = 'Sos menor, No tenemos  bebidas para vos';
 } else if (eleccion === 'justo') {
    parrafo.textContent = 'por muy poco podes disfrutar de nuestro producto, bebe con moderación';
  } else if (eleccion === 'mayor') {
    parrafo.textContent = 'Porque seas mayor, no quiere decir que te revientes la cabeza tomando, tranquilo';
  } else {
    parrafo.textContent = '';
  }
}
    
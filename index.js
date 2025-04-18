const $tablero = document.querySelector(".tablero");
const $btn_sortear = document.querySelector("#btn-sortear");
let contador = [];

for (let i = 1; i <= 99; i++) {
  contador.push(i);
  let template = document.createElement("div");
  template.className = "item";
  template.innerHTML = i;
  template.setAttribute("id", i);
  
  $tablero.appendChild(template);
}
console.log('contador ' + contador)
const $item = document.querySelectorAll(".item");
console.log($item[2].id);
let listaDeNumeros = [];

function generarNumero() {
  if (contador.length === 0) {
    alert("Ya no hay más números por sortear.");
    return;
  }
  let verificacion;
  let numero;
  do {
     numero = contador[Math.floor(Math.random() * contador.length)];
     verificacion = listaDeNumeros.includes(numero);
    
  } while (verificacion);

  document.getElementById("numero").innerText = numero;
  listaDeNumeros.push(numero);
  contador = contador.filter(n => n !== numero);
  console.log(listaDeNumeros.at(0));
  for (let i = 0; i < listaDeNumeros.length; i++) {
    for (let z = 0; z < $item.length; z++) {
      if (listaDeNumeros[i] == $item[z].id) {
        $item[z].style.color = "blue";
        $item[z].style.background = "#03c2a8af";
      }
    }
  }
  console.log(listaDeNumeros);
  reproducirSonido(numero)
}

$btn_sortear.addEventListener("click", generarNumero);


// Función para reproducir el sonido de un número
function reproducirSonido(numero) {
  // Cargar los sonidos de los números (deberías tener archivos de audio para cada número)
  const sonido = new Howl({
    src: [`sonidos/${numero}.mp3`], // Asegúrate de tener archivos MP3 con el nombre del número
    volume: 15.0
  });
  sonido.play();
}
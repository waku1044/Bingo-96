const $tablero = document.querySelector(".tablero");
const $btn_sortear = document.querySelector("#btn-sortear");

for (let i = 1; i <= 99; i++) {
  let template = document.createElement("div");
  template.className = "item";
  template.innerHTML = i;
  template.setAttribute("id", i);
  $tablero.appendChild(template);
}

const $item = document.querySelectorAll(".item");
console.log($item[2].id);
let listaDeNumeros = [];

function generarNumero() {
  const numero = Math.floor(Math.random() * 99) + 1;
  // Verificamos que el número no se repita
  while (listaDeNumeros.includes(numero)) {
    numero = Math.floor(Math.random() * 99) + 1; // Generamos otro número
  }

  document.getElementById("numero").innerText = numero;
  listaDeNumeros.push(numero);
  
  for (let i = 0; i < listaDeNumeros.length; i++) {
    for (let z = 0; z < $item.length; z++) {
      if (listaDeNumeros[i] == $item[z].id) {
        $item[z].style.color = "blue";
        $item[z].style.background = "#03c2a8af";
      }
    }
  }
  console.log(listaDeNumeros);
}

$btn_sortear.addEventListener("click", generarNumero);

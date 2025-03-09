// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglos para almacenar los nombres y los nombres que aún no han sido sorteados
let amigos = [];
let amigosSinSortear = [];

// Función para agregar un amigo (al hacer clic en "Añadir" o al presionar Enter)
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Convertir el nombre a mayúsculas
  nombre = nombre.toUpperCase();

  // Verificar si el nombre ya fue ingresado
  if (amigos.includes(nombre)) {
    alert(`El nombre "${nombre}" ya ha sido ingresado. Por favor, ingresa un nombre diferente o modifícalo para diferenciarlo.`);
    input.value = "";
    input.focus();
    return;
  }

  // Agregar el nombre a ambos arreglos
  amigos.push(nombre);
  amigosSinSortear.push(nombre);
  actualizarListaAmigos();

  input.value = "";
  input.focus();
}

// Función para actualizar la lista de amigos mostrada en pantalla
function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista actual

  amigos.forEach(function(amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para sortear un amigo secreto sin repetir nombres
function sortearAmigo() {
  let resultadoUl = document.getElementById("resultado");
  resultadoUl.innerHTML = ""; // Limpiar el resultado anterior

  // Si ya se han sorteado todos los nombres, mostrar mensaje de felicitación
  if (amigosSinSortear.length === 0) {
    let li = document.createElement("li");
    li.textContent = "¡Felicitaciones!, haz sorteado todos los amigos secretos.";
    resultadoUl.appendChild(li);
    return;
  }

  // Seleccionar un índice aleatorio de los nombres que aún no han sido sorteados
  let indice = Math.floor(Math.random() * amigosSinSortear.length);
  let amigoSeleccionado = amigosSinSortear[indice];

  // Eliminar el nombre sorteado para que no se repita
  amigosSinSortear.splice(indice, 1);

  // Mostrar el resultado del sorteo
  let li = document.createElement("li");
  li.textContent = "El amigo secreto es: " + amigoSeleccionado;
  resultadoUl.appendChild(li);
}

// Función para reiniciar el juego: limpia las listas y resetea el estado
function nuevoJuego() {
  amigos = [];
  amigosSinSortear = [];
  actualizarListaAmigos();
  document.getElementById("resultado").innerHTML = "";
  // Opcional: Limpiar el campo de entrada y enfocar
  let input = document.getElementById("amigo");
  input.value = "";
  input.focus();
}

// Permitir que al presionar Enter en el input se agregue el nombre
document.getElementById("amigo").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

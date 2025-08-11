let amigos = [];

//función para agregar amigos
function agregarAmigo(params) {
  let capturaTexto = document.getElementById("amigo").value;

  if (capturaTexto != "") {
    amigos.push(capturaTexto);
    limpiarCasilla();
    actualizarLista();
  } else {
    alert("Debe ingresar un nombre!");
  }
}

//Limpiar el input
function limpiarCasilla(params) {
  document.getElementById("amigo").value = "";
}

//actualizar lista de amigo
function actualizarLista(params) {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let nombre of amigos) {
    lista.innerHTML += `<li>${nombre}</li>`;
  }
}

//___________________________________________________________________________
//___________________________________________________________________________

//sorteo aleatorio
function sortearAmigo(params) {
  if (amigos.length != 0) {
    //calcula la cant de indices
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //muestra el nombre segun el indice
    let nombreSorteado = amigos[indiceAleatorio];
    let sorteo = document.getElementById("resultado");
    sorteo.innerHTML = `<li>${nombreSorteado}</li>`;
  }
}
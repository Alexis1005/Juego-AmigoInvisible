let amigos = [];

//funcion para normalizar el nombre a agregar
function normalizarNombre(params) {
  let textoIngresado = document.getElementById("amigo").value;
  let textoNormalizado = textoIngresado
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
  return textoNormalizado;
}

//función para agregar amigos
function agregarAmigo(params) {
  //capturo texto original
  let capturaTexto = document.getElementById("amigo").value;
  //normalizo con la funcion
  let textoNormalizado = normalizarNombre();
  //normalizo los amigos ya agregados
  let amigosNormalizados = amigos.map((nombre) =>
    nombre.trim().toLowerCase().replace(/\s+/g, " ")
  );

  if (textoNormalizado !== "") {
    if (amigosNormalizados.includes(textoNormalizado)) {
      alert("Ya existe ese nombre en la lista!");
      return;
    } else {
      amigos.push(capturaTexto);
      limpiarCasilla();
      actualizarLista();
    }
  } else {
    alert("Debe ingresar un nombre!");
    return;
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
    lista.innerHTML += `<li>${nombre} <button class="boton__eliminar" onclick="eliminarAmigo(this)">x</button></li>`; 
  }
  return;
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
  actualizarLista();
}

//eliminaAmigocreado
function eliminarAmigo(boton) {
  //busco el li que contiene el boton
  const li = boton.parentElement;
  const nombre = li.firstChild.textContent;
  //elimina del DOM
  li.remove()

  //elimina del array
  const indice = amigos.indexOf(nombre);
  amigos.splice(indice,1);

}



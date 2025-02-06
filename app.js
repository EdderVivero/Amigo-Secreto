// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] ;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    const regex = /^[a-zA-Z]+$/;
    let nombres = document.getElementById("amigo").value.trim(); // Agregar trim para eliminar espacios al inicio y al final del nombre

    // Verificar si el nombre es válido
    if (!nombres || !regex.test(nombres)) {
        alert("Por favor, ingrese un nombre válido.");
        limpiarCaja();
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombres)) {
        alert("Este nombre ya está en la lista.");
        limpiarCaja();
        return;
    }

    // Si el nombre es válido y no está en la lista, agregarlo
    amigos.push(nombres);
    alert("Amigo agregado con éxito.");
    asignarTextoElemento('h2', 'Digite el nombre de sus amigos:');
    limpiarCaja();
    actualizarLista();

    // Habilitar el botón de sortear si hay al menos 2 amigos
    if (amigos.length >= 2) {
        document.querySelector(".button-draw").disabled = false;
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function limpiarCaja() {
    document.getElementById("amigo").value ="";
}

function sortearAmigo (){
    if (amigos.length <= 2){
        alert('Requieres mas de dos amigos para el sorteo');
        return;
    }
    let amigoAleatorio = Math.floor(Math.random() * amigos.length); //Recupera el numero de indice al azar
    let nombreSeleccionado = amigos[amigoAleatorio]; // Recupera el nombre del amigo que se encuentra en el indice aleatorio

     // Mostrar el resultado en el DOM
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = nombreSeleccionado; // Mostrar solo el nombre seleccionado
    setTimeout(reiniciarJuego, 3000);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos

    // Limpiar la lista de amigos en el DOM
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar el resultado del sorteo
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "";

    // Deshabilitar el botón de sortear
    document.querySelector(".button-draw").disabled = true;

    // Limpiar la caja de texto
    limpiarCaja();
}
document.querySelector(".button-draw").disabled = true;
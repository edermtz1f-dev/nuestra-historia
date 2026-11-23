
// ELEMENTOS DE LA PÁGINA

const boton = document.getElementById("botonCarta");
const carta = document.getElementById("carta");


// FECHA DE INICIO DE LA RELACIÓN

const fechaInicio = new Date(2024, 8, 23, 0, 0, 0);


// ABRIR Y CERRAR CARTA

boton.addEventListener("click", function () {

    carta.classList.toggle("oculta");

    if (carta.classList.contains("oculta")) {
        boton.textContent = "Abrir mi carta 💌";
    } else {
        boton.textContent = "Cerrar mi carta ❤️";
    }

});


// CONTADOR DE NUESTRA RELACIÓN

function actualizarContador() {

    const ahora = new Date();

    if (ahora < fechaInicio) return;

    let cursor = new Date(fechaInicio);

    let anios = 0;
    let meses = 0;
    let dias = 0;

    // AÑOS

    while (true) {

        let siguiente = new Date(cursor);
        siguiente.setFullYear(siguiente.getFullYear() + 1);

        if (siguiente > ahora) break;

        cursor = siguiente;
        anios++;

    }

    // MESES

    while (true) {

        let siguiente = new Date(cursor);
        siguiente.setMonth(siguiente.getMonth() + 1);

        if (siguiente > ahora) break;

        cursor = siguiente;
        meses++;

    }

    // DÍAS

    while (true) {

        let siguiente = new Date(cursor);
        siguiente.setDate(siguiente.getDate() + 1);

        if (siguiente > ahora) break;

        cursor = siguiente;
        dias++;

    }

    // HORAS, MINUTOS Y SEGUNDOS

    let diferencia = ahora - cursor;

    const horas = Math.floor(diferencia / 3600000);
    diferencia %= 3600000;

    const minutos = Math.floor(diferencia / 60000);
    diferencia %= 60000;

    const segundos = Math.floor(diferencia / 1000);

    // MOSTRAR RESULTADOS

    document.getElementById("anios").textContent = anios;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador, 1000);


// ANIMACIÓN DE PÉTALOS

const espacioPetalos = document.getElementById("petalos");

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");
    petalo.textContent = "🌸";

    petalo.style.left = Math.random() * 100 + "vw";

    petalo.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    const duracion = Math.random() * 5 + 5;

    petalo.style.animationDuration = duracion + "s";

    espacioPetalos.appendChild(petalo);

    setTimeout(function () {
        petalo.remove();
    }, duracion * 1000);

}

setInterval(crearPetalo, 700);


// VISOR DE FOTOGRAFÍA CORREGIDO

const foto = document.getElementById("fotoRecuerdo");
const visor = document.getElementById("visorFoto");
const fotoGrande = document.getElementById("fotoGrande");
const cerrarFoto = document.getElementById("cerrarFoto");

// CERRAR EL VISOR AL INICIAR

visor.classList.add("oculta");

// ABRIR FOTOGRAFÍA

foto.addEventListener("click", function () {

    fotoGrande.src = foto.src;
    visor.classList.remove("oculta");

});

// CERRAR CON LA X

cerrarFoto.addEventListener("click", function () {

    visor.classList.add("oculta");
    fotoGrande.src = "";

});

// CERRAR AL PRESIONAR FUERA DE LA FOTO

visor.addEventListener("click", function (evento) {

    if (evento.target === visor) {

        visor.classList.add("oculta");
        fotoGrande.src = "";

    }

});

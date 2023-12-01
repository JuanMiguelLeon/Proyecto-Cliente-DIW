console.log("Index scripts OK");

//! REVISAME
//! Declaramos dos constantes con el elemento contenedor y el enlace de iniciar sesion
const navEnlaceIniciarSesion = document.querySelector("#iniciar-sesion a");
const contenedorEnlaceIniciarSesion = document.querySelector(".navegador__lista #iniciar-sesion");

//! Agregamos eventos de escucha para el ratón al entrar y salir de la zona del enlace
//!     para que afecte al contenedor, agregando una estilo, una sombra, al container
navEnlaceIniciarSesion.addEventListener("mouseenter", function () {
    contenedorEnlaceIniciarSesion.classList.add("hover-iniciar-sesion");
});

navEnlaceIniciarSesion.addEventListener("mouseleave", function () {
    contenedorEnlaceIniciarSesion.classList.remove("hover-iniciar-sesion");
});

//! Galeria de imagenes
const buttons = document.querySelectorAll(".galeria-botones");
const capas = document.querySelectorAll(".capa");
const galeriaTexto = document.querySelector(".galeria-texto");

//* Lista de textos para la galería
const textosGaleria = [
    "¡Descubre y apoya a talentosos artistas en sus emocionantes proyectos! Únete a nosotros para hacer realidad sus sueños creativos.",
    "Explora proyectos artísticos únicos y contribuye a la creación de obras inspiradoras. Tu apoyo hace posible el arte que cambia el mundo.",
    "Participa en la revolución creativa. Conviértete en un mecenas y haz que las ideas artísticas más innovadoras cobren vida con ArtistGo."
];

//* Inicializamos el índice del texto
let indiceTexto = 0; 

buttons.forEach(function (boton) {
    boton.addEventListener("click", function () {
        cambiarGaleria(boton.classList.contains("next") ? 1 : -1);
    });
});

function cambiarGaleria(evento) {
    const capaActiva = document.querySelector(".capa#capaMostrada");
    let nuevoIndice = [...capas].indexOf(capaActiva) + evento;

    if (nuevoIndice < 0) nuevoIndice = capas.length - 1;
    if (nuevoIndice >= capas.length) nuevoIndice = 0;

    capaActiva.removeAttribute("id");
    capas[nuevoIndice].setAttribute("id", "capaMostrada");

    // Siguiente texto en orden
    galeriaTexto.textContent = textosGaleria[indiceTexto];
    
    // Cambiamos el índice del texto para la próxima vez
    indiceTexto = (indiceTexto + 1) % textosGaleria.length;
}

// Cambiar automáticamente cada 8 segundos
setInterval(function () {
    // Cambia a la siguiente imagen y texto
    cambiarGaleria(1);
}, 8000);
console.log("scripts perfil usuario ok");

//!
const nombreUsuario = document.getElementById("nombreUsuario");
const apellidosUsuario = document.getElementById("apellidosUsuario");
const ciudadUsuario = document.getElementById("ciudadUsuario");
const paisUsuario = document.getElementById("paisUsuario");


document.addEventListener('DOMContentLoaded', comprobarDatos);

function comprobarDatos() {
    let nombreRecuperado = localStorage.getItem('nombre');
    let apellidosRecuperados = localStorage.getItem('apellidos');
    let ciudadRecuperada = localStorage.getItem('ciudad');
    let paisRecuperado = localStorage.getItem('pais');

    if (nombreRecuperado !== null || apellidosRecuperados !== null ||
        ciudadRecuperada !== null || paisRecuperado !== null) {
        nombreUsuario.textContent = nombreRecuperado;
        apellidosUsuario.textContent = apellidosRecuperados;
        ciudadUsuario.textContent = ciudadRecuperada;
        paisUsuario.textContent = paisRecuperado;

        // Limpiar el localStorage
        localStorage.removeItem('nombre');
        localStorage.removeItem('apellidos');
        localStorage.removeItem('ciudad');
        localStorage.removeItem('pais');
    }
}

const listaEstadoProyectos = document.querySelectorAll(".estado-proyecto");

listaEstadoProyectos.forEach( function(elemento){
    let contenido = elemento.textContent;
    if (contenido.includes("Activo")) {
        elemento.style.color = "black";
    }
    if (contenido.includes("Abandonado")) {
        elemento.style.color = "red";
    }
    if (contenido.includes("Completado")) {
        elemento.style.color = "green";
    }

});

console.log("SCripts main-proyectos ok");

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

console.log('scripts contacto ok');

//! Constantes con los elementos input y los párrafos de error correspondientes

const bloquePrincipal = document.querySelector('.contenedor-principal-contacto');
const bloquePrincipalTitulo = document.querySelector('.contenedor-formulario__titulo');
const mensajeEnvioExitoso = document.querySelector('.mensaje-enviado');
const correo = document.getElementById("correo");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const motivo = document.getElementById("motivo");
const formulario = document.querySelector("form"); // Agregamos la referencia al formulario


const correoError = document.getElementById("error-correo");
const nombreError = document.getElementById("nombre-error");
const motivoError = document.getElementById("error-motivo");

let correoValidado = false;
let nombreValidado = false;
let mensajeValidado = false;
let motivoValidado = false;

document.addEventListener('DOMContentLoaded', function () {

    //!Validacion contacto
    correo.addEventListener("blur", validarCorreo);
    nombre.addEventListener("blur", validarNombre);
    mensaje.addEventListener("blur", validarMensaje);
    motivo.addEventListener("blur", validarMotivo);

    // Agregamos el evento submit al formulario
    formulario.addEventListener("submit", function (event) {
        // Cancelamos el envío del formulario por defecto para manejar la validación manualmente
        event.preventDefault();
        // Aquí puedes realizar tu lógica de validación antes de enviar el formulario
        validarFormulario();
    });

    //! Funciones de validacion
    function validarCorreo() {
        var comprobarCorreo = correo.value;
        // Expresión regular para validar un correo electrónico
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (regexCorreo.test(comprobarCorreo)) {
            console.log('Correo electrónico válido');
            correoError.textContent = "";
            correoValidado = true;
        } else {
            correoError.textContent = "Correo invalido";
            correoValidado = false;
        }
    }

    function validarNombre() {
        var comprobarNombre = nombre.value;
        if (comprobarNombre.length <= 1) {
            nombreError.textContent = "Nombre invalido. 2 caracteres mínimo";
            nombreValidado = false;
        } else {
            nombreError.textContent = "";
            nombreValidado = true;
        }
    }

    function validarMensaje() {
        var comprobarMensaje = mensaje.value;
        if (comprobarMensaje.length <= 9) {
            mensaje.setAttribute('placeholder', 'Introduzca, mínimo, 10 caracteres en su mensaje.');
        } else {
            mensajeValidado = true;
        }
    }

    function validarMotivo() {
        var comprobarMotivo = motivo.value;
        if (comprobarMotivo === "seleccionar") {
            motivoError.textContent = "Selecciona un motivo válido";
            motivoValidado = false;
        } else {
            motivoError.textContent = "";
            motivoValidado = true;
        }
    }

    function validarFormulario() {
        // Aquí puedes agregar lógica adicional para validar el formulario antes de enviarlo
        if (correoValidado && nombreValidado && mensajeValidado&& motivoValidado){
            formulario.style.display = 'none';
            bloquePrincipalTitulo.style.display = 'none';
            bloquePrincipal.style.height = '150px';
            mensajeEnvioExitoso.style.display = 'flex';
        }
    
        setTimeout(function() {
            formulario.submit();
        }, 6000);
        
    }

});
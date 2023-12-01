console.log("scripts login ok");

//! Cambio de ventanas según la opcion elegida - login
const contenedorLogin = document.querySelector(".contenedor-principal-login");
const contenedorRecuperaContrasenia = document.querySelector(".contenedor-secundario-contrasenia");
const contenedorCrearCuenta = document.querySelector(".contenedor-secundario-crear-cuenta")
const contenedorCuentaCreadaExito = document.querySelector(".contenedor-secundario-cuenta-creada")

function recuperarContrasenia(){
    contenedorLogin.style.display = "none";
    contenedorRecuperaContrasenia.style.display = "flex";
    document.title = "ArtistGo - Recuperar contraseña";
}

function crearCuenta() {
    contenedorLogin.style.display = "none";
    contenedorCrearCuenta.style.display = "flex";
    document.title = "ArtistGo - Crear cuenta";
}

function cuentaCreadaExito() {
    if (crearCuentaCorreoValidado && crearCuentaUsuarioValidado && crearCuentaPasswordValidada && crearCuentaCheckValidado){
        contenedorCrearCuenta.style.display = "none";
        contenedorCuentaCreadaExito.style.display = "flex";
        document.title = "ArtistGo - Cuenta creada con exito";
    }
}


//! Validacion - login
const arrayCuentas = [
    { cuenta: "juan", contrasenia: "1234" },
    { cuenta: "luis", contrasenia: "abcd"},
    { cuenta: "ArtistaDecente", contrasenia: "1234"}
];

let colorFallo = "red"

function iniciarSesion() {
    let nombreUsuario = document.getElementById("usuario").value;
    let contraseniaUsuario = document.getElementById("contrasenia").value;
    let robotCheck = document.getElementById("check_captcha");
    // Boolean para indicar si se encontró la cuenta
    let cuentaEncontrada = false;
    
    // Recorremos el arrayCuentas y comparamos las credenciales y el checkbox robot
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].cuenta === nombreUsuario && arrayCuentas[i].contrasenia === contraseniaUsuario && robotCheck.checked) {
            // Credenciales válidasy check mardado, pasamos a la página del usuario
            console.log("OK validado");
            cuentaEncontrada = true;
            window.location.href = "../html/perfil_usuario.html";
        }
    }

    // Si no se encontró la cuenta, muestra un mensaje de error
    if (!cuentaEncontrada) {
        let falloLogin = document.getElementById("fallo-mensaje");
        falloLogin.textContent = "Usuario o contraseña incorrecta";
        falloLogin.style.display = "inline";
        falloLogin.style.color = colorFallo;
        
    }

    console.log(contraseniaUsuario, nombreUsuario);
}

//!Validacion - correo recuperacion
const contenedorInternoContrasenia = document.querySelector('.contenedor-contrasenia');
const contenedorInternoContraseniaTitulo = document.querySelector('.contenedor-contrasenia__titulo');
const inputRecuperarContrasenia = document.getElementById('recuperar-contrasenia');
const mensajeCorreoError = document.getElementById('correo-error');
const botonRecuperarContrasenia = document.querySelector('.contenedor-contrasenia__boton-recuperar');
const bloqueInputRecuperarContrasenia = document.querySelector('.contenedor-contrasenia__contenedor-recuperar');
let correoRecuperacionValidado = false;

inputRecuperarContrasenia.addEventListener("blur", validarCorreo);
botonRecuperarContrasenia.addEventListener("click", recuperacionCorreo);
mensajeCorreoError.style.color = 'red';

function validarCorreo() {
    var comprobarCorreo = inputRecuperarContrasenia.value;
    // Expresión regular para validar un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regexCorreo.test(comprobarCorreo)) {
        mensajeCorreoError.textContent = "";
        correoRecuperacionValidado = true;
    } else {
        mensajeCorreoError.textContent = "Correo invalido";
        correoRecuperacionValidado = false;
    }
}

function recuperacionCorreo() {
    if(correoRecuperacionValidado){
        bloqueInputRecuperarContrasenia.style.display = 'none';
        botonRecuperarContrasenia.style.display = 'none';
        contenedorInternoContraseniaTitulo.style.display = 'none';
        contenedorRecuperaContrasenia.style.height = '100px';

        let resultadoRecuperacionCorreo = document.createElement("h3");
        resultadoRecuperacionCorreo.textContent = "Enviado un correo para realizar la recuperación de contraseña.";
        contenedorInternoContrasenia.appendChild(resultadoRecuperacionCorreo)

        setTimeout(function() {
            location.reload()
        }, 6000);

    } else {
        mensajeCorreoError.textContent = "Correo no introducido/valido";
    }
}


//!Validacion - crear cuenta
const crearCuentaUsuario = document.getElementById('crear-usuario');
const crearCuentaEmail = document.getElementById('crear-email');
const crearCuentaPassword_uno = document.getElementById('crear-contrasenia-uno');
const crearCuentaPassword_dos = document.getElementById('crear-contrasenia-dos');
const crearCuentaCheckTerminos = document.getElementById('crear-check_terminos');


const errorCrearCuentaUsuario = document.getElementById('error-crear-cuenta__nombre');
const errorCrearCuentaEmail = document.getElementById('error-crear-cuenta__email');
const errorCrearCuentaPassword = document.getElementById('error-crear-cuenta__contrasenia');

crearCuentaEmail.addEventListener("blur", crearCuentaValidarCorreo);
crearCuentaUsuario.addEventListener("blur", crearCuentaValidarNombre);
crearCuentaPassword_dos.addEventListener("blur", crearCuentaComparaPassword);
crearCuentaCheckTerminos.addEventListener("blur", crearCuentaCompruebaCheck);

let crearCuentaCorreoValidado = false;
let crearCuentaUsuarioValidado = false;
let crearCuentaPasswordValidada = false;
let crearCuentaCheckValidado = false;

function crearCuentaValidarCorreo() {
    var comprobarCorreo = crearCuentaEmail.value;
    // Expresión regular para validar un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regexCorreo.test(comprobarCorreo)) {
        errorCrearCuentaEmail.style.display = "none";
        crearCuentaCorreoValidado = true;
    } else {
        errorCrearCuentaEmail.style.display = "flex";
        crearCuentaCorreoValidado = false;
    }
}

function crearCuentaValidarNombre() {
    var comprobarNombre = crearCuentaUsuario.value;
    if (comprobarNombre.length <= 1) {
        errorCrearCuentaUsuario.style.display = "flex";
        crearCuentaUsuarioValidado = false;
    } else {
        errorCrearCuentaUsuario.style.display = "none";
        crearCuentaUsuarioValidado = true;
    }
}

function crearCuentaComparaPassword() {
    var contrasenia_uno = crearCuentaPassword_uno.value;
    var contrasenia_dos = crearCuentaPassword_dos.value;
    if (contrasenia_uno === contrasenia_dos){
        errorCrearCuentaPassword.style.display = "none";
        crearCuentaPasswordValidada = true;
    } else {
        errorCrearCuentaPassword.style.display = "flex";
        crearCuentaPasswordValidada = false;
    }
}

function crearCuentaCompruebaCheck() {
    if (crearCuentaCheckTerminos.checked){
        crearCuentaCheckValidado = true;
    } else {
        crearCuentaCheckValidado = false;
    }
}
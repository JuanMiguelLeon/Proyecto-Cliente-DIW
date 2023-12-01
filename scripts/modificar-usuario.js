console.log("Scripts modificar usuario ok");

//! Constantes con los elementos input y los párrafos de error correspondientes
//! Bloque superior del formulario
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const ciudad = document.getElementById("ciudad");
const pais = document.getElementById("pais");

const nombreError = document.getElementById("nombre__error");
const apellidosError = document.getElementById("apellidos__error");
const ciudadError = document.getElementById("ciudad__error");
const paisError = document.getElementById("pais__error");

//! Bloque inferior del formulario
const numeroTarjeta = document.getElementById("numero-tarjeta");
const pagoFecha = document.getElementById("fecha-tarjeta");



let nombreValidado = false;
let apellidosValidados = false;
let ciudadValidada = false;
let paisValidado = false;


document.addEventListener('DOMContentLoaded', function () {


    //! Validacion formulario superior
    nombre.addEventListener("blur", validarNombre);
    apellidos.addEventListener("blur", validarApellidos);
    ciudad.addEventListener("blur", validarCiudad);
    pais.addEventListener("blur", validarPais);

    function validarNombre() {
        var comprobarNombre = nombre.value;
        if (comprobarNombre.length <= 1) {
            nombreError.textContent = 'Por favor, introduzca un nombre. Mínimo dos letras.';
            nombreError.style.display = 'flex';
        } else {
            nombreError.textContent = "";
            nombreValidado = true;
        }
    }

    function validarApellidos() {
        var comprobarApellidos = apellidos.value;
        if (comprobarApellidos.length <= 1) {
            apellidosError.textContent = 'Por favor, introduzca un apellido. Mínimo de dos letras.';
            apellidosError.style.display = 'flex';
        } else {
            apellidosError.textContent = "";
            apellidosValidados = true;
        }
    }

    function validarCiudad() {
        var comprobarCiudad = ciudad.value;
        if (comprobarCiudad.length <= 2) {
            ciudadError.textContent = 'Por favor, introduzca una ciudad. Mínimo de tres letras.';
            ciudadError.style.display = 'flex';
        } else {
            ciudadError.textContent = "";
            ciudadValidada = true;
        }
    }

    function validarPais() {
        var comprobarPais = pais.value;
        if (comprobarPais === "pais") {
            paisError.textContent = 'Por favor, eliga un pais.';
            paisError.style.display = 'flex';
        } else {
            paisError.textContent = "";
            paisValidado = true;
        }
    }


    //! Input fecha mínima al día actual
    const fechaActual = new Date().toLocaleDateString('en-CA');
    pagoFecha.setAttribute("min", fechaActual);

    //! Separación de números de la tarjeta con guiones
    numeroTarjeta.addEventListener("input", function (evento) {
        const numerosIntroducidos = evento.target;
        // Elimina cualquier guion existente para evitar duplicados
        let valorSinGuiones = numerosIntroducidos.value.replace(/-/g, '');
        // Añade guiones después de cada grupo de 4 dígitos
        let valorFormateado = valorSinGuiones.replace(/\d{4}(?=\d)/g, '$&-');
        // Limita la longitud total a 16 caracteres (sin contar guiones)
        let valorFinal = valorFormateado.slice(0, 19);

        numerosIntroducidos.value = valorFinal;
    });

    //! Lógica captura de imagen
    // Obtén referencias a elementos relevantes
    const contenedorImagen = document.querySelector('.formulario-contenedor-imagen');
    const inputImagen = document.getElementById('input-imagen');
    const imagenPrevia = document.getElementById('imagen-previa');

    // Agrega eventos para manejar la carga de la imagen
    contenedorImagen.addEventListener('dragover', handleDragOver);
    contenedorImagen.addEventListener('drop', handleDrop);
    inputImagen.addEventListener('change', handleFileSelect);

    // Función para prevenir el comportamiento predeterminado del navegador al arrastrar sobre el área
    function handleDragOver(evento) {
        evento.preventDefault();
    }

    // Función para manejar la imagen soltada en el área
    function handleDrop(evento) {
        evento.preventDefault();

        const archivo = evento.dataTransfer.files[0];
        cargarYMostrarImagen(archivo);
    }

    // Función para manejar la selección de archivos desde el explorador
    function handleFileSelect(evento) {
        const archivo = evento.target.files[0];
        cargarYMostrarImagen(archivo);
    }

    // Función para cargar y mostrar la imagen
    function cargarYMostrarImagen(archivo) {
        if (archivo) {
            const reader = new FileReader();

            reader.onload = function (evento) {
                // Muestra la imagen previa
                imagenPrevia.src = evento.target.result;
                imagenPrevia.style.display = 'flex';
            };

            let imagenLabel = document.querySelector('.formulario-contenedor-imagen label');
            let imagenInput = document.querySelector('.formulario-contenedor-imagen input');

            imagenInput.style.display = 'none';
            imagenPrevia.addEventListener('click', function () {
                // Simula el clic en el input de imagen para abrir el cuadro de diálogo del explorador de archivos
                inputImagen.click();
            });
            imagenLabel.style.bottom = '0px';
            imagenLabel.textContent = 'Haga clic en la imagen para cambiarla';

            // Lee el contenido de la imagen como una URL de datos
            reader.readAsDataURL(archivo);
        }
        
    }

});


    //! Guardar cambios del formulario datos de usuario
    function guardarCambios() {
        if (nombreValidado && apellidosValidados && ciudadValidada && paisValidado){
            let nombreGuardado = nombre.value;
            let apellidosGuardados = apellidos.value;
            let ciudadGuardada = ciudad.value;
            let paisGuardado = pais.value;
    
            // Almacenar datos en localStorage
            localStorage.setItem('nombre', nombreGuardado);
            localStorage.setItem('apellidos', apellidosGuardados);
            localStorage.setItem('ciudad', ciudadGuardada);
            localStorage.setItem('pais', paisGuardado);
    
            // Redirigir a la página de usuario
            window.location.href = './perfil_usuario.html';
        } else {
            if(!nombreValidado){
                nombreError.textContent = 'Por favor, introduzca un nombre. Mínimo dos letras.';
                nombreError.style.display = 'flex';
            }
            if(!apellidosValidados){
                apellidosError.textContent = 'Por favor, introduzca un nombre. Mínimo dos letras.';
                apellidosError.style.display = 'flex';
            }
            if(!ciudadValidada){
                ciudadError.textContent = 'Por favor, introduzca un nombre. Mínimo dos letras.';
                ciudadError.style.display = 'flex';
            }
            if(!paisValidado){
                paisError.textContent = 'Por favor, introduzca un nombre. Mínimo dos letras.';
                paisError.style.display = 'flex';
            }
        }
        
    }
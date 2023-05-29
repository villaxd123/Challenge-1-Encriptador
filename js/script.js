// Función que encripta el texto.
function encriptarTexto(texto) {
    // Se cambió el método de encriptado mediante RegExp.
    let regTextEncript = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return regTextEncript;
}
// Función que desencripta el texto.
function desencriptarTexto(texto) {
    // Se cambió el método de desencriptado mediante RegExp
    let regTextDecript = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return regTextDecript;
}
// Función para comprobar que el texto no tenga mayúsculas, números o caracteres especiales.
function comprobarTexto(texto) {
    /*
    RegExp -> comprueba el texto con el patrón ingresado entre los paréntesis.
    [a-z] -> rango de letras permitidas (sólo minúsuclas).
    \s -> comprueba espacios como válidos.
    ^ y $ -> son aserciones que comprueban valores devolviendo un boolean. ^ comprueba al inicio y $ al final.
    + -> cuantificador que comprueba todas las incidencias (1 o más veces el elemento anterior -> x+).
    */
    const pattern = new RegExp(/^[a-z\s]+$/g);
    // test() -> comprueba la coincidencia y devuelve de valor true o false.
    return pattern.test(texto.toLowerCase());
}
// Funcion para ocultar la imagen de espera.
function ocultarImagen() {
    document.getElementById("second").style.backgroundImage  = "none";
}
// Función llamada al precionar el botón de "Encriptar".
function textoEntrada() {
    let texto = document.getElementById("first").value;
    let salida = document.getElementById("second");
    ocultarImagen();

    if (texto.trim() === "") {
        alert("No ingresó ningún texto para encriptar.");
    }
    else {
        let comprobado = comprobarTexto(texto);
        if (comprobado) {
            let resultadoTexto = encriptarTexto(texto.toLowerCase());
            salida.value = resultadoTexto;
            document.getElementById("first").value = "";
        } else {
            alert("No debe ingresar números o caracteres especiales.");
        }
    }
}
// Función llamada al precionar el botón de "Desencriptar".
function textoSalida() {
    let texto = document.getElementById("first").value;
    let salida = document.getElementById("second");
    ocultarImagen();

    if (texto.trim() === "") {
        alert("No ingresó ningún texto para desencriptar.");
    } else {
        let comprobado = comprobarTexto(texto);
        if (comprobado) {
            let resultadoTexto = desencriptarTexto(texto.toLowerCase());
            salida.value = resultadoTexto;
            document.getElementById("first").value = "";
        } else {
            alert("No debe ingresar números o caracteres especiales.");
        }
    }
}
// Función llamada al precionar el botón de "Copiar".
function copiarTexto() {
    let texto = document.getElementById("second").value;

    // Copiar texto al portapapeles.
    navigator.clipboard
        .writeText(texto)
        .then(() => {
            if (texto.trim() === "") {
                alert("No se encontró algún texto para copiar.");
            } else {
                document.getElementById("first").focus();
                document.getElementById("second").value = "";
            }
        })
        .catch((error) => {
            alert("Error al copiar el texto:", error);
        });
}

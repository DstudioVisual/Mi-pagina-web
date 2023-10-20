
// Espera a que se cargue el documento
document.addEventListener("DOMContentLoaded", function () {
    // Oculta el splash después de 3 segundos (3000 milisegundos)

    setTimeout(function () {
        document.getElementById("splash-container").style.display = "none";
        document.body.style.overflow = "visible"; // Muestra el contenido completo
    }, 5000);
});



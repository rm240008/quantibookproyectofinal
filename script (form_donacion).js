/* ============================================
   Formulario de donacion - Quantibook
   ============================================ */

const formulario = document.querySelector(".formulario-donacion");

formulario.addEventListener("submit", function (evento) {
    // Evitamos que el formulario recargue o cambie de pagina solo.
    // (Los campos "required" ya obligan a llenar todo antes de llegar aqui.)
    evento.preventDefault();

    mostrarMensaje();

    // Despues de 2.5 segundos regresamos al inicio
    setTimeout(function () {
        window.location.href = "index.html";
    }, 2500);
});


// Crea y muestra la ventana de confirmacion
function mostrarMensaje() {

    // Fondo oscuro que cubre toda la pantalla
    const fondo = document.createElement("div");
    fondo.style.position = "fixed";
    fondo.style.top = "0";
    fondo.style.left = "0";
    fondo.style.width = "100%";
    fondo.style.height = "100%";
    fondo.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    fondo.style.display = "flex";
    fondo.style.alignItems = "center";
    fondo.style.justifyContent = "center";
    fondo.style.zIndex = "1000";

    // Caja blanca con el mensaje
    const caja = document.createElement("div");
    caja.style.backgroundColor = "white";
    caja.style.borderRadius = "12px";
    caja.style.padding = "40px 30px";
    caja.style.textAlign = "center";
    caja.style.width = "360px";
    caja.style.maxWidth = "90%";
    caja.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    caja.style.fontFamily = "Arial, sans-serif";

    caja.innerHTML =
        '<div style="font-size:54px; color:#2e9e5b; line-height:1; margin-bottom:15px;">&#10004;</div>' +
        '<h2 style="color:#8B2635; font-size:24px; margin-bottom:10px;">Solicitud enviada</h2>' +
        '<p style="color:#666; font-size:15px; margin-bottom:20px;">Gracias por tu donación. Pasaremos a recoger tu libro a domicilio. Te llevaremos al inicio...</p>' +
        '<a href="index.html" style="display:inline-block; background-color:#8B2635; color:white; text-decoration:none; padding:10px 22px; border-radius:6px; font-size:14px;">Ir al inicio ahora</a>';

    fondo.appendChild(caja);
    document.body.appendChild(fondo);
}

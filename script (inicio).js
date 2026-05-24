/* ============================================
   Parallax Quantibook - pagina de inicio
   ============================================ */


const capas = document.querySelectorAll(".parallax .capa");
function moverParallax() {
    const scroll = window.scrollY;

    capas.forEach(function (capa) {
        // Cada capa tiene su velocidad en el atributo data-velocidad
        const velocidad = parseFloat(capa.dataset.velocidad);
        capa.style.transform = "translateY(" + (scroll * velocidad) + "px)";
    });
}

let enEspera = false;

window.addEventListener("scroll", function () {
    if (!enEspera) {
        window.requestAnimationFrame(function () {
            moverParallax();
            enEspera = false;
        });
        enEspera = true;
    }
});

moverParallax();

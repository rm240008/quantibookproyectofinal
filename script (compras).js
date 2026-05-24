/* ============================================
   Pagina de Compras - Quantibook
   ============================================ */

// Elementos del menu
const abrirMenu   = document.getElementById("abrirMenu");
const cerrarMenu  = document.getElementById("cerrarMenu");
const panel       = document.getElementById("panelCategorias");
const overlay     = document.getElementById("overlayMenu");

// Elementos de los productos y la busqueda
const buscador    = document.querySelector(".buscador input");
const productos   = document.querySelectorAll(".producto");
const botonesCat  = document.querySelectorAll(".panel-categorias .cat");

// Categoria que esta seleccionada en este momento
let categoriaActual = "todos";


/* ---------- Abrir y cerrar el menu ---------- */
function abrir() {
    panel.classList.add("abierto");
    overlay.classList.add("abierto");
}

function cerrar() {
    panel.classList.remove("abierto");
    overlay.classList.remove("abierto");
}

abrirMenu.addEventListener("click", abrir);
cerrarMenu.addEventListener("click", cerrar);
overlay.addEventListener("click", cerrar);


/* ---------- Filtrado de libros ---------- */
// Muestra u oculta cada libro segun la categoria elegida
// y segun lo que se escriba en el buscador.
function aplicarFiltros() {
    const texto = buscador.value.toLowerCase().trim();

    productos.forEach(function (producto) {
        const categoria = producto.dataset.categoria;
        const nombre = producto.querySelector(".nombre").textContent.toLowerCase();

        const coincideCategoria = (categoriaActual === "todos" || categoria === categoriaActual);
        const coincideTexto = nombre.indexOf(texto) !== -1;

        // Si cumple ambas condiciones se muestra, si no se oculta
        if (coincideCategoria && coincideTexto) {
            producto.style.display = "";
        } else {
            producto.style.display = "none";
        }
    });
}


/* ---------- Click en una categoria ---------- */
botonesCat.forEach(function (boton) {
    boton.addEventListener("click", function () {
        categoriaActual = boton.dataset.categoria;

        // Marcar visualmente la categoria activa
        botonesCat.forEach(function (b) {
            b.classList.remove("activa");
        });
        boton.classList.add("activa");

        aplicarFiltros();
        cerrar(); // se cierra el menu despues de elegir
    });
});


/* ---------- Buscar mientras se escribe ---------- */
buscador.addEventListener("input", aplicarFiltros);

// Función: guarda el nombre y cambia de página
function guardar() {
    const nombre = document.getElementById("nombre").value; localStorage.setItem("nombre", nombre);
    const ciudad = document.getElementById("ciudad").value; localStorage.setItem("ciudad", ciudad); // guarda en la bodega
    while (nombre === "" || ciudad === "") {
        alert("Por favor, ingrese un nombre y una ciudad.");
        return; // sale de la función si no hay datos
    }
    window.location.href = "pagina2.html"; // cambia de página
}
// Evento: al hacer clic en el botón, se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);
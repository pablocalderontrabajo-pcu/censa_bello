// Mostrar mensaje al cargar la página principal
function mostrarAlerta() {
    alert("Bienvenido al lado secreto... ¿estás listo?");
}

// Mostrar fecha y hora en tiempo real
function actualizarFechaHora() {
    const fechaHora = document.getElementById("fecha-hora");
    if (fechaHora) {
        const ahora = new Date();
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        fechaHora.textContent = ahora.toLocaleDateString('es-ES', opciones);
    }
}
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();

// Cambiar color de fondo con tonos oscuros
function cambiarFondo() {
    const coloresOscuros = ["#0d0d0d", "#1a1a1a", "#141414", "#1f1f1f", "#262626"];
    const colorActual = document.body.style.backgroundColor;
    let nuevoColor = coloresOscuros[Math.floor(Math.random() * coloresOscuros.length)];
    while (nuevoColor === colorActual) {
        nuevoColor = coloresOscuros[Math.floor(Math.random() * coloresOscuros.length)];
    }
    document.body.style.backgroundColor = nuevoColor;
}

// Mostrar/ocultar beneficios con animación
function toggleBeneficios() {
    const lista = document.getElementById("lista-beneficios");
    if (lista) {
        if (lista.style.display === "none" || lista.style.display === "") {
            lista.style.display = "block";
            lista.style.opacity = 0;
            let op = 0;
            const fadeIn = setInterval(() => {
                if (op >= 1) clearInterval(fadeIn);
                lista.style.opacity = op;
                op += 0.05;
            }, 30);
        } else {
            let op = 1;
            const fadeOut = setInterval(() => {
                if (op <= 0) {
                    lista.style.display = "none";
                    clearInterval(fadeOut);
                }
                lista.style.opacity = op;
                op -= 0.05;
            }, 30);
        }
    }
}

// torneoLib.js
export const TorneoManager = {
    // Configura los datos del torneo
    data: {
        rondas: ["Octavos", "Cuartos", "Semifinal", "Final"],
        equipos: [
            { id: 1, nombre: "El Salvador", bandera: "sv.png" },
            { id: 2, nombre: "Honduras", bandera: "hn.png" }
        ]
    },

    // Función para renderizar el bracket en el HTML
    renderizarBracket(contenedorId) {
        const contenedor = document.getElementById(contenedorId);
        // Aquí usas un bucle para dibujar cada ronda
        this.data.rondas.forEach(ronda => {
            const divRonda = document.createElement('div');
            divRonda.className = 'columna-ronda';
            divRonda.innerHTML = `<h4>${ronda}</h4>`;
            contenedor.appendChild(divRonda);
        });
    }
};
// Dentro de TorneoManager
conectarTikFinity(url) {
    const socket = new WebSocket(url);
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'gift') {
            this.actualizarMarcador(data.team, data.amount);
        }
    };
}
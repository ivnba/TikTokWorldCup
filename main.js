// main.js - Dibuja el Torneo
const TorneoManager = {
    equipos: [
        { name: "El Salvador", flag: "el-salvador.png" },
        { name: "Honduras", flag: "honduras.png" },
        { name: "Panamá", flag: "panama.png" },
        // ... agrega los 16 equipos aquí con el nombre exacto de tus archivos PNG
    ],

    // Dibuja el bracket automáticamente
    init() {
        this.renderOctavos('oct-left', this.equipos.slice(0, 4));
        this.renderOctavos('oct-right', this.equipos.slice(4, 8));
        // Aquí agregarías la lógica para Cuartos y Semi luego
    },

    renderOctavos(containerId, listaEquipos) {
        const container = document.getElementById(containerId);
        listaEquipos.forEach(equipo => {
            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <img src="flags/${equipo.flag}" alt="${equipo.name}" onerror="this.src='flags/error.png'">
                <span>${equipo.name.toUpperCase()}</span>
            `;
            container.appendChild(card);
        });
    }
};

TorneoManager.init();
// app.js - Conexión Real
const socket = new WebSocket('ws://localhost:8080'); // Tu puerto de TikFinity

socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    
    // Si llega un regalo, actualizamos el contador
    if (msg.event === 'gift') {
        const team = msg.team; // Detecta si es equipo 1 o 2
        const puntos = msg.amount;
        
        // Actualiza el DOM (la pantalla)
        document.getElementById(`score-${team}`).innerText = puntos;
        
        // Efecto visual: animación de número subiendo
        document.getElementById(`score-${team}`).classList.add('pop-animation');
    }
};
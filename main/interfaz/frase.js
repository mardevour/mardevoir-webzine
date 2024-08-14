async function cargarFrases() {
    try {
        const response = await fetch('/frases.txt');
        const data = await response.text();
        const frases = data.split('\n').filter(frase => frase.trim() !== "");
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        document.getElementById('motd').textContent = fraseAleatoria;
    } catch (error) {
        console.error('Error al cargar las frases:', error);
    }
}

// llamar funcion al cargar pagina
window.onload = cargarFrases;
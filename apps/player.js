var imagenes = [
    "../assets/songs/01.png",
    "../assets/songs/02.png"
];
var links = [
    "https://www.youtube.com/watch?v=8-yzng_td24')",
    "https://www.youtube.com/watch?v=A8IEuHqLotw')"
]
var artistas= [
    "CANOA",
    "katkat"
];
var canciones = [
    "Agua de bien",
    "Kor4"
];
var textos = [
    '../textos/agua.txt',
    '../textos/kor4.txt'
];

var indiceActual = 0;

function actualizarReproductor() {
    document.getElementById('artist-name').innerHTML = `<span class="simbolo-fa">➫</span> ${canciones[indiceActual]}`;
    document.getElementById('song-title').innerHTML = `<span class="simbolo-fa">➫</span> ${artistas[indiceActual]}`;
    document.getElementById('np-cover').src = imagenes[indiceActual];

    cargarTexto(textos[indiceActual]).then(texto => {
        document.querySelector('.texto-contenido').innerHTML = texto;
    });
}

function playSong(song, artist, portada, letra) {
    event.stopPropagation();
    document.getElementById('song-title').innerHTML = `<span class="simbolo-fa">➫</span> ${song}`;
    document.getElementById('artist-name').innerHTML = `<span class="simbolo-fa">➫</span> ${artist}`;
    document.getElementById('np-cover').src = portada;

    cargarTexto(letra).then(texto => {
        document.querySelector('.texto-contenido').innerHTML = texto;
    });
    indiceActual = index;
}
function nextSong() {
    indiceActual = (indiceActual + 1) % canciones.length;
    actualizarReproductor();

}

function prevSong() {
    indiceActual = ajustarIndice(indiceActual - 1, canciones.length);
    actualizarReproductor();

}

function cargarTexto(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(texto => {
            return texto.replace(/\n/g, '<br>');
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
}

function abrirLink() {
    var url = links[indiceActual];
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
}

function ajustarIndice(indice, longitud) {
    return (indice + longitud) % longitud;
}
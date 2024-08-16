var imagenes = [
    "../assets/songs/00.png",
    "../assets/songs/01.png",
    "../assets/songs/02.png"
];
var links = [
    "https://www.youtube.com/watch?v=8-yzng_td24')",
    "https://www.youtube.com/watch?v=A8IEuHqLotw')",
    "https://soundcloud.com/user987598186/jvzic8hqg2sq"
]
var artistas= [
    "CANOA",
    "katkat",
    "hush"
];
var canciones = [
    "Agua de bien",
    "Kor4",
    "???"
];
var textos = [
    '../textos/agua.txt',
    '../textos/kor4.txt',
    '../textos/hush.txt'
];

var indiceActual = 0;

function actualizarReproductor() {
    document.getElementById('artist-name').innerHTML = `<span class="simbolo-fa">➫</span> ${canciones[indiceActual]}`;
    document.getElementById('song-title').innerHTML = `<span class="simbolo-fa">➫</span> ${artistas[indiceActual]}`;
    document.getElementById('np-cover').src = imagenes[indiceActual];

    cargarTexto(textos[indiceActual]).then(texto => {
        document.querySelector('.texto-contenido').innerHTML = texto;
    });
    console.log(indiceActual);
}

function playSong(song, artist, portada, letra, indice) {
    event.stopPropagation();
    document.getElementById('song-title').innerHTML = `<span class="simbolo-fa">➫</span> ${song}`;
    document.getElementById('artist-name').innerHTML = `<span class="simbolo-fa">➫</span> ${artist}`;
    document.getElementById('np-cover').src = portada;

    cargarTexto(letra).then(texto => {
        document.querySelector('.texto-contenido').innerHTML = texto;
    });
    indiceActual = indice;
    console.log(indiceActual);
}
function nextSong() {
    indiceActual = (indiceActual + 1) % canciones.length;
    actualizarReproductor();
    console.log(indiceActual);
}

function prevSong() {
    indiceActual = ajustarIndice(indiceActual - 1, canciones.length);
    actualizarReproductor();
    console.log(indiceActual);
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
    
    console.log(indiceActual);
}

function abrirLink() {
    var url = links[indiceActual];
    window.open(url, '_blank');
}

function ajustarIndice(indice, longitud) {
    return (indice + longitud) % longitud;
    console.log(indiceActual);
}
var imagenes = [
    "/main/assets/songs/01.png",
    "/main/assets/songs/02.png"
];
var indiceActual = 0;

function playSong() {
    event.stopPropagation();
    if (typeof imageUrl !== 'undefined' && imageUrl !== null) {
        var npCover = document.getElementById('np-cover');
        if (npCover) {
            npCover.src = imageUrl; // Actualiza la fuente de la imagen
        }
    } else {
        console.error('La URL de la imagen no está definida.');
    }

}
function nextSong() {
    indiceActual = (indiceActual + 1) % imagenes.length; // Avanza al siguiente índice y vuelve al inicio si llega al final
    document.getElementById('myImage').src = imagenes[indiceActual];
    console.log('siguiente canción');
}

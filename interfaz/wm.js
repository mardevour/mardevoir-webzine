const minWidth = 200;
const minHeight = 150;
const header = document.querySelector('.window-header');
const windowElement = document.querySelector('.window');
const resizer = document.querySelector('.resizer');
let isResizing = false;
let isDragging = false;
let lastX, lastY;

header.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    document.addEventListener('mousemove', moveWindow);
    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.removeEventListener('mousemove', moveWindow);
    });
});

function moveWindow(e) {
    if (!isDragging) return;
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    const rect = windowElement.getBoundingClientRect();
    windowElement.style.left = rect.left + deltaX + 'px';
    windowElement.style.top = rect.top + deltaY + 'px';
    lastX = e.clientX;
    lastY = e.clientY;
}

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    lastX = e.clientX;
    lastY = e.clientY;
    document.addEventListener('mousemove', resizeWindow);
    document.addEventListener('mouseup', () => {
        isResizing = false;
        document.removeEventListener('mousemove', resizeWindow);
    });
});

function resizeWindow(e) {
    if (!isResizing) return;
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    const rect = windowElement.getBoundingClientRect();
    
    const newWidth = Math.max(minWidth, rect.width + deltaX);
    const newHeight = Math.max(minHeight, rect.height + deltaY);

    windowElement.style.width = newWidth + 'px';
    windowElement.style.height = newHeight + 'px';
    
    lastX = e.clientX;
    lastY = e.clientY;
}

// Función para cambiar la página del iframe
function cargarPagina(pagina) {
    var iframe = document.getElementById('iframeVentana');
    var header = document.getElementById('windowHeader');

    // Cambiar la URL del iframe
    iframe.src = pagina;

    // Actualizar el título del encabezado cuando el contenido del iframe cambia
    iframe.onload = function() {
        try {
            var title = iframe.contentDocument.title;
            header.textContent = title;
        } catch (e) {
            console.error("No se puede acceder al contenido del iFrame", e);
        }
    };
}

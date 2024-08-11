// cargar menus.html
function loadMenus() {
    fetch('menus.html')
        .then(response => response.text())
        .then(data => {
            console.log('Menus loaded:', data);
            document.getElementById('taskbar-menus').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar los menús:', error));
}

// ocultar los menús al hacer clic en los botones
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const isVisible = menu.style.display === 'block';

    // ocultar todos los menús
    const menus = document.querySelectorAll('.taskbar-menu');
    menus.forEach(m => m.style.display = 'none');

    // mostrar el menú seleccionado si no estaba visible
    if (!isVisible) {
        menu.style.display = 'block';
        const rect = button.getBoundingClientRect();
        menu.style.top = `${rect.bottom}px`;
        menu.style.left = `${rect.left}px`;
    }
}

// ocultar menús si se hace clic fuera
document.addEventListener('click', function(event) {
    if (!event.target.closest('.taskbar-buttons') && !event.target.closest('.taskbar-menu')) {
        const menus = document.querySelectorAll('.taskbar-menu');
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// cargar los menús al cargar la página
window.onload = loadMenus;

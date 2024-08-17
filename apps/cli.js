document.getElementById('commandInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const commandInput = document.getElementById('commandInput');
        const outputDiv = document.getElementById('output');
        const command = commandInput.value.trim();

        commandInput.value = '';

        handleCommand(command, outputDiv);
    }
});

// auto ejecutar comando al cargar cli
document.addEventListener('DOMContentLoaded', function() {
    const initialCommand = 'hola';
    handleCommand(initialCommand, document.getElementById('output'));
});

function scrollOutputToBottom(outputDiv) {
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function handleCommand(command, outputDiv) {
    const response = document.createElement('div');
    
    switch (command.toLowerCase()) {
        case 'hola':
            fetch('cli-outputs/hola.txt')
                .then(response => response.text())
                .then(data => {
                    const fileContent = document.createElement('div');
                    fileContent.textContent = data;
                    outputDiv.appendChild(fileContent);
                    scrollOutputToBottom(outputDiv);
                })
                .catch(error => {
                    const errorMessage = document.createElement('div');
                    errorMessage.textContent = 'Error al leer el archivo: ' + error;
                    outputDiv.appendChild(errorMessage);
                });
            break;
        case 'miau':
            fetch('cli-outputs/miau.txt')
                .then(response => response.text())
                .then(data => {
                    const fileContent = document.createElement('div');
                    fileContent.textContent = data;
                    outputDiv.appendChild(fileContent);
                    scrollOutputToBottom(outputDiv);
                })
                .catch(error => {
                    const errorMessage = document.createElement('div');
                    errorMessage.textContent = 'Error al leer el archivo: ' + error;
                    outputDiv.appendChild(errorMessage);
                });
            break;
        case 'ayuda':
            fetch('cli-outputs/ayuda.txt')
                .then(response => response.text())
                .then(data => {
                    const fileContent = document.createElement('div');
                    fileContent.textContent = data;
                    outputDiv.appendChild(fileContent);
                    scrollOutputToBottom(outputDiv);
                })
                .catch(error => {
                    const errorMessage = document.createElement('div');
                    errorMessage.textContent = 'Error al leer el archivo: ' + error;
                    outputDiv.appendChild(errorMessage);
                });
            break;
        case 'neofetch':
            fetch('cli-outputs/neofetch.txt')
                .then(response => response.text())
                .then(data => {
                    const fileContent = document.createElement('div');
                    fileContent.textContent = data;
                    outputDiv.appendChild(fileContent);
                    scrollOutputToBottom(outputDiv);
                })
                .catch(error => {
                    const errorMessage = document.createElement('div');
                    errorMessage.textContent = 'Error al leer el archivo: ' + error;
                    outputDiv.appendChild(errorMessage);
                });
            break;
        case 'hora':
            response.textContent = `> hora: ${new Date().toLocaleTimeString()}`;
            break;
        case 'numero aleatorio':
            response.textContent = `> numero: 42`;
            break;
        case 'flip':
            response.textContent = `> (╯°□°）╯︵ ┻━┻`;
            break;
        case 'unflip':
            response.textContent = `> ┬─┬ ノ( ゜-゜ノ)`;
            break;
        case 'rm -fr /':
            response.textContent = `> no quieres hacer eso...`;
            break;
        case 'rm -fr / --no-preserve-root':
            response.textContent = `> no quieres hacer eso...`;
            break;
        case 'hellfire poncho':
            const url = 'https://juegosasados.itch.io/hellfire-poncho';
            window.open(url, '_blank');
            response.textContent = `> abriendo en pestaña nueva: ${url}`;
            outputDiv.appendChild(response);
            break;
        case 'clear':
            outputDiv.innerHTML = '';
            return;        
        default:
            response.textContent = `> comando no reconocido: ${command}`;
            break;
    }
    
    // mostrar output
    const commandText = document.createElement('div');
    const prefixSpan = document.createElement('span');
    prefixSpan.className = 'prompt';
    prefixSpan.textContent = 'mardeavour@web: > ';
    
    // Crear el comando ingresado
    const commandSpan = document.createElement('span');
    commandSpan.className = 'prompt-command';
    commandSpan.textContent = command;
    
    commandText.appendChild(prefixSpan);
    commandText.appendChild(commandSpan);

    outputDiv.appendChild(commandText);
    outputDiv.appendChild(response);

    // desplazar hacia abajo
    outputDiv.scrollTop = outputDiv.scrollHeight;
    scrollOutputToBottom(outputDiv);
}

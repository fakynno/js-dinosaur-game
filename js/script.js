const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log('pressionou a tecla espaço');
    }
}

document.addEventListener('keyup', handleKeyUp);
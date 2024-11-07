// Mostrar una sección
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar el rompecabezas
function showPuzzle() {
    document.getElementById('puzzle-container').style.display = 'block';
}

// Función de drag (arrastrar)
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Función para verificar el rompecabezas
function checkPuzzle() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    let solved = true;
    
    // Verificar si las piezas están en su lugar correcto
    pieces.forEach(piece => {
        const piecePosition = piece.getBoundingClientRect();
        const puzzleAreaPosition = document.getElementById('puzzle-area').getBoundingClientRect();
        
        // Comprobamos si la pieza está dentro del área del rompecabezas
        if (
            piecePosition.top < puzzleAreaPosition.top ||
            piecePosition.left < puzzleAreaPosition.left ||
            piecePosition.bottom > puzzleAreaPosition.bottom ||
            piecePosition.right > puzzleAreaPosition.right
        ) {
            solved = false;
        }
    });
    
    if (solved) {
        alert('¡Felicidades, has completado el rompecabezas!');
    } else {
        alert('El rompecabezas aún no está completo. Intenta nuevamente.');
    }
}


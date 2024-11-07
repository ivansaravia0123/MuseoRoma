<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sala de Arquitectura de Roma Antigua</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Museo Cultural: Roma Antigua</h1>
        <h2>Sala de Arquitectura</h2>
    </header>
    
    <section id="exploracion">
        <p>Explora los monumentos más representativos de la arquitectura romana y descubre sus secretos.</p>

        <div class="monumento" onclick="mostrarInfo('coliseo')">
            <img src="coliseo.jpg" alt="Coliseo Romano">
            <p>Coliseo Romano</p>
        </div>
        
        <div class="monumento" onclick="mostrarInfo('panteon')">
            <img src="panteon.jpg" alt="Panteón de Agripa">
            <p>Panteón de Agripa</p>
        </div>

        <div class="monumento" onclick="mostrarInfo('termas')">
            <img src="termas.jpg" alt="Termas Romanas">
            <p>Termas Romanas</p>
        </div>
    </section>

    <section id="info">
        <h3>Información del Monumento</h3>
        <p id="descripcion"></p>
    </section>

    <script src="script.js"></script>
</body>
</html>

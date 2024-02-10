

function goBack() {
    window.history.back();
}

// Boucle for en JavaScript pour générer des balises d'image 
// Liste des noms de fichiers d'images
const imageFiles = [
    'imgs/plugin.png',
    'imgs/theme.png',
    'imgs/concert.png',
    'imgs/plugina.png',
    'imgs/reglage.png',
   
 ];

// Boucle for en JavaScript pour générer des balises d'image
for (let i = 0; i < imageFiles.length; i++) {
    // Création d'une balise d'image pour chaque fichier
    const imageElement = document.createElement('img');
    imageElement.src = imageFiles[i];
    imageElement.alt = 'Image ' + (i + 1);

    // Ajout de l'image à la div avec l'ID "image-container"
    document.getElementById('image-container').appendChild(imageElement);
}


function goBack() {
    window.history.back();
}

// Boucle for générer des balises d'image 
// Liste des images
const imageFiles = [
    'imgs/apiangular.png',
    'imgs/login.png',
    'imgs/angularcherche.png',
    'imgs/angulardet.png',
    'imgs/formajout.png',
    'imgs/listangular.png',
 ];

// Boucle for  générer des balises d'image
for (let i = 0; i < imageFiles.length; i++) {
    // Création d'une balise d'image pour chaque fichier
    const imageElement = document.createElement('img');
    imageElement.src = imageFiles[i];
    imageElement.alt = 'Image ' + (i + 1);

    // Ajout de l'image à la div avec l'ID "image-container"
    document.getElementById('image-container').appendChild(imageElement);
}
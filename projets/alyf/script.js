

function goBack() {
    window.history.back();
}


document.addEventListener("DOMContentLoaded", function () {
    // Tableau contenant les chemins des images
    const images = [
        "imgs/homecapture.png",
        "imgs/services.png",
        "imgs/cat1.png",
        "imgs/cat2.png",
        
    ];
    const randomImageElement = document.getElementById("random-image");
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function changeImage() {
        randomImageElement.src = getRandomImage();
    }

    // Changer l'image automatiquement 
    setInterval(changeImage, 2000);

    // Ajoute un gestionnaire de clic pour changer l'image manuellement
    /*randomImageElement.addEventListener("click", function () {
        changeImage();
    });
   /* // Change l'image lorsqu'on clique dessus 
    randomImageElement.addEventListener("click", function () {
        randomImageElement.src = getRandomImage();
    });*/
});


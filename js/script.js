(function () { // ova funkcija postoji zbog use strict greske koju JSLint izbacuje
    "use strict";

    var headerImage = document.getElementById("header"),
    imageArray = ['images/header_image1.jpg', 'images/header_image2.jpg', 'images/header_image3.jpg', 'images/header_image4.jpg', 'images/header_image5.jpg', 'images/header_image6.jpg'],
    imageNumber = imageArray.length;

    function changeImage() {
        var imageIndex = Math.floor(Math.random() * imageNumber);
        headerImage.style.backgroundImage = " url( " + imageArray[imageIndex] + " ) ";
    }

    setInterval(changeImage, 10000);
}());

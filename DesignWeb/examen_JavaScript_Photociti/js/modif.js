$(document).bind('keypress', function(event) {
    if(event.keyCode==13){ // Code du Enter = 13
        $('#boutonGo').trigger('click'); // Trigger clique du bouton quand on appuie sur la touche enter
    }
});

$('#boutonGo').click(function () {
    let nom = $('#mots').val();
    let lettres = nom[0];
    let longueurMot = nom.length;


    if (longueurMot >= 3 && longueurMot <= 12) {
        for (let i = 0; i < nom.length; i++) { // Boucle tant que plus petit que longueur du mot
            let imageDiv = $('#lettre' + i); //image1, image2, etc. (id de mes colonnes)
            let col;
            switch(longueurMot) { //
                case 3:         // si longueur mot = 3, col-4
                    col = "4";
                    break; // stop
                case 4:         // si longueur mot = 4, col-3
                    col = "3";
                    break;
                case 5:
                case 6:         // si longueur mot = 5 ou 6, col-2
                    col = "2";
                    break;
                default:        // sinon... col-1
                    col = "1"
            }

            imageDiv.attr("class", "col-" + col);
            $('#lettre' + i +' > img').attr("src", "img/" + nom[i].toUpperCase() + "/" + nom[i].toUpperCase() + "1.jpg");
            imageDiv.show(); // montre images jusqu'à la longueur totale du mot entré
        }
        for (let i = nom.length; i <= 12; i++) {
            let imageDiv = $('#lettre' + i);
            imageDiv.hide(); // cache les images à partir de la longueur du mot
            $('#lettre' + i +' > img').attr("src", "");
            imageDiv.attr("class", "col");
        }
    } else {
        alert("Veuillez entrer un mot entre 3 et 12 caractères"); // message d'erreur

    }
});


$('#bgBlanc').click(function () {
    $('.bgCouleur').css('background-image','url(img/background/blanc.jpg)');
});
$('#bgBleu').click(function () {
    $('.bgCouleur').css('background-image','url(img/background/bleu.jpg)');
});
$('#bgBleuFonce').click(function () {
    $('.bgCouleur').css('background-image','url(img/background/bleuFonce.jpg)');
});
$('#bgGris').click(function () {
    $('.bgCouleur').css('background-image','url(img/background/gris.jpg)');
});
$('#bgNoir').click(function () {
    $('.bgCouleur').css('background-image','url(img/background/noir.jpg)');
});
$('#bgRose').click(function () {
    $('.bgCouleur').css('background-image','url(img/background/rose.jpg)');
});
$('#bgRouge').click(function () {
    $('.bgCouleur').css('background-image','url(img/background/rouge.jpg)');
});

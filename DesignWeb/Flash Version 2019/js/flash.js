//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");

$('#boutonGauche').click(function(){
    $('#flashID').css("left","-=100px");
});

$('#boutonDroite').click(function(){
    $('#flashID').css("left","+=100px");
});

$('#boutonChangerImage').click(function (){
    var src =$('#flashID').attr('src');
    if(src === "img/Flash1.png"){
        $('#flashID').attr('src',"img/Flash2.png");
    }
    else{
        $('#flashID').attr('src',"img/Flash1.png")
    }
});

$("#boutonEnleverImage").click(function(){
    $('#flashID').hide();
});

$("#boutonAjouterImage").click(function(){
    $('#flashID').show();
});

$("#boutonAjouterAttribut").click(function(){
    $('#flashID').attr("alt","Photo de Flash");
});

$("#boutonAjouterTitre").click(function(){
$('body').prepend("<h1>justice league</h1>");
});


var timer;
$('#boutonPerso').click(function(){
    timer = setInterval(attackEclair, 20);
});
var compteur = 0;
function attackEclair() {
    if(compteur<= 26){
        $('#flashID').css("left", "+=50");
    }
    if (compteur >= 26){
        $('#flashID').css("top","+=50");
    }
    if( compteur >= 39){
        $('#flashID').css("left","-=50");
    }

    compteur += 1;
}

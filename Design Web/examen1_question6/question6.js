var controleur;
var nbMoteur;
var prixMoteur;
var camera;
var prix = 35; //! prix dedu filament + batterie inclut !//
var article ="";
var livraison;
var prixTotal;


controleur = prompt("entrez le controleur ( RaspBerry Pi / RaspBerry Pi Zero");
nbMoteur = Number(prompt("entrez le nombre de moteur ( 2 a 24)"));
camera = prompt("entrez si vous desirez une camera USB (oui/non)")
leds = prompt("voulez vous une matrice de LEDS pour les yeux (oui/non)");

prixMoteur = nbMoteur * 5;

if(controleur ==="RaspBerry Pi")
{
    prix += 55 ;
    article += "RaspBerry Pi,";
}
else if(controleur === "RaspBerry Pi Zero")
{
    prix += 15;
    article += " RaspBerry Pi Zero,";
}


if(camera ==="oui")
{
    prix += 10;
    article += " camera,"
}
else if(camera === "non")
{
    article += "pas de camera";
}


if(leds==="oui")
{
    article += " Matrice de LEDS"

}
else(leds ==="non");
{
    article += " pas de matrice de LEDS"

}

livraison = Number(prix*0.15);
prixTotal= livraison + prix;

alert("Laliste des articles acheter : "  + article);
alert("le prix est de : " + prix);
alert("le prix avec livaison est de : " + prixTotal);


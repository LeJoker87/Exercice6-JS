const salaire = prompt("saisissez votre salaire");
var enfant = prompt("Combien avez vous d'enfants");
var participation = 0;
var situation = confirm("Etes vous marié?");
var remise3 = (enfant) * 10;

if (salaire <= 1200) {
    var remise1 = (participation + 10)
}else {
    var remise1 = (participation + 0)
}

if (situation == true) {
    var remise2 = (participation + 25)
}else {
    var remise2 = (participation + 20)
}

var totalrem = (remise3 + remise2);

if (totalrem >50) {
    var participation = 50
}else {
    var participation = totalrem
}

var remisetot = (participation + remise1);
alert(remisetot + "% de participation au repas");
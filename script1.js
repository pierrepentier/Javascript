function valeurAbs(a) {
    return Math.abs(a);
  }

var resultat = window.prompt("Saisissez un nombre : ");
var abs = valeurAbs(resultat);

window.alert("La valeur absolue est : "+ abs);
console.log("La valeur absolue est : %i", abs);
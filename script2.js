var a = parseInt(window.prompt("Saisissez un nombre : "));
var b = parseInt(window.prompt("Saisissez un nombre : "));

if(a > b){

    window.alert(a+" est plus grand que "+b);
    console.log("%i est plus grand que %i",a,b);

}

if(a < b){

    window.alert(a+" est plus petit que "+b);
    console.log("%i est plus petit que %i",a,b);

}

if(a == b){

    window.alert("Les deux chiffres ont la même valeur");
    console.log("%i = %i",a,b);

}
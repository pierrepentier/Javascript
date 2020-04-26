var nbr = parseInt(window.prompt("Saisissez un nombre : "));

function fact(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }

  window.alert("Le factoriel de "+nbr+" est "+fact(nbr));
  console.log("Le factoriel de %i est %i",nbr,fact(nbr));  
  
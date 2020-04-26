var nbr = parseInt(window.prompt("Saisissez un nombre : "));

function fact(nbr) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return nbr * fact(nbr-1);
}
window.alert("Le factoriel de "+nbr+" est "+fact(nbr));
console.log("Le factoriel de %i est %i",nbr,fact(nbr));


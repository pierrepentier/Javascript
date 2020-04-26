<?php

include_once("Modele.php");
include_once("Voiture.php");

$marque1 = new Voiture("Renault");
$marque2 = new Voiture("Kia");

$modele1 = new Modele($marque1, "kangoo");
$modele2 = new Modele($marque1, "Clio");
$modele3 = new Modele($marque1, "Captur");


$modele4 = new Modele($marque2, "Sportage");
$modele5 = new Modele($marque2, "Rio");
$modele6 = new Modele($marque2, "Pincanto");

$array = array($marque1, $marque2);
$array2 = array($modele1, $modele2, $modele3, $modele4, $modele5, $modele6);

if(isset($_GET)){
    $json = json_encode($array);
}
else{
    $json = json_encode($array2);
}
echo ($json);


?>
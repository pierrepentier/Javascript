<?php
    include_once("Personne.php");

    $per1 = new Personne("VD", "Jean Claude", 50);
    $per2 = new Personne("Flambert", "Eric", 42);
    $per3 = new Personne("Gambier", "Baptiste", 22);
    $per4 = new Personne("Flantier", "Noel", 38);

    $array = array(
        $per1,
        $per2,
        $per3,
        $per4
    );

    echo json_encode($array);
?>
<?php

include_once("Voiture.php");

class Modele implements \JsonSerializable {
    private $modele;
    private $marque;



    public function __construct($newMarque, $newModele){
        $this->modele=$newModele;
        $this->marque=$newMarque;
    }

    public function jsonSerialize()
    {
        $vars = get_object_vars($this);

        return $vars;
    }

/**
     * Getter for Modele
     *
     * @return [type]
     */
    public function getModele()
    {
        return $this->modele;
    }

    /**
     * Setter for Modele
     * @var [type] modele
     *
     * @return self
     */
    public function setModele($modele)
    {
        $this->modele = $modele;
        return $this;
    }


    /**
     * Getter for Marque
     *
     * @return [type]
     */
    public function getMarque()
    {
        return $this->marque;
    }

    /**
     * Setter for Marque
     * @var [type] marque
     *
     * @return self
     */
    public function setMarque($marque)
    {
        $this->marque = $marque;
        return $this;
    }
}
?>
<?php
    class Personne implements JsonSerializable{
        private $nom;
        private $prenom;
        private $age;

        public function __construct($nom, $prenom, $age){
            $this->nom = $nom;
            $this->prenom = $prenom;
            $this->age = $age;
        }

        public function jsonSerialize(){
            $vars = get_object_vars($this);
            return $vars;
        }
         /**
         * Getter for Nom
         *
         * @return [type]
         */
        public function getNom()
        {
            return $this->nom;
        }

        /**
         * Setter for Nom
         * @var [type] nom
         *
         * @return self
         */
        public function setNom($nom)
        {
            $this->nom = $nom;
            return $this;
        }


        /**
         * Getter for Prenom
         *
         * @return [type]
         */
        public function getPrenom()
        {
            return $this->prenom;
        }

        /**
         * Setter for Prenom
         * @var [type] prenom
         *
         * @return self
         */
        public function setPrenom($prenom)
        {
            $this->prenom = $prenom;
            return $this;
        }


        /**
         * Getter for Age
         *
         * @return [type]
         */
        public function getAge()
        {
            return $this->age;
        }

        /**
         * Setter for Age
         * @var [type] age
         *
         * @return self
         */
        public function setAge($age)
        {
            $this->age = $age;
            return $this;
        }

    }
?>
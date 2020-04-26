<?php
    class Voiture implements \JsonSerializable {
        private $marque;

        public function __construct($newMarque) {
            $this->marque=$newMarque;
        }

        public function jsonSerialize() {
            $vars = get_object_vars($this);
            return $vars;
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
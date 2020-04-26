window.onload=function(){

    function createLink(href, title){
        var elt = document.createElement('a');
        elt.href = href;
        elt.title = title;
        return elt;
    }

    var elt=document.createElement("div");
    elt.id="idTP1";
    document.body.appendChild(elt);

    var textnodes = [
        document.createTextNode('Le '),
        document.createTextNode('World Wide Web Consortium'),
        document.createTextNode(', abrégé par le sigle '),
        document.createTextNode('W3C'),
        document.createTextNode(', est un '),
        document.createTextNode('organisme de standardisation '),
        document.createTextNode('à but non-lucratif chargé de promouvoir la compatibilé des technologies du '),
        document.createTextNode('World Wide Web'),
        document.createTextNode('.')
    ]

    var strong1 = document.createElement("strong");
    var strong2 = document.createElement("strong");

    strong1.appendChild(textnodes[1]);
    strong2.appendChild(textnodes[3]);

    var a1 = createLink("http://fr.wikipedia.org/wiki/Organisme_de_normalisation", "Organisme de normalisation");
    a1.appendChild(textnodes[5]);
    var a2 = createLink("http://fr.wikipedia.org/wiki/World_Wide_Web", "World_Wide_Web");
    a2.appendChild(textnodes[7]);

    elt.appendChild(textnodes[0]);
    elt.appendChild(strong1);
    elt.appendChild(textnodes[2]);
    elt.appendChild(strong2);
    elt.appendChild(textnodes[4]);
    elt.appendChild(a1);
    elt.appendChild(textnodes[6]);
    elt.appendChild(a2);
    elt.appendChild(textnodes[8]);

}


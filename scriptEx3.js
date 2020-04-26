function fonction(id) {

    var td = document.getElementById(id);

    if(td.childNodes.length == 0){
        var input = document.createElement("input");
        td.appendChild(input);
        input.addEventListener("keypress", function (e){
            if(e.key=="Enter"){
            var a = input.value;
            console.log(a);
            td.removeChild(input);
            var textnode = document.createTextNode(a);
            td.innerHTML = a;
            }
        });
    }

    if(td.innerHTML = a){
        var input = document.createElement("input");
        input.value=a;
        td.appendChild(input);
    }
   
}
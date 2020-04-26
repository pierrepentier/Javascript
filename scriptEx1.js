window.onload = function(){

    var elts = document.getElementsByClassName("box");
    var button = document.getElementById("checkAll");
    var button1 = document.getElementById("UncheckAll");
    var button2 = document.getElementById("rmBr");
    var brs = document.getElementsByTagName("br");

    console.log(elts);
    console.log(button);
    console.log(button2);
    console.log(brs);

    button.addEventListener("click", function (e){
        for(var i = 0; i < elts.length; i++){
            element = elts[i];
            element.checked = true;
        }
    });

    button1.addEventListener("click", function (e){
        for(var i = 0; i < elts.length; i++){
            element = elts[i];
            element.checked = false;
        }
    });

    var a = brs.length;
        button2.addEventListener("click", function (e){
        for(var i = 0; i < a; i++){
            element = brs[0];
            element.remove();
        }
    });

}

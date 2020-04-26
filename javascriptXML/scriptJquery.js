var obj;

window.onload=function() {
    $.ajax(
        'objects.php', 
    {
            success: function(data) {
                alert('Appel AJAX réussi !');
                alert('Données reçues du serveur : ' + data);
                obj = JSON.parse(data);
                console.log(obj);
                selectMarque();
                $('#marque').change(function(e){
                    myGet = $(this).val();
                    console.log(myGet);
                    $.ajax(
                        'objects.php', 
                    {data : myGet,
                            success: function(data) {
                                alert('Appel AJAX réussi !');
                                alert('Données reçues du serveur : ' + data);
                                obj = JSON.parse(data);
                                console.log(obj);
                            },
                            error: function() {
                                alert("Erreur détectée lors de l'appel AJAX !");
                            }
                        }
                    );
                })
            },
            error: function() {
                alert("Erreur détectée lors de l'appel AJAX !");
            }
        }
    );
}

function selectMarque(){
    select = $('<select>').attr("id", "marque");
    for(i=0; i < obj.length; i++){
        option = $('<option>').html(obj[i].marque);
        select.append(option);
    }
    console.log(option);
    $('body').append(select);
}



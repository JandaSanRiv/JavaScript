$(document).ready(function () {
    $("#btnBuscarUsr").click(function(){
        buscarUsr();
    });
    function buscarUsr(){
        // let idUsr = document.getElementById("idUsr").value;
        let idUsr = $("#idUsr").val();
        if (idUsr != null) {
    
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users/' + idUsr,
                contentType: "application/json",
                dataType: 'json',
                success: function (result) {
                    $("#lbNombre").text(result.name)
                    $("#lbEmail").text(result.email)
                    // let lbNom = document.getElementById("lbNombre");
                    // let lbEmail = document.getElementById("lbEmail");
                    // lbNom.innerText = result.name;
                    // lbEmail.innerText = result.email;
                },
                error: function(){
                    alert("No se encontro el usuario o error al realizar la peticion");
                }
    
            });
        }
    }
    
});


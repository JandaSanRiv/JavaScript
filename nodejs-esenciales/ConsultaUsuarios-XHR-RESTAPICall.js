
function buscarUsr(){
    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let idUsr = document.getElementById("idUsr").value;
    if (idUsr != null) {

        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status >=200 && xhr.status<300){
                var result = JSON.parse(xhr.responseText);
                let lbNom = document.getElementById("lbNombre");
                let lbEmail = document.getElementById("lbEmail");
                lbNom.innerText = result.name;
                lbEmail.innerText = result.email;
            }else{
                
                alert("No se encontro el usuario o error al realizar la peticion");
            }

        }; 
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/'+ idUsr);
        xhr.send();
    }
}
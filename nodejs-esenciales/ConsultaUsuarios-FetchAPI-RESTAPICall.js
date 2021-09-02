
function buscarUsr() {
    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let idUsr = document.getElementById("idUsr").value;
    if (idUsr != null) {


        fetch(`https://jsonplaceholder.typicode.com/users/${idUsr}`)
            .then(response => {
                if(!response.ok) throw Error(response.status);
                return response.json()
            })
            .then(result => {
                // var result = JSON.parse(xhr.responseText);
                let lbNom = document.getElementById("lbNombre");
                let lbEmail = document.getElementById("lbEmail");
                lbNom.innerText = result.name;
                lbEmail.innerText = result.email;
            })
            .catch((error) => {
                // console.error('Error:', error);
                console.log('No se obtuvo una respuesta');
            });
    }
}
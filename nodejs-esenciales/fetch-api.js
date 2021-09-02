// let btn = document.getElementById("btnUsr");
// btn.addEventListener("click", searchUser());

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(json => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/users', {method:"GET"})// NO SE OCUPA PONER GET, PORQUE POR DEFECTO ES GET
// .then(response => response.json()).then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        title: "Wah the dishes",
        completed: false
    }),
    headers: {
        "Content-type": "application/json"
    }
})
    .then(response => response.json())
    .then(json => console.log(json));

async function searchUser() {
    let idUsr = document.getElementById("idUsr");

    getUser(idUsr.value).then((user) => {
        console.log(user)
        let lblUser = document.getElementById("lblUser");
        lblUser.innerText = `Id: ${user.id}\tName: ${user.name}\Email: ${user.email}\tName: ${user.name}\t`;
    });
    // await getUser(idUsr.value).then((user)=> function(){

    //     let lblUser = document.getElementById("lblUser");
    //     lblUser.innerHTML(`Name: ${usuario.name}`)
    // });
}

//Funcion asincrona
async function getUser(id) {

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if(response.ok){

    }
    else{
        throw Error(response.status);
    }
    let data = await response.json()
    return data;
}


//con esto no funciona porque no es asincrono
// let data = getUser(5);
// console.log(`datos: ${data}`);
getUser(5).then((data) => console.log(data)).catch((error)=> console.log("Error!"));
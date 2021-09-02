// definir un arreglo vacio
let arreglo = [];
function addItemToArray()
{
    let dato = window.prompt("Ingresa un elemEnto");
    let listaElem = document.getElementById("listaElementos");
    if(dato !=null){
        arreglo.push(dato);
        //  agregarElemento(listaElem, dato);//sin boton
         agregarElemento2(listaElem, dato);

    }
    // listaElem.removeChild(listaElem.firstChild);
    console.log(arreglo);
    console.log("Tu arreglo actual es: \n " + arreglo);
    console.log("---------------------------------------");
    var i = 0;
    arreglo.forEach(element => {
        console.log((i++)+". "+element)
    });
    console.log("---------------------------------------");
}

// Agregar elemento con boton eliminar
function agregarElemento2(listaElem, text){
   
        let nvoElemento = document.createElement("li");
        
        let lastBtn ='';
        try{

            lastBtn = parseInt(listaElem.lastChild.getElementsByClassName("btnDel")[0].id.replace(/\D/g, ''))+1;
            lastBtn = "btn"+(lastBtn);
        }catch(exception){

            lastBtn = "btn1";
        }
        //let ultimoElem = document.getElementById("listaElementos").lastChild;
         nvoElemento.innerHTML = `${text} <button class="btnDel" id ="${lastBtn}" onClick='removeSibling(this)'>Eliminar</button>`;
         nvoElemento.setAttribute("class", "liEle")
        listaElem.appendChild(nvoElemento);
    
}
function removeSibling(btn){

    if(btn != undefined){
        btn.parentNode.remove();
    }
}






// agregar elemento sencillo
function agregarElemento(id, text){
    let nvoElemento = document.createElement("li");
    nvoElemento.innerText = text;
    id.appendChild(nvoElemento);
}
function cleanList(){
    limpiarLista('listaElementos');
}


//-------
function limpiarLista(idList){
    let listaElem = document.getElementById(idList);
    if(listaElem !=null && listaElem != undefined)
        while(listaElem.firstChild)
        {
        listaElem.removeChild(listaElem.firstChild)
        }
}

function removeLastChild(){
    elimUltimoHijo( document.getElementById("listaElementos"))
}

function elimUltimoHijo(id)
{
    if(id !=null && id.hasChildNodes())
    id.removeChild(id.lastChild);
}


function removeFirstChild(){
    elimPrimerHijo( document.getElementById("listaElementos"))
}

function elimPrimerHijo(id)
{
    if(id !=null && id.hasChildNodes())
        id.removeChild(id.firstChild)
}

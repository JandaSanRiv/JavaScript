getNotes();
let btnAddNote = document.getElementById("btnAddNote");
btnAddNote.addEventListener("click", addNote);


function addNote() {
    let title = document.getElementById("txtTitle");
    let content = document.getElementById("txtContent");
    let jsonData = {
        "title": title.value,
        "content": content.value
    };
    $.ajax({
        type: "post",
        url: 'http://localhost:3000/notes',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(jsonData),
        success: function (result) {
            // alert("Nota agregada correctamente");
            console.log("Nota agregada correctamente");
        },
        error: function () {
            alert("no se realizo correctamente la insercion")
        },
        complete: function () {
            getNotes();
        }
    });


}

function getNotes() {

    let tBody = document.getElementById("tbNotes");
    // let header = new Headers({
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'multipart/form-data'
    // });
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    fetch('http://localhost:3000/notes', {
        method: "GET",
        mode: 'cors',
        // header: header
    })
        .then(response => {
            if (!response.ok) throw Error(response.status);
            return response.json();
        })
        .then(notes => {
            // let tblNotes = document.getElementById("tblNotes");
            notes.forEach(element => {
                // console.log(element._id + " " + element.title)
                addRow(tBody, [element._id, element.title, element.content, element.createdAt, element.updatedAt], 5);
            });
        })
        .catch((error) => {
            console.log("No se obtuvo una respuesta");
        })
        .finally(function () {

        });
}

function addRow(tBody, arrDatos, size) {

    let tr = document.createElement("tr");
    let td;
    for (let i = 0; i < size; i++) {
        td = document.createElement("td");
        td.innerText = arrDatos[i];
        tr.appendChild(td);
    }
    tBody.appendChild(tr);
}
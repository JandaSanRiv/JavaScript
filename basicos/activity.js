function alternateColor() {
    liElems = document.getElementsByTagName("li")
    // var toDoList = document.getElementById("toDoList");
    let numChildrenList = liElems.length;
    for (let child = 0; child < numChildrenList; child++) {
        if (child % 2 == 0)
            liElems[child].style.color = "red";
        else
            liElems[child].style.color = "pink";

    }
}


function changeColor(listId) {
    // var toDoList = document.getElementById("toDoList");
    // toDoList.forEach(child => {
    //     toDoList[child].style.color = "red";
    // });
    var lista = document.getElementById(listId);
    var elems = lista.getElementsByTagName("li")

    for (var i = 0; i < elems.length; i++) {
        console.log(elems[i]);
        if (i % 2 == 0) {
            elems[i].style.color = "yellow";
        }
        else {
            elems[i].style.color = "cyan";
        }
    }
}
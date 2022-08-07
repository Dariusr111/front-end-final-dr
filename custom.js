// console.log("Hello")
/* alt + shift + a */
//==================on-off==================
$("#on-off").click(function () {
    $(".square1").toggle();
})

//=================Control panel===============
//change width
let box = document.getElementsByClassName("square2")[0];

function changeWidth() {
    box.classList.toggle("width_cl");
};

//change height
function changeHeight() {
    box.classList.toggle("height_cl");
};

//center
function centerPos() {
    box.classList.toggle("center_cl");
};

//possition
function rightPos() {
    box.classList.toggle("pos_cl");
};

//reset
function resetPos() {
    box.className = "";
    box.classList.add("square2");
};


//====================Random colors===================


let allSq = document.querySelectorAll(".all_squares > div");
let color;
// console.log(allSq);

function randomColor() {
    for (let i = 0; i < allSq.length; i++) {
        color = '#' + Math.random().toString(16).substr(-6);
        allSq[i].style.backgroundColor = color;
        allSq[i].textContent = color;
    }
}



//=======================Form generation=================
let userCounter = 1;
const table = document.getElementById("userTable");

function add() {
    let nameInput = document.getElementById("name");
    let surnameInput = document.getElementById("surname");
    let yearInput = document.getElementById("yearOfBirth");
    let ageCount = ((new Date().getFullYear()) - parseInt(yearInput.value));

    userTable.innerHTML += "<tr><td>" + userCounter + "</td><td>" + nameInput.value + "</td><td>" + surnameInput
        .value + "</td><td>" +
        ageCount + "</td></tr>";
    userCounter++;

    /* clearing input field */
    nameInput.value = '';
    surnameInput.value = '';
    yearInput.value = '';

}


function removeRow() {
    if (table.rows.length > 1) {
        table.deleteRow(-1);
        userCounter = userCounter - 1;
    }

}

function resetTable() {
    for (let i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    userCounter = 1;
}


//==================================================
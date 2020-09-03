const overlay = document.getElementById("overlay");
const createNote = document.getElementById("c");
const addingButton = document.getElementById("addingButton")
const changableTitle = document.getElementById("changableTitle");
const details = document.getElementById("details"); //create
const storeField = document.getElementById("store");
const noteNumber = document.getElementById("noteNumber");
const s_container = document.getElementById("s-container");

overlay.addEventListener("click", () => {
    createNote.classList.remove("active");
    while (s_container.hasChildNodes()) {
        s_container.removeChild(s_container.firstChild);
    }
    overlay.classList.remove("active");
})

function addNote() {
    if(addingBar.value.length > 0) {
    changableTitle.innerText = addingBar.value; // change the title based on user input
    changableTitle.contentEditable = true;
    changableTitle.addEventListener("keypress", (event) => {
        if(event.keyCode == 13) {
            changableTitle.contentEditable = false;
            let a = setInterval(() => {
                changableTitle.contentEditable = true;
            }, 250);
        }
    }) // prevent enter key break lines
    changableTitle.addEventListener("input",() => {
        if(changableTitle.innerText.length > 30) {
            changableTitle.innerText = changableTitle.innerText.slice(0,30);
    }
})
    // prevent enter over 30 words
    createNote.classList.add("active");
    overlay.classList.add("active");
    } else {
        alert("Please Enter At Least One Word!")
    }
}

function removE() {
    createNote.classList.remove("active");
    overlay.classList.remove("active");
}
function remoVE(event) {
    let a = event.target.parentElement.parentElement.parentElement;
    while(a.hasChildNodes()) {
        a.removeChild(a.firstChild);
      }
      overlay.classList.remove("active");
}

function create(event) {
    if(details.value.length > 0) {
        let d = new Date(); // changing
        
    // add notes
    let sr = document.createElement("div"); // storedrow
    sr.value = details.value;
    sr.classList.add("storedrow");
    let sb = document.createElement("div"); // storedblock
    sb.value = changableTitle.innerText; // store title
    sb.classList.add("storedBlock");
    sb.addEventListener("click", openSavedNote);
    let db = document.createElement("button"); // delete button
    db.innerText = "Delete";
    db.classList.add("delete");
    db.addEventListener("click", deleteN);
    if(changableTitle.innerText.length > 15) {
    sb.innerText = changableTitle.innerText.slice(0,9) + "......";
    } else if (changableTitle.innerText.length == 0) {
        alert("This note's title is empty!")
        changableTitle.innerText = "Title";
        return;
    } else {
    sb.innerText = changableTitle.innerText;
    }
    let sd = document.createElement("div"); //storedDate
    sd.classList.add("createdDate");
    sd.innerText = d.getFullYear() + "/" + d.getMonth() + "/" +
    d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    sr.appendChild(sb);
    sr.appendChild(sd);
    sr.appendChild(db);
    storeField.appendChild(sr);
    noteNumber.innerText = storeField.childElementCount;
    //

    addingBar.value = "";
    details.value = "";
    createNote.classList.remove("active");
    overlay.classList.remove("active");
    }
    else alert("Please at least write one word!");
}

function deleteN(event) {
    let a = event.target.parentElement;
    storeField.removeChild(a);
    noteNumber.innerText = storeField.childElementCount;
}

function openSavedNote(event) {
    //create new pb-save
    let a = event.target;
    let pb_s = document.createElement("div"); //pb save
    pb_s.classList.add("pb");
    let pb_t = document.createElement("div") // pb title
    pb_t.classList.add("pb-title");
    let changableTitle2 = document.createElement("div"); //title
    changableTitle2.id = "changableTitle2";
    let sb = document.createElement("button"); // save button
    sb.classList.add("b");
    sb.innerText = "Save";
    let db2 = document.createElement("button"); // delete button
    db2.classList.add("b");
    db2.innerText = "X";
    db2.addEventListener("click",remoVE)
    let pb_c = document.createElement("div"); // content
    pb_c.classList.add("pb-content");
    let details2 = document.createElement("textarea");
    details2.id = "details2";
    details2.cols = "100";
    details2.rows = "20";
    // save fucntion
    sb.addEventListener("click",() => {
        if(changableTitle2.innerText.length > 15) {
            a.value = changableTitle2.innerText;
            a.innerText = changableTitle2.innerText.slice(0,9) + "......";
            } else if (changableTitle2.innerText.length == 0) {
                alert("This note's title is empty!")
                changableTitle2.innerText = "Title";
                return;
            } else {
            a.value = changableTitle2.innerText;
            a.innerText = changableTitle2.innerText;
            }
        if(details2.value.length == 0) {
            alert("please type something in!") 
            return
        } else {
            a.parentElement.value = details2.value;
        }
        //
        while(s_container.hasChildNodes()) {
            s_container.removeChild(s_container.firstChild);
        }
        overlay.classList.remove("active");
    });
    //
    pb_t.appendChild(changableTitle2);
    pb_t.appendChild(sb);
    pb_t.appendChild(db2);
    pb_c.appendChild(details2);
    pb_s.appendChild(pb_t);
    pb_s.appendChild(pb_c);
    s_container.appendChild(pb_s);
    //show
    pb_s.classList.add("active");
    overlay.classList.add("active");
    
    changableTitle2.innerText = a.value; // title
    details2.value = a.parentElement.value;
    changableTitle2.contentEditable = true;
    changableTitle2.addEventListener("keypress", (event) => {
        if(event.keyCode == 13) {
            changableTitle2.contentEditable = false;
            let a = setInterval(() => {
                changableTitle2.contentEditable = true;
            }, 250);
        }
    }) // prevent enter key break lines
    changableTitle2.addEventListener("input",() => {
        if(changableTitle2.innerText.length > 30) {
            changableTitle2.innerText = changableTitle2.innerText.slice(0,30);
    }
})
}
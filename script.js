const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");

// Load saved notes from the browser (or start with an empty list)
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  notesList.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const text = document.createElement("span");
    text.textContent = notes[i];

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteNote(i);
    });

    noteDiv.appendChild(text);
    noteDiv.appendChild(deleteBtn);
    notesList.appendChild(noteDiv);
  }
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  showNotes();
}

addBtn.addEventListener("click", function () {
  const text = noteInput.value.trim();

  if (text === "") {
    alert("Please write something first!");
    return;
  }

  notes.push(text);
  saveNotes();
  showNotes();
  noteInput.value = "";
});

showNotes();

import './style.css';
import Sidebar from './components/Sidebar';
// import Content from './Content';
import React from 'react';
import 'react-quill/dist/quill.snow.css'
import {nanoid} from "nanoid"
import Split from "react-split"
import Editor from "./components/Editor"


function App(props) {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
)
const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
)

React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
}, [notes])

function createNewNote() {
    const newNote = {
        id: nanoid(),
        body: ""
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
}
function updateNote(text) {
  // Put the most recently-modified note at the top
  setNotes(oldNotes => {
      const newArray = []
      for(let i = 0; i < oldNotes.length; i++) {
          const oldNote = oldNotes[i]
          if(oldNote.id === currentNoteId) {
              newArray.unshift({ ...oldNote, body: text })
          } else {
              newArray.push(oldNote)
          }
      }
      return newArray
  })
}
function deleteNote(event, noteId) {
  event.stopPropagation()
  setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
}

function findCurrentNote() {
  return notes.find(note => {
      return note.id === currentNoteId
  }) || notes[0]
}

return (
  <main>
  {
      notes.length > 0 
      ?
      <Split 
          sizes={[20, 80]} 
          direction="horizontal" 
          className="split"
      >
          <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
          />
          {
              currentNoteId && 
              notes.length > 0 &&
              <Editor 
                  currentNote={findCurrentNote()} 
                  updateNote={updateNote} 
              />
          }
      </Split>
      :
      <div className="no-notes">
          <h1>You have no notes</h1>
          <button 
              className="first-note" 
              onClick={createNewNote}
          >
              NEW NOTE
          </button>
      </div>
      
  }
  </main>
)
}


export default App;

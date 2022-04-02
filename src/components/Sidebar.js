import logo from './1logo.jpeg';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
      <div key={note.id}>
          <div
              
              className={`title ${
                  note.id === props.currentNote.id ? "selected-note" : ""
              }`}
              onClick={() => props.setCurrentNoteId(note.id)}
          >
              <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
              <button 
                  className="delete-btn"
                  onClick={(event) => props.deleteNote(event, note.id)}
              >
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
              </button>
          </div>
      </div>
  ))

  return (
      <section className="pane sidebar">
          <div className="sidebar--header">
              <img className='logo' src={logo}/>
              </div>
              <Button className='new-note' variant="contained" onClick={props.newNote} color="info">
        New Note
      </Button>
          {noteElements}
      </section>
  )
}

import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItems(form) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: prevNotes.length ? prevNotes[prevNotes.length - 1].id + 1 : 0,
          title: form.title,
          content: form.content,
        },
      ];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="form-container">
          <CreateArea addItems={addItems} />
        </div>
        <div className="card-container">
          {notes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              content={note.content}
              id={note.id}
              deleteNote={deleteNote}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

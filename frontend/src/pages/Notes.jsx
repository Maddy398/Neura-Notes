import React, { useState, useEffect } from 'react';
import '../styles/Notes.css';
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import axios from 'axios';
import "highlight.js/styles/github-dark.css";
import "prismjs/components/prism-javascript";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [reviews, setReviews] = useState({});
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
      setFilteredNotes(storedNotes); // Initialize filtered notes
    }
  }, []);

  const saveNotes = (updatedNotes) => {
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const addOrUpdateNote = () => {
    if (!title) {
      alert('Title is required');
      return;
    }
    if (editIndex === null && !file) {
      alert('File is required');
      return;
    }

    const newNote = {
      title,
      fileName: file ? file.name : notes[editIndex]?.fileName,
      fileData: file ? URL.createObjectURL(file) : notes[editIndex]?.fileData,
      date: new Date().toLocaleString(),
    };
    let updatedNotes;
    if (editIndex !== null) {
      updatedNotes = [...notes];
      updatedNotes[editIndex] = newNote;
      setEditIndex(null);
    } else {
      updatedNotes = [...notes, newNote];
    }
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes); // Update filtered notes
    saveNotes(updatedNotes);
    setTitle('');
    setFile(null);
    document.querySelector("input[type='file']").value = "";
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes); // Update filtered notes
    saveNotes(updatedNotes);
  };

  const editNote = (index) => {
    setTitle(notes[index].title);
    setFile(null);
    setEditIndex(index);
  };

  

  const summarizeNote = async (noteTitle, index) => {
    try {
      console.log("Sending request to backend with title:", noteTitle);
      const response = await axios.post(`http://localhost:4000/ai/get-review`, { title: noteTitle });
      setReviews((prevReviews) => ({ ...prevReviews, [index]: response.data.summary }));
      setSelectedReview(response.data.summary);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching summary:", error);
      setReviews((prevReviews) => ({ ...prevReviews, [index]: "Failed to fetch summary" }));
      setSelectedReview("Failed to fetch summary");
      setIsModalOpen(true);
    }
  };

  return (
    <section id="notes" className="notes-section p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Notes</h2>
      <div className="upload-section mb-4">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded mb-2 w-full font"
        />
        <input
          type="file"
          onChange={handleFileUpload}
          className="p-2 border rounded mb-2 w-full"
        />
        {editIndex !== null && <p>Current file: {notes[editIndex]?.fileName}</p>}
        <button onClick={addOrUpdateNote} className="p-2 bg-blue-500 text-white rounded">
          {editIndex !== null ? 'Update' : 'Upload'}
        </button>
      </div>

      <div className="search-container mb-4 flex items-center">
        <h3 className="text-2xl font-bold">Uploaded Notes</h3>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded ml-4"
        />
      </div>

      <div className="notes-grid flex flex-col gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div key={index} className="note-card p-4 w-full">
              <h3>{note.title.toUpperCase()}</h3>
              <p>Uploaded on: {note.date}</p>
              <div className="buttons">
                <a href={note.fileData} download={note.fileName} className="download-btn p-2">Download</a>
                <button onClick={() => editNote(index)} className="modify-btn p-2">Modify</button>
                <button onClick={() => deleteNote(index)} className="delete-btn p-2">Delete</button>
                <button onClick={() => summarizeNote(note.title, index)} className="summarize-btn p-2">Summarize</button>
              </div>
            </div>
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content p-4 rounded shadow-lg bg-white">
            <button className="close-btn text-red-500 float-right" onClick={() => setIsModalOpen(false)}>×</button>
            <h3 className="font-bold text-lg mb-2">{selectedReview ? "Summary" : "No summary available"}</h3>
            <p>{selectedReview}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Notes;


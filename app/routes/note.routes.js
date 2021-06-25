module.exports = (app) => {
    const notes = require('../controllers/note.controller');

    // Create a new Note
    app.post('/notes', notes.createNote);

    // Retrieve all Notes
    app.get('/notes', notes.getNotes);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.getNotesByID);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.updateById);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.deleteById);
}
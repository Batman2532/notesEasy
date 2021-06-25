const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});
const NoteModel = mongoose.model('Note', NoteSchema);

class NotesModel{
    createNote (notesData,callBack) {
        const note = new NoteModel({
            title: notesData.title, 
            content: notesData.content
        });
        note.save({},(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }

    findAll(callBack){
        NoteModel.find({},(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }

    getNotesByID(noteData,callBack){
        NoteModel.findById(noteData.noteId,(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }

    updateNotesById(notes,noteData,callBack){
        NoteModel.findByIdAndUpdate(notes.noteId,{
            title: noteData.title,
            content: noteData.content
        },{new : true},(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        });
    }

    deleteNotesById(notesData,callBack){
        NoteModel.findByIdAndDelete(notesData.noteId,(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }
}
module.exports = new NotesModel()
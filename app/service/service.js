const noteModel = require("../models/note.model")
class NoteService{
    createNotes (notesData,callBack) {
        noteModel.createNote(notesData,(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }

    getNotes(callBack){
        noteModel.findAll((error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }

    getNotesByID(notesInfo,callBack){
        noteModel.getNotesByID(notesInfo,(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }

    updateNotesById(notes,noteData,callBack){
        noteModel.updateNotesById(notes,noteData,(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }

    deleteNotesById(noteData,callBack){
        noteModel.deleteNotesById(noteData,(error,data)=>{
            if(error){
                callBack(error,null)
            }else{
                callBack(null,data)
            }
        })
    }
}
module.exports = new NoteService() 
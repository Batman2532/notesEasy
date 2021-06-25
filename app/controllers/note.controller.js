const noteService = require('../service/service.js')

class NoteController{
    createNote (req, res)  {
        const note = {
            title: req.body.title, 
            content: req.body.content
        }  
        noteService.createNotes(note,(error,data)=>{
            if(error){
                res.status(500).send({
                    success: false, message: "Some error occurred while creating note"
                });
            }else{
                res.status(200).send({
                    success: true, message: "Notes created successfully!", data: data
                });
            }
        })
    }

    getNotes (req, res){
        noteService.getNotes((error,data)=>{
            if(error){
                res.status(500).send({
                    success: false, message: "Some error occurred while retriving note"
                });
            }else{
                res.status(200).send({
                    success: true, message: "Notes retrived successfully!", data: data
                });
            }
        });
    }

    getNotesByID(req,res){
        let notesId = req.params;
        noteService.getNotesByID(notesId,(error,data)=>{
            if(error){
                res.status(500).send({
                    success: false, message: "Some error occurred while retriving note"
                });
            }else{
                res.status(200).send({
                    success: true, message: "Notes retrived successfully!", data: data
                });
            }
        });
    }

    updateById(req,res){
       // Validate Request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        let notes = req.params;
        const noteData = {
            id: req.params.id,
            title: req.body.title,
            content: req.body.content
        }
        noteService.updateNotesById(notes,noteData,(error,data)=>{
            if(error){
                res.status(500).send({
                    success: false, message: "Some error occurred while retriving note"
                })
            }else{
                res.status(200).send({
                    success: true, message: "Notes retrived successfully!", data: data
                })
            }
        });
    }

    deleteById(req,res){
        let noteData = req.params;
        noteService.deleteNotesById(noteData,(error,data)=>{
            if(error){
                res.status(500).send({
                    success: false, message: "Some error occurred while retriving note"
                });
            }else{
                res.status(200).send({
                    success: true, message: "Notes retrived successfully!", data: data
                });
            }
        });
    }
}
module.exports = new NoteController()

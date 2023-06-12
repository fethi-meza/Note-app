
const generator = require("../Utile/generator");
const memstorg = require("../Utile/memory-storge");
const model = require("../module/note-module");

exports.getAllnots = (req, res) => {
    // var seqId = generator.generate();
    // memstorg.store.setItem(seqId, "Hello MemoryStorage!");

    // var keys = memstorg.getKeys(memstorg.store);
    var valuse = memstorg.getvaluse(memstorg.store);

    console.log("valuse is :" + JSON.stringify(valuse));
    return res.status(200).send(JSON.stringify(valuse));
};



//create new note
exports.saveNote = (req, res) => {
    var seqId = generator.generate();
    var createdBy = "admin";
    var createdOn = new Date();


    //req.body
    var title = req.body.title
    var content = req.body.content;

    // err you shoud to have solvethis problem
    if (! title  ) {
        return   res.status(500).send( "pls title and content shoud not be empty " );
    } 
    //add
    var Note = model.Note;
    var Noteobj = new Note(seqId, title, content, createdBy, createdOn);
    memstorg.store.setItem(seqId, Noteobj);

    res.status(201).send("succusfully note is saved");
};








exports.updateNote = (req, res) => {

    var createdBy = "admin";
    var createdOn = new Date();


    //req.body

    var noteID = req.body.noteID;
    var title = req.body.title;
    var content = req.body.content;




    //err you shoud to have solvethis problem
    
// if (!noteID) {
//     return   res.status(500).send( "pls noteID shoud not be empty " );
// }
    
    // if (!title || !content ) {
    //     return   res.status(500).send( "pls title and content shoud not be empty " );
    // } 
    //add
    var Note = model.Note;
    var Noteobj = new Note(noteID, title, content, createdBy, createdOn);
    memstorg.store.setItem(noteID, Noteobj);

    res.status(201).send("succusfully note is updated");

    
};

exports.deleteNote = (req, res) => {
    res.send("deleteNote");
};

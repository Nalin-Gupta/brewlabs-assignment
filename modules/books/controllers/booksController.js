
const _              = require('underscore');
const mongo          = require('./../../../database/mongoLib');
const booksConstants = require('./../constants/constants');



exports.getAllBooks     = getAllBooks;
exports.getBookById     = getBookById;
exports.addBooks        = addBooks;
exports.updateBooks     = updateBooks;
exports.deleteBooks     = deleteBooks;

async function getAllBooks (req , res) {

    try{
        let data = await mongo.getAll(booksConstants.COLLECTIONS.BOOKS_COLLECTION , {});
        return res.send({
            message : "Successful",
            result  : data
        })
    }catch(error){
        return res.status(500).send({
            message : error || "Something Went Wrong"
        })
    }
}
async function getBookById (req , res) {
    try{
        let id = req.params.id;
    
        let data = await mongo.getById(booksConstants.COLLECTIONS.BOOKS_COLLECTION , id)

        if(_.isEmpty(data)){
            return res.status(400).send({
                message : "No Book Found With This ID"
            })
        }
    
        res.send({
            message : "Successful",
            result  : data
        })
    }catch(error){
        return res.status(500).send({
            message : error || "Something Went Wrong"
        })
    }
}

async function updateBooks (req , res) {

    try{
        const id = req.params.id;
        const updates = {
            $set : req.body
        };

        let book = await mongo.getById(booksConstants.COLLECTIONS.BOOKS_COLLECTION ,id);

        if(_.isEmpty(book)){
            return res.status(400).send({
                message : "No Book Found With This ID"
            })
        }
    
        let data = await mongo.update(booksConstants.COLLECTIONS.BOOKS_COLLECTION , id , updates);
    
        res.send({
            message : "Successful",
            result  : data
        })

    }catch(error){
        return res.status(500).send({
            messgae : error || "Something Went Wrong"
        })
    }
}

async function deleteBooks (req , res) {
    try{
        let id = req.params.id;
        let book = await mongo.getById(booksConstants.COLLECTIONS.BOOKS_COLLECTION ,id);

        if(_.isEmpty(book)){
            return res.status(400).send({
                message : "No Book Found With This ID"
            })
        }

        let data = await mongo.remove(booksConstants.COLLECTIONS.BOOKS_COLLECTION ,id)

        if (data.deletedCount === 0) {
            return res.status(400).send({
                message : "No Book Found"
            })
          }

        return res.send({
            message : "Successful",
            data    : data
        })

    }catch(error){
        return res.status(500).send({
            message : error || "Something Went Wrong"
        });
    }
}

async function addBooks(req , res) {
    try{

        let title       = req.body.title;
        let author      = req.body.author;
        let summary     = req.body.summary;

        let data = await mongo.insert(booksConstants.COLLECTIONS.BOOKS_COLLECTION , {
            title,
            author,
            summary
        });
        console.log("Data Inserted "  + JSON.stringify(data));
        return res.status(201).send({
            message : "Successful",
            data    : data
        });
    }catch(error){
        return res.status(500).send({
            message : error || "Something Went Wrong"
        })
    }
}
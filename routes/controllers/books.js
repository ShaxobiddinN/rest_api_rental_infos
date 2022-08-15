const helpers = require('../helpers/helpers')
const bookFileName = "books.json"

let books = []

//Create POST book
function createBook(req,res){
    let book = req.body
    let data = new Date()
    book["created_at"] = data.toISOString()
    book["updated_at"] = data.toISOString()
    books.push(book)
    helpers.saveInJsonFile(books, bookFileName)
    res.sendStatus(200)
}

//GET all books
function getAllBooks(req,res){
    books = helpers.readFromJsonFile(bookFileName)
    res.json(books)
}

//GET one book
function getOneBookById (req,res) {
    let id = parseInt(req.params.bookId)
    let book = books.find(element => element["id"] === id)
    // console.log(id)
    // console.log(book)

    if(book !== undefined){
        res.json(book)
        res.status(200)
    } else{
        res.sendStatus(404)
    }
}

//PUT update book
 function updateBookById(req,res) {
    let id = parseInt(req.params.bookId)
    let index = books.findIndex(element => element["id"] === id)
    let book = req.body
    if(index !== -1){
        book["created_at"] = books[index]["created_at"]
        book["updated_at"] = new Date().toISOString()
        books[index] = req.body
        helpers.saveInJsonFile(books, bookFileName)
        res.sendStatus(200)
    } else {
        res.status(404)
        res.json({'message': 'Cannot update ' + id})
    }
}

//DELETE delete book
function deleteBookById (req,res){
    let id = parseInt(req.params.bookId)
    let index = books.findIndex(element => element["id"] === id)
    if(index !== -1){
        books.splice(index,1)
        helpers.saveInJsonFile(books, bookFileName)
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
}

//  Task-5. Search API to retrieve book list by title.
function searchBookByTitle(req,res) {
    let bookTitle = req.params.bytitle
    let bookName = books.filter(element => element["title"] === bookTitle)

    if(bookName){
        res.json(bookName)
    }
    else{
        res.sendStatus(404)
    }
}


module.exports = {
    createBook,
    getAllBooks,
    getOneBookById,
    updateBookById,
    deleteBookById,
    searchBookByTitle
}

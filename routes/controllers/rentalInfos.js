const helpers = require('../helpers/helpers')
const rentalInfosFileName = "rentalInfos.json"
const customersController = require('../controllers/customers')
// const books = require('../controllers/books')



let rental_infos = []

function createRental (req,res) {
    let customer_id = req.body.customer_id
    let book_id = req.body.book_id
    let checkCustomer = customers.find(element => element["id"] === customer_id)
    let checkBook = books.find(element => element["id"] === book_id)
    // console.log(checkCustomer)
    // console.log(checkBook)

    if(checkCustomer && checkBook){
    let rental = req.body
    let date = new Date()
    rental["booked_day"] = date.toISOString().split('T')[0]
    rental["created_at"] = date.toISOString()
    rental["updated_at"] = date.toISOString()
    rental_infos.push(rental)
    helpers.saveInJsonFile(rental_infos, rentalInfosFileName) 
    res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
}

/* function returnedBook(req,res) {
    let customer_id = parseInt(req.params.cid)
    let book_id = parseInt(req.params.bid)
    let checkCustomer = customers.findIndex(element => element["id"] === customer_id)
    let checkBook = books.findIndex(element => element["id"] === book_id)


    if(checkCustomer && checkBook){
    let rental = req.body
    let date = new Date()
    // rental["booked_day"] = rental_infos[index]["booked_day"]
    rental["updated_at"] = date.toISOString()
    rental["returned_day"] = date.toISOString().split('T')[0]

    
    rental_infos["returned_day"] = rental
    res.sendStatus(200)
    }  
    else {
        res.sendStatus(404)
    }
} */

function getAllRentalInfos(req,res){
    helpers.readFromJsonFile(rentalInfosFileName)
    res.json(rental_infos)
    // saveInJsonFile(rental_infos, rentalInfosFileName)
}


//6. API to retrieve given customer rental infos.
function getCustomerAllBooks(req,res) {
    let id = parseInt(req.params.customerId)
    let findCustomer = rental_infos.filter(element => element["customer_id"] === id)
    // console.log(findCustomer)
    if(findCustomer){
        res.json(findCustomer)
        res.status(200)
    } else {
        //else condition not working
        res.status(404)
        res.json("No such user exists")
    }
}



module.exports = {
    createRental,
    // returnedBook,
    getAllRentalInfos,
    getCustomerAllBooks
}






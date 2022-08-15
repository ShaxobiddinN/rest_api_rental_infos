
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8001
const customerController = require('./routes/controllers/customers')
const bookController = require('./routes/controllers/books')
const rentalInfosController = require('./routes/controllers/rentalInfos')

app.use(bodyParser.json())

// let customers = [{
//     "id": 1,
//     "firstname": "John",
//     "lastname": "Doe",
//     "email": "john.doe@example.com",
//     "phone": "+998987654321",
//     "date_of_birth": "20-04-1998",
//     "address": "221B Baker Street, London",
//     "created_at": "2022-03-26T09:08:44.000000Z",
//     "updated_at": "2022-03-26T09:08:44.000000Z"
// },
// {
//     "id": 3,
//     "firstname": "bobur",
//     "lastname": "Boburov",
//     "email": "john.doe@example.com",
//     "phone": "+998987654321",
//     "date_of_birth": "20-04-1998",
//     "address": "221B Baker Street, London",
//     "created_at": "2022-03-26T09:08:44.000000Z",
//     "updated_at": "2022-03-26T09:08:44.000000Z"
// }
// ]

// let books = [{
//   "id": 1,
//   "isbn": "978-0393058000",
//   "title": "Sherlock Holmes",
//   "gender": "fictional detective",
//   "description": "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional detective created by British author Sir Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
//   "author": "Arthur Conan Doyle",
//   "publish_year": 2006,
//   "cover_photo_url": "https://images-na.ssl-images-amazon.com/images/I/91hJe52QzjL.jpg",
//   "created_at": "2022-03-26T09:08:44.000000Z"
// },
// {
//     "id": 4,
//   "isbn": "978-0393058000",
//   "title": "Rich dad",
//   "gender": "fictional detective",
//   "description": "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional detective created by British author Sir Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
//   "author": "Arthur Conan Doyle",
//   "publish_year": 2019,
//   "cover_photo_url": "https://images-na.ssl-images-amazon.com/images/I/91hJe52QzjL.jpg",
//   "created_at": "2022-03-26T09:08:44.000000Z"
// },
// {
//     "id": 7,
//   "isbn": "978-0393058000",
//   "title": "Harry Poter",
//   "gender": "fictional detective",
//   "description": "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional detective created by British author Sir Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
//   "author": "Arthur Conan Doyle",
//   "publish_year": 2015,
//   "cover_photo_url": "https://images-na.ssl-images-amazon.com/images/I/91hJe52QzjL.jpg",
//   "created_at": "2022-03-26T09:08:44.000000Z"
// }]

// let rental_infos =[
// {  "customer_id": 1,
//     "book_id": 1,
//     "booked_day": "",
//     "returned_day": "",
//     "created_at": "2022-03-26T09:08:44.000000Z",
//     "updated_at": "2022-03-26T09:08:44.000000Z" }
//     /*{  "customer_id": 1,
//     "book_id": 1,
//     "booked_day": "2022-05-22",
//     "returned_day": "2022-09-26",
//     "created_at": "2022-03-26T09:08:44.000000Z",
//     "updated_at": "2022-03-26T09:08:44.000000Z" }*/
//     /*{  "customer_id": 1,
//     "book_id": 1,
//     "booked_day": "2022-05-22",
//     "returned_day": "2022-09-26",
//     "created_at": "2022-03-26T09:08:44.000000Z",
//     "updated_at": "2022-03-26T09:08:44.000000Z" }*/
//     /*{  "customer_id": 2,
//     "book_id": 1,
//     "booked_day": "2022-05-22",
//     "returned_day": "2022-09-26",
//     "created_at": "2022-03-26T09:08:44.000000Z",
//     "updated_at": "2022-03-26T09:08:44.000000Z" }*/
//     /*{  "customer_id": 3,
//     "book_id": 1,
//     "booked_day": "2022-05-22",
//     "returned_day": "2022-09-26",
//     "created_at": "2022-03-26T09:08:44.000000Z",
//     "updated_at": "2022-03-26T09:08:44.000000Z" }*/
// ]



//--------------------------------------------- customers ---------------------------------------------
//create post Customer
app.post('/customer/create', customerController.createCustomer)

//get all Customer
app.get('/customers', customerController.getAllCustomers)

//get one Customer by id
app.get('/customer/:customerId', customerController.getOneCustomer)

//  get Customer firstName and lastName 
app.get('/customer/name/:name', customerController.getOneCustomerByName)

//update PUT Customer
app.put('/customer/update/:customerId', customerController.updateCustomerById)

//Delete DELETE Customer
app.delete('/customer/delete/:customerId', customerController.deleteCustomerById)


//---------------------------------------- books ----------------------------------------------
//Create POST book
app.post('/book/create', bookController.createBook)

//GET all books
app.get('/book',bookController.getAllBooks)

//GET one book
app.get('/book/:bookId', bookController.getOneBookById)

//PUT update book
 app.put('/book/update/:bookId', bookController.updateBookById) 

//DELETE delete book
app.delete('/book/delete/:bookId', bookController.deleteBookById)

//  Task-5. Search API to retrieve book list by title.
app.get('/book/title/:bytitle', bookController.searchBookByTitle)


//-------------------------------------- rental_infos -----------------------------------------
//  Task-3. Create API for rental_infos.
app.post('/rental_infos', rentalInfosController.createRental)

/* app.put('/rentalInfos/update/:cid/:bid', rentalInfosController.returnedBook) */

app.get('/rental',rentalInfosController.getAllRentalInfos)


//6. API to retrieve given customer rental infos.
app.get('/rental/customer_infos/:customerId',rentalInfosController.getCustomerAllBooks)


app.listen(PORT,()=>{
    console.log("Server running on port: ",PORT)
})


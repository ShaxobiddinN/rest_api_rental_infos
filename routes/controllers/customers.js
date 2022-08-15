const helpers = require('../helpers/helpers')
const customerFileName = "customers.json"

let customers = []



//  Task-1. CRUD APIs for customers.
//create post Customer
function createCustomer(req,res) {
    let customer = req.body
    let date = new Date()
    customer['created_at'] = date.toISOString()
    customer['updated_at'] = date.toISOString()
    customers.push(customer)
    helpers.saveInJsonFile(customers, customerFileName)
    res.sendStatus(200) 
}

//get all Customer
function getAllCustomers(req,res){
    customers = helpers.readFromJsonFile(customerFileName)
    res.json(customers)
}

//get one Customer by id
function getOneCustomer(req,res) {
    // customers = helpers.readFromJsonFile(customerFileName)
    let id = parseInt(req.params.customerId)
    let customer = customers.find(element => element['id'] === id)
    if(customer !== undefined){
        res.json(customer)
    } else {
        res.status(404)
        res.json({'message':'Not found'})
    }
}

//update PUT Customer
function updateCustomerById(req,res){
    let id = parseInt(req.params.customerId)
    let index = customers.findIndex(element => element['id'] === id)
    let customer = req.body
    if(index !== -1){
        let date = new Date()
        customer["created_at"] = customers[index]["created_at"]
        customer["update_at"] = date.toISOString()
        customers[index] = req.body
        helpers.saveInJsonFile(customers, customerFileName)
        res.sendStatus(200)
    } else {
        res.status(404)
        res.json({'message':'Cannot update '+ id})
        
    }
}

//Delete DELETE Customer
function deleteCustomerById(req,res){
    let id = parseInt(req.params.customerId)
    let index = customers.findIndex(customer => customer['id'] === id)
    if(index !== -1){
        customers.splice(index,1)
        helpers.saveInJsonFile(customers, customerFileName)
        res.sendStatus(200)
    } else{
        res.sendStatus(404)
    }
}


//  Task-4.  Search API to retrieve customer list by name(firstname and lastname) 
//  get Customer firstName and lastName 
function getOneCustomerByName(req,res) {
let name = req.params.name
let customerName = customers.filter(element => element["firstname"] === name)
let customerLastname = customers.filter(element => element["lastname"] === name)

    if(customerName){
        res.json(customerName)
    }
    else if(customerLastname){
        res.json(customerLastname)
    }
    else {
        res.sendStatus(404)
    }
}


module.exports = {
    createCustomer,
    getAllCustomers,
    getOneCustomer,
    getOneCustomerByName,
    updateCustomerById,
    deleteCustomerById
}
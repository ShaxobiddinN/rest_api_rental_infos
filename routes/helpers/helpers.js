const fs = require('fs')

function saveInJsonFile(data, fileName){
    let jsonData = JSON.stringify(data, null, "\t")

    fs.writeFile(fileName, jsonData, function(err){
        if(err){
            console.log(err)
        }
    })
}

function readFromJsonFile(fileName) {
    let jsonData = fs.readFileSync(fileName, 'utf8')
    let data = JSON.parse(jsonData)
    return data 
} 

module.exports = {
    saveInJsonFile,
    readFromJsonFile
}
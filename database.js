const { MongoClient } = require('mongodb')
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://testUser:FeiFei75@testcluster.j4agrqt.mongodb.net/?retryWrites=true&w=majority');

let dbConnection
let uri = 'mongodb+srv://testUser:FeiFei75@testcluster.j4agrqt.mongodb.net/?retryWrites=true&w=majority'

db = 'UserInformation'



module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db(db)
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}
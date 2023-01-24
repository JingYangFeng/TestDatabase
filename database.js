const { MongoClient } = require('mongodb')
const mongoose = require("mongoose");

let dbConnection
let uri = 'mongodb+srv://testUser:FlyHigh22@testcluster.j4agrqt.mongodb.net/?retryWrites=true&w=majority'

db = 'UserInformation'
mongoose.connect('mongodb+srv://testUser:FlyHigh22@testcluster.j4agrqt.mongodb.net/' + db + '?retryWrites=true&w=majority');



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
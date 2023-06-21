const { MongoClient } = require('mongodb')
const mongoose = require("mongoose");

// Own testing
// ====================================================================================================================
let dbConnection
// let uri = ''

// db = 'UserInformation'
// mongoose.connect('');

// P:HC testing
// // // ====================================================================================================================
let uri = ''

db = 'spotstitch'
mongoose.connect('mongodb+srv://dbadmin:t5bIj0bVJHdrXLvB@phc-cluster.sxtfgeu.mongodb.net/' + db + '?retryWrites=true&w=majority');
// ====================================================================================================================


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

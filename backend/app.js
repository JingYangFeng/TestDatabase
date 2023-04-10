const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./database');

const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')


// init app & middleware
const app = express();

// allow cross-origin requests
app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))




// db connection
let db

let coll = '/users'


connectToDb((err) => {

    // Listening to request after successfully connecting to DB
    if (!err) {
        app.listen(3000, () => {
            console.log('app is listening on port 3000')
        })
        db = getDb()
        
    } else {
        console.log('something is wrong with connecting')
    }
})




// routes
app.get(coll, (req, res) => {
    let users = []

    // connects to collection
    db.collection(coll)
        .find()                                                       // Cursor, finds all instances of users
        .sort({ username: 1 })                                        // toArray puts all instances in an array and lets us look at it at the same time
        .forEach(user => users.push(user))                            // forEach iterates over each instance and we look at it one at a time
        .then(() => {
            res.status(200).json(users)
        })

    .catch(() => {
        res.status(500).json({ error: 'Could not fetch documents' })
    })
})


// Finds users based on id
app.get(`${coll}/id/:id`, (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection(coll)
            .findOne({ _id: ObjectId(req.params.id) })
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not fetch documents' })       
            })
    } else {
        res.status(500).json({ error: 'Id is not valid' })
    }
})


// Finds users based on username
app.get(`${coll}/:username`, (req, res) => {

    if (ObjectId.isValid(req.params.id)) { 
        db.collection(coll)
            .findOne({ username: req.params.username })
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not fetch documents' })                
            })
    } else {
        res.status(500).json({ error: 'Id is not valid' })
    }
})
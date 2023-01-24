const graphql = require('graphql')
const { GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID
} = graphql

const _ = require('lodash')
const User = require('../models/user')


// dummy data
var dummyUsers = [
    { name: 'Jason1', age:'20', username:'jasonjason111', id:'1' },
    { name: 'Ethan', age:'2', username:'twoTwo', id:'2' },
    { name: 'September', age:'33', username:'threeTh3', id:'3' }
]

var dummyEmails = [
    { email: 'Jason@gmail.com', password: '123', id:'1' },
    { email: 'Ethan@gmail.com', password: 'test', id:'2' },
    { email: 'September@gmail.com', password: 'password123', id:'3' },
]


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        username: { type: GraphQLString }
    })
})


const EmailType = new GraphQLObjectType({
    name: 'Email',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                // to get data from database / other source
                return _.find(dummyUsers, { id: args.id })
                
            }
        },

        email: {
            type: EmailType,
            args: { id: {type: GraphQLID }},
            resolve(parent, args){
                // to get data from database / other source
                return _.find(dummyEmails, { id: args.id })
                
            }
        }
    }
})


// Mutating data (Adding, editing, deleting)
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                username: { type: GraphQLString}
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    age: args.age,
                    username: args.username
                })
                user.save()
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
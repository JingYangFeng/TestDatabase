import { gql } from "apollo-boost"



// Search
const GET_USERS_QUERY = gql`
    {
        users {
            id,
            username,
            name,
            age,
            badge,
            inventory,
        }
    }
`

const GET_USER = gql`
    query user( $username: String!, $email: String! ) {
        user( username: $username, email: $email ) {
            
            id,
            username,
            name,
            email,
            password,
            age,
            inventory,
            badge

        }
    }
  
`



// Mutate
const ADD_USER = gql`
    mutation addUser( $name: String!, $username: String!, $age: Int!, $email: String!, $password: String! ) {
        addUser( name: $name, username: $username, age: $age, email: $email, password: $password ) {
            name,
            username,
            age,
            email,
            password
        }
    }
`

export { GET_USERS_QUERY, ADD_USER, GET_USER, }
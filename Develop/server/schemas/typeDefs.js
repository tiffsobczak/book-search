const { gql } = require('apollo-server-express');


const typeDefs = gql `

type Query{
    me: User
}

type Mutation {
    login: (email: String, password: String): Auth
    addUser: (username: string, email: string, password: String): Auth
    saveBook:  (authors: [String], description: String, title: String, bookId: String, image: ?????, link: String)
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: ?????????
    link: 
  }

  type Auth {
    token: ID! 
    user: User
  }

`;

module.exports = typeDefs;

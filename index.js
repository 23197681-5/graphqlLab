const { ApolloServer } = require('apollo-server');
const { userSchema } = require('user/schema/user.graphql')
const users = [{
    nome: "Willian",
    ativo: true
},
{
    nome: "Marcia Baila",
    ativo: false
}];

const typeDefs = [userSchema];
const server = new ApolloServer({typeDefs, resolvers});
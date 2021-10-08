const { GraphQLScalarType } = require('graphql');


const userResolvers = {
        RolesTypes: {
            ESTUDANTE: "ESTUDANTE",
            DOCENTE: "DOCENTE",
            COORDENACAO: "DOCENTE"
        },
        //pode ser usado apra validar o valor:
        DateTime: new GraphQLScalarType({
            name: 'DateTime',
            description: 'string of date an hour ISO-8601',
            serialize: (value) => value.toISOString(),
            parseValue: (value) => new Date(value),
            parseLiteral: (ast) => new Date(ast.value)
        }),
        Query: {
            users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
            user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
        },
        Mutation: {
            addUser: async(root, { user }, { dataSources }) => dataSources.usersAPI.addUser(user),
            updateUser: async(root, newData, { dataSources }) => dataSources.usersAPI.updateUser(newData),
            deleteUser: async(root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
        } //root = raiz, resolver raiz, args, context(contexto paara trabalhar)
        //O argumento context é um objeto que a função resolver recebe com informações e dados para resolver a query — por exemplo, como acessar os dados.
        // a camada dataSource é responsável por se conectar aos endpoints REST através de seus métodos, como .get().
    }
    //args =  id, dados para inserir
    //datasources permissões
    //info representa a arqvore de query e explica novosDadospara o resolver o que retornar
module.exports = userResolvers;
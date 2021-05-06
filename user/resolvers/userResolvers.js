const userResolvers = {
    Query:{
        users: (root, args, { dataSources }) =>  dataSources.usersAPI.getUsers(),
    }
}
//args =  id, dados para inserir
//datasources permissões
//info representa a arqvore de query e explica para o resolver o que retornar
module.exports = userResolvers;
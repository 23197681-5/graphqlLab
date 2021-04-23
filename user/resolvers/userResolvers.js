const arrayUsers = [{
    nome: "Willian",
    ativo: true
},
{
    nome: "Marcia Baila",
    ativo: false
}];

const userResolvers = {
    Query:{
        users: ()=> arrayUsers,
        primeiroUser: ()=> arrayUsers[0]
    }
}

module.exports = userResolvers;
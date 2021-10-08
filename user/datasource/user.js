const { RESTDataSource } = require("apollo-datasource-rest")

class UsersAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
        this.customResponse = {
            code: 200,
            message: "Success"
        }
    }

    async getUsers() {
        const users = await this.get('/users')
        return users.map(async user => ({
            id: user.id,
            nome: user.nome,
            email: user.email,
            ativo: user.ativo,
            role: await this.get(`/roles/${user.role}`)
        }))
    }

    async getUserById(id) {
        var user = this.get(`/users/${id}`) //template string
        user.role = await this.get(`/roles/${user.role}`);
        return user;
    }
    async addUser(user) {
        const users = await this.get('/users')
        user.id = user.length + 1;
        const role = await this.get(`roles?type=${user.role}`)
        await this.post('users', {...user, role: role[0].id }) //..object = spred
        return ({...users, role: role[0] })
    }
    async updateUser(newsValues) {
        const role = await this.get(`/roles/${newsValues.user.role}`);
        await this.put(`users/${newsValues.id}`, {...novosDados.user, role: role[0].id })
        return ({
            ...this.customResponse,
            user: {...newsValues.user },
            role: role[0]
        })
    }
    async deleteUser(ID) {
        console.log("id passado", ID)
        await this.delete(`users/${ID}`);
        return this.customResponse;
    }
}

module.exports = UsersAPI
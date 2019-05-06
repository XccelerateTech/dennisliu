
module.exports = class ServiceSignup {
    constructor(knex) {
        this.knex = knex;
    }
    save(username, password) {
        return new Promise((resolve, reject) => {
            let query = this.knex.select('id')
                .from('users')
                .where('name', username)
            return query.then((rows) => {
                console.log(rows)
                if( rows == '') {
                    resolve(username)
                    return this.knex.insert({
                        'name': username,
                        'password': password
                    }).into('users')
                } else {
                    reject(username)
                }
            })
        }) 
    }
}
// const jsonfile = require('jsonfile');
// const path = require('path');

module.exports = class Service {
    constructor(knex) {
        this.knex = knex
    }


    list(user) {
        let query = this.knex.select('note.id', 'note.notes')
            .from('note')
            .innerJoin('users', 'note.user_id', 'users.id')
            .where('users.username', user)
            .orderBy('note.id', 'asc')
        return query.then((rows) => {
            return rows.map((row) => ({
                id: row.id,
                note: row.notes
            }));
        });
    }


    add(user, note) {
        let query = this.knex.select('id')
            .from('users')
            .where('users.username', user)
        return query.then((rows) => {
            console.log(rows[0].id)
            return this.knex.insert({notes: note, user_id: rows[0].id})
                .into('note')
        })
    }


    change(id, note) {
        console.log('change')
        return this.knex('note')
            .update({notes: note})
            .where('id', id)
    }

    delete(id) {
        console.log('delete')
        return this.knex('note')
            .where('id', id)
            .delete()
    }
}
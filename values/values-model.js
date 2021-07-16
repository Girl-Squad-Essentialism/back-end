const db = require('../data/connection');

module.exports = {
    find,
    // findByUserId,
    findById,
    add,
}

// get all values - find
// VALUES
function find() {
    return db("values").select("id", "value").orderBy("id")
}

// get value by ID - findById
// VALUES
function findById(id) {
    return db("values").where({ id }).first()
}

// get user's values - findByUserId
// USER_VALUES
// function findByUserId(uid) {
    
// }

// add a value - add
// USER_VALUES
function add(value) {
    return db("user_values")
        .insert(value)
        .then(() => {
            return value
        })
}

// edit a value's priority or description - edit
// USER_VALUES
// function edit() {

// }

// remove a value they added to their list - delete
// USER_VALUES
// async function remove(uid, vid) {
//     return await findByUserId(uid)
//         .where({ vid })
// }

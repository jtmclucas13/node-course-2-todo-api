const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// const id = '5c2942285b925eec4f4aadbb11';

// if (!ObjectID.isValid(id)) {
//     return console.log('Id not valid');
// }

// Todo.find({
//     _id: id,
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id,
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }

//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5c27bcad44e04d412d1f2ef2')
    .then((user) => {
        if (!user) {
            return console.log('Id not found');
        }

        console.log('User by id', user);
    })
    .catch((e) => console.log(e));

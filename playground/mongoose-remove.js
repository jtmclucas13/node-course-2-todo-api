const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// // Todo.findOneAndRemove()
// // Todo.findByIdAndRemove()

Todo.findOneAndRemove({ _id: '5c3d4d8b212eb73367d13580' }).then((todo) => {

});

Todo.findByIdAndRemove('5c3d4d8b212eb73367d13580').then((todo) => {
    console.log(todo);
});

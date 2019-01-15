const mongoose = require('mongoose');

// start local db server with ~/mongo/bin/mongod --dbpath ~/mongo-data
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose,
};

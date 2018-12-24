const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'Joshua McLucas' }).toArray().then((document) => {
        console.log(`Users count: ${document.length}`);
        console.log(JSON.stringify(document, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    db.close();
});

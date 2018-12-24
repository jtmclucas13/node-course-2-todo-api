const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({ name: 'Joshua McLucas' }).then((result) => {
        console.log('Deleted ', result.result.n, ' documents');
    });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c211b73df0d1a7fa360fa5c') }).then((result) => {
        console.log('Deleted document:', JSON.stringify(result.value, undefined, 2));
    });

    // db.close();
});

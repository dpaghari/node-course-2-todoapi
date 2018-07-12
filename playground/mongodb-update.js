const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server');

  // findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b1acea6e48dbfdcd97b481c')
    },
    {
      $set: { completed: false }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
  });

  // db.close();
});

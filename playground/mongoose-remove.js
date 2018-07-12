const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// get doc back
// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5b479e91f5ecff49dc157d98'}).then((todo) => {

});



Todo.findByIdAndRemove('5b479e91f5ecff49dc157d98').then((todo) => {
  console.log(todo);
});

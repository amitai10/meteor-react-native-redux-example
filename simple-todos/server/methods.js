import { Tasks } from '../imports/api/tasks.js';

Meteor.methods({
  'addItem': function (text) {
    Tasks.insert({
      createdAt: new Date(),
      text: text
    });
  },

  'removeItem': function (_id) {
    Tasks.remove({ _id: _id });
  }
});
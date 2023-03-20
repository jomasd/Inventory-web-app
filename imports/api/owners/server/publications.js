import { Meteor } from 'meteor/meteor';
import { OwnersCollection } from '../owners';

// Publish all owners to all clients
Meteor.publish('owners', function () {
  return OwnersCollection.find();
});

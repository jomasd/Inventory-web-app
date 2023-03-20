import { Meteor } from 'meteor/meteor';
import { LocationsCollection } from '../locations.js';

Meteor.publish('locations', function publishLocations() {
  return LocationsCollection.find();
});
import { Meteor } from 'meteor/meteor';
import { ContainersCollection } from '../containers.js';

// We publish the entire Containers collection to all clients.
// In order to be fetched in real-time to the clients
Meteor.publish("containers", function () {
    return ContainersCollection.find();
});
Meteor.publish('container', function (containerId) {
    return ContainersCollection.find({ _id: containerId });
});

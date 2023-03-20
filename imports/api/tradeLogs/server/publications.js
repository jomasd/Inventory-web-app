import { Meteor } from 'meteor/meteor';
import { TradeLogsCollection } from '../tradeLogs';

Meteor.publish('tradeLogs', function() {
  return TradeLogsCollection.find();
});

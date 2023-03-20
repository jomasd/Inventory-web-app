import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const ItemsCollection = new Mongo.Collection('items');

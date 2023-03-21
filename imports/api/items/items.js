import { Mongo } from 'meteor/mongo';
import { Collection2 } from 'meteor/aldeed:collection2';
import SimpleSchema from "simpl-schema";

export const ItemsCollection = new Mongo.Collection('items');


const ContainerReferenceSchema = new SimpleSchema({
  id: String,
});

const ItemAttributesSchema = new SimpleSchema({
  brand: {
    type: String,
    
  },
  model: {
    type: String,
    optional: true,
  },
  material: {
    type: String,
    optional: true,
  },
  dimensions: new SimpleSchema({
    length: {
      type: Number,
      label: "Length",
    },
    width: {
      type: Number,
      label: "Width",

    },
    height: {
      type: Number,
      label: "Height",

    },
  }),
  color: String,
  expirationDate: {
    type: Date,
    optional: true,
  },
  warranty: new SimpleSchema({
      startDate: {
        type: Date,
        optional: true,
      },
      endDate: {
        type: Date,
        optional: true,
      },
      coverage: {
        type: String,
        optional: true,
      },
    }),
});

const ItemSchema = new SimpleSchema({
  itemName: String,
  itemType: String,
  itemWeight: Number,
  itemDescription: String,
  container: {
    type: ContainerReferenceSchema,
    optional: true,
  },
  itemAttributes: {
    type: ItemAttributesSchema,
    optional: true,
  },
  createdAt: Date,
});
  
  ItemsCollection.attachSchema(ItemSchema);
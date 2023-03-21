import { Mongo } from 'meteor/mongo';
import { Collection2 } from 'meteor/aldeed:collection2';

export const ContainersCollection = new Mongo.Collection('containers');

const ContainerAttributesSchema = new SimpleSchema({
    brand: { type: String },
    model: { type: String },
    material: { type: String },
    dimensions: {
      type: new SimpleSchema({
        length: { type: Number },
        width: { type: Number },
        height: { type: Number },
      }),
    },
    color: { type: String },
    warranty: {
      type: new SimpleSchema({
        startDate: { type: Date },
        endDate: { type: Date },
        coverage: { type: String },
      }),
      optional: true,
    },
  });
  
  const ContainersSchema = new SimpleSchema({
    containerName: { type: String },
    containerType: { type: String },
    containerCapacity: { type: Number },
    containerWeight: { type: Number },
    containerDescription: { type: String },
    containerAttributes: { type: ContainerAttributesSchema },
    createdAt: { type: Date },
    items: { type: [String], optional: true },
  });
  
  ContainersCollection.attachSchema(ContainersSchema);
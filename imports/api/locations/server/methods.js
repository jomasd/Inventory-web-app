import { LocationsCollection } from '../locations';

export async function insertLocation({ name, description, type, coordinates, building, room }) {
    await LocationsCollection.insertAsync({
      name,
      description,
      type,
      coordinates,
      building,
      room,
      createdAt: new Date(),
    });
}
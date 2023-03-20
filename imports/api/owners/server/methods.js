
import { OwnersCollection } from '../../owners/owners';

export async function insertOwners({ ownerName, ownerType, ownerLevel, ownerBalance  }) {
 
  // Insert the trade log with the necessary information
  await OwnersCollection.insertAsync({
    ownerName,
    ownerType,
    ownerLevel,
    ownerBalance,
    createdAt: new Date(),
  });
}
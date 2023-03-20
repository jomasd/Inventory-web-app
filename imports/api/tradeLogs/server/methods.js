import { TradeLogsCollection } from '../tradeLogs';
import { OwnersCollection } from '../../owners/owners';
import { ItemsCollection } from '../../items/items';

export async function insertTradeLog({ timestamp, buyerId, sellerId, itemId, quantity, price }) {
  // Get the buyer, seller, and item objects from their respective collections
  const item = await ItemsCollection.findOneAsync({ _id: itemId });

  // Insert the trade log with the necessary information
  await TradeLogsCollection.insertAsync({
    timestamp,
    buyerId,
    sellerId,
    itemId,
    quantity,
    price,
  });
}
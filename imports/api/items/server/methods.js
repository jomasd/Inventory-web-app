import { ItemsCollection } from '../items';

export async function InsertItems({ itemName, itemType, itemWeight, itemDescription, container, itemAttributes }) {
    await ItemsCollection.insertAsync({
      itemName,
      itemType,
      itemWeight,
      itemDescription,
      container: {
        id: container.id,
      }, 
      itemAttributes: {
        brand: itemAttributes.brand,
        model: itemAttributes.model,
        material: itemAttributes.material,
        dimensions: {
          length: itemAttributes.dimensions.length,
          width: itemAttributes.dimensions.width,
          height: itemAttributes.dimensions.height,
        },
        color: itemAttributes.color,
        expirationDate: itemAttributes.expirationDate,
        warranty: itemAttributes.warranty
          ? {
              startDate: itemAttributes.warranty.startDate,
              endDate: itemAttributes.warranty.endDate,
              coverage: itemAttributes.warranty.coverage,
            }
          : null,
      },
      createdAt: new Date(),
    });
  }
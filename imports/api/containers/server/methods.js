import { ContainersCollection } from '../containers';

export async function InsertContainers({ containerName, containerType, containerCapacity, containerWeight, containerDescription, containerAttributes }) {
    await ContainersCollection.insertAsync({
        containerName,
        containerType,
        containerCapacity,
        containerWeight,
        containerDescription,
        containerAttributes: {
          brand: containerAttributes.brand,
          model: containerAttributes.model,
          material: containerAttributes.material,
          dimensions: {
            length: containerAttributes.dimensions.length,
            width: containerAttributes.dimensions.width,
            height: containerAttributes.dimensions.height,
          },
          color: containerAttributes.color,
          warranty: containerAttributes.warranty
            ? {
                startDate: containerAttributes.warranty.startDate,
                endDate: containerAttributes.warranty.endDate,
                coverage: containerAttributes.warranty.coverage,
              }
            : null,
        },
        createdAt: new Date(),
    });
}
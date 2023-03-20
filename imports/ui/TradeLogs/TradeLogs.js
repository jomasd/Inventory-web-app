import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { TradeLogsCollection } from '/imports/api/tradeLogs/tradeLogs.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export const TradeLogsList = () => {
  const isLoading = useSubscribe('tradeLogs');
  const tradeLogs = useFind(() => TradeLogsCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  console.log(tradeLogs);
  return (
    <div>
      <h2>Trade Logs:</h2>
      <ListGroup>
        {tradeLogs.map((tradeLog) => (
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={tradeLog._id}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{tradeLog.timestamp.toDateString()}</div>
              {tradeLog.buyerId} bought {tradeLog.tradeQuantity} {tradeLog.itemId} from {tradeLog.sellerId} for {tradeLog.tradePrice} each.
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

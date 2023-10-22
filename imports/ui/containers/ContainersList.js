import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { ContainersCollection } from '/imports/api/containers/containers.js';
import { List, Avatar, Space, Tooltip } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { styled } from '@mui/system';

// Styled components, you can further customize these for your game-like UI
const GameCard = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.15s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ContainersList = () => {
  const isLoading = useSubscribe('containers');
  const containers = useFind(() => ContainersCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={containers}
      renderItem={container => (
        <GameCard>
          <List.Item
            key={container._id}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" // Replace with your game-themed images or icons
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={container.avatar} />} // Replace with container or game-themed avatar
              title={<a href={`/containers/${container._id}`}>{container.containerName}</a>}
              description={container.containerType}
            />
            {container.containerDescription}
            <Tooltip title="Container capacity">
              <div>{container.containerCapacity} items / {container.containerWeight} kg</div>
            </Tooltip>
          </List.Item>
        </GameCard>
      )}
    />
  );
};

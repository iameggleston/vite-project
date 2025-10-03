import React from 'react';

type ItemType = {
  item: {
    category: object;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    id: string;
    title: string;
  } | null
}

const Item: React.FC<ItemType> = ({item}) => {
  if(!item) {
    return <p>No data!</p>;
  }
  return(
    <li key={item.id}>
      <a href={`/news/${item.id}`}>{item.title}</a>
    </li>
  );
};

export default Item;

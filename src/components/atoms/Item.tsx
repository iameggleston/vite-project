import React from 'react';
import { Article } from '~/redux/NewsSlice';

const Item: React.FC<Article> = (props) => {
  if (!props) {
    return <p>No data!</p>;
  }
  return (
    <li key={props.title}>
      <a href={props.url}>{props.title}</a>
    </li>
  );
};

export default Item;

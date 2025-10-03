import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getNews } from '~/redux/NewsSlice';
import { useSelector, AppDispatch } from '~/redux/Store';
import Heading from '@/components/atoms/Heading';
import Item from '@/components/atoms/Item';

export const NewsBlock: React.FC = () => {
  const { news, error } = useSelector((state) => state.news);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div>
      <Heading text='ニュース' />
      {error && <p>データの取得に失敗しました</p>}
      <ul>
        {news &&
          news.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
      </ul>
    </div>
  );
};

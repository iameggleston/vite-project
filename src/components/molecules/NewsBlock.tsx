import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getNews, Article } from '~/redux/NewsSlice';
import { useSelector, AppDispatch } from '~/redux/Store';
import Heading from '@/components/atoms/Heading';
import Item from '@/components/atoms/Item';

export const NewsBlock: React.FC = () => {
  const { articles, status } = useSelector((state) => state.news);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div>
      <Heading text='ニュース' />
      {status === 'error' && <p>データの取得に失敗しました</p>}
      {status === 'ok' && (
        <ul>
          {articles &&
            articles.map((item: Article) => {
              return <Item key={item.title} {...item} />;
            })}
        </ul>
      )}
    </div>
  );
};

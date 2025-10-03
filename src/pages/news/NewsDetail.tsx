import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSelector, AppDispatch } from '~/redux/Store';
import { getNews } from '~/redux/NewsSlice';

const Blog: React.FC = () => {
  const { news, error } = useSelector((state) => state.news);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const news_content = news.find((element) => {
    return element.id === id;
  });
  return (
    <>
      {news_content && (
        <main>
          <h1>{news_content.title}</h1>
          <p>{news_content.publishedAt}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${news_content.content}`,
            }}
          />
        </main>
      )}
      {error && <p>データの取得に失敗しました</p>}
    </>
  );
};

export default Blog;

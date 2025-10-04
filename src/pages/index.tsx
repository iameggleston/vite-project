import React from 'react';

import Header from '@/components/molecules/Header';
import Main from '@/components/molecules/Main';
import { NewsBlock } from '@/components/molecules/NewsBlock';
import Btn from '@/components/atoms/Btn';
import { ImgList } from '~/resource/ImgList';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '~/redux/CountSlice';
import { selectCount } from '~/redux/CountSlice';

const Home: React.FC = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <>
      <Header imgSrc={ImgList.headerLogo} />
      <Main imgSrc={ImgList.mainImg} />
      <NewsBlock />
      <Btn />
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        カウント
        {count}
      </div>
    </>
  );
};

export default Home;

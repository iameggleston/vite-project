import React from 'react';

import Header from '@/components/molecules/Header';
import Main from '@/components/molecules/Main';
import { NewsBlock } from '@/components/molecules/NewsBlock';
import Btn from '~/src/components/atoms/Button';
import { ImgList } from '~/resource/ImgList';

const Home: React.FC = () => {
  return (
    <>
      <Header imgSrc={ImgList.headerLogo} />
      <Main imgSrc={ImgList.mainImg} />
      <NewsBlock />
      <Btn />
    </>
  );
};

export default Home;

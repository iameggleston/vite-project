import React from 'react';

import { ImgType } from 'resource/ImgList';

const Main: React.FC<ImgType> = ({ imgSrc }) => {
  return (
    <main>
      <img src={imgSrc.src} width={imgSrc.width} height={imgSrc.height} />
    </main>
  );
};

export default Main;

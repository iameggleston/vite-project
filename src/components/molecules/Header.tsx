import React from 'react';

import { ImgType } from 'resource/ImgList';

const Header: React.FC<ImgType> = ({ imgSrc }) => {
  return (
    <header>
      <a href='/'>
        <img src={imgSrc.src} width={imgSrc.width} height={imgSrc.height} />
      </a>
    </header>
  );
};

export default Header;

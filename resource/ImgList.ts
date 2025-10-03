export const ImgList = {
  headerLogo: {
    src: "/img/logo.png",
    width: 200,
    height: 80,
  },
  mainImg: {
    src: "/img/main.jpg",
    width: 1260,
    height: 720,
  },
};

export interface ImgType {
  imgSrc: {
    src: string;
    width: number;
    height: number;
  };
}

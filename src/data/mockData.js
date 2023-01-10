export const mockTheme1Products = [
  {
    id: 1,
    name: "비숑 블랙 머그잔",
    description:
      "쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.",
    thumbnail:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg",

    price: 21800,
    detailImg:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg",
  },
  {
    id: 3,
    name: "가열 보온 티코스터 온열 원터치 컵 받침대",
    description:
      "언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다.",
    thumbnail:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg",
    price: 31000,
    detailImg:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2_detail.jpeg",
  },
  {
    id: 10,
    name: "벨루즈까사 솜사탕 파스텔 머그 4종 세트",
    description:
      "솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그.",
    thumbnail:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg",
    price: 25500,
    detailImg:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3_detail.jpeg",
  },
];

export const mockTheme2Products = [
  {
    id: 7,
    name: "쏘쿨 냉감 이불",
    description: "점점 더워지는 여름, 소쿨 냉감 이불 덮고 주무세요",
    thumbnail:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product4.jpg",
    price: 20900,
    detailImg:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg",
  },
  {
    id: 5,
    name: "리모컨 에어 서큘레이터",
    description: "자연 바람 그대로를 담은, 리모컨 에어 서큘레이터",
    thumbnail:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product5.jpg",
    price: 49900,
    detailImg:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg",
  },
  {
    id: 6,
    name: "얼음 트레이 얼음틀 36구 4p + 아이스큐브",
    description:
      "여름에만 얼음을 이용하지 않는 것처럼, 이제는 냉동실에 한번 얼려서 사계절 내내 드세요",
    thumbnail:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product6.jpg",
    price: 10900,
    detailImg:
      "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg",
  },
];

export const getProductDetail = (productId) => {
  return [...mockTheme1Products, ...mockTheme2Products].find((product) => {
    return product.id === Number(productId);
  });
};

export const mockReview = [
  {
    id: 1,
    productId: 1,
    user: "상냥한 어피치",
    profileImg:
      "https://w.namu.la/s/a91617f042302a5826f554dc238c73c96d17a4d5a7a5553b4aedb5ea458dbd0b674ffe5087652bc22c8619daeaab387909a6a20a9d7ad8b54da215258caeb9693255ba3f6c2430a649b6a853973bcc468659594ec8a2711cdf395b0fb3e4eead",
    star: 5,
    date: "2023-12-11T06:52:12.816Z",
    content: "저렴한 가격에 잘 샀어요",
  },
  {
    id: 2,
    productId: 1,
    user: "다정한 네오",
    profileImg:
      "https://w.namu.la/s/b877f6e239cdd07b647afd6f045c754053f00b27198edfd5535825b901d2b0375c2ddcd54582de4981e1c27f8606e3a707cc96a3e50724459ba310b8ce47396384f182bb7e37ef3667a24413ac02498d3d4e91d1a2e3abd4038ce0690b64a5d9",
    star: 4,
    date: "2023-12-27T06:53:28.399Z",
    content: "배송이 빨라요!",
  },
  {
    id: 3,
    productId: 3,
    user: "다정한 네오",
    profileImg:
      "https://w.namu.la/s/b877f6e239cdd07b647afd6f045c754053f00b27198edfd5535825b901d2b0375c2ddcd54582de4981e1c27f8606e3a707cc96a3e50724459ba310b8ce47396384f182bb7e37ef3667a24413ac02498d3d4e91d1a2e3abd4038ce0690b64a5d9",
    star: 5,
    date: "2022-01-08T06:53:45.673Z",
    content: "친구한테 선물해줬더니 좋아해요",
  },
  {
    id: 4,
    productId: 10,
    user: "하트뿅뿅 라이언",
    profileImg:
      "https://w.namu.la/s/9071d0575b6d14c0d6fc5832e26fe8ef0a298a1abb1d442cc3c865534ec5e949e8a2d195fe425ebb15f2f1f5b270e6b86979bd1e3fcb4e9d9432bdfbf4fb02a6252a318cc331cb385371a406ca8329d9baebea8204f2c1673c4af7c012801b27",
    star: 3,
    date: "2023-01-10T06:53:59.268Z",
    content: "품질이 그냥 그래요",
  },
];

export const getProductReview = (productId) => {
  return mockReview.filter((review) => review.productId === Number(productId));
};

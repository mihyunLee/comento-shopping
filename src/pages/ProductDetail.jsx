import React from "react";
import BasketButton from "../components/BasketButton";
import DetailMenuTabs from "../components/DetailMenuTabs";
import Navigation from "../components/Navigation";
import ProductInfo from "../components/ProductInfo";
import ProductDetailView from "../components/ProductDetailView";

const ProductDetail = () => {
  return (
    <div>
      <Navigation />
      <ProductInfo
        name={"비숑 블랙 머그잔"}
        cost={"21,800"}
        thumbnail={
          "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
        }
      />
      <DetailMenuTabs firstTabName={"상품 설명"} secondTabName={"상품 후기"} />
      <ProductDetailView
        detailImg={
          "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg"
        }
        name={"비숑 블랙 머그잔"}
      />
      <BasketButton>장바구니 담기</BasketButton>
    </div>
  );
};

export default ProductDetail;

import React from "react";
import BasketButton from "../components/BasketButton";
import DetailMenuButton from "../components/DetailMenuButton";
import Navigation from "../components/Navigation";
import ProductInfo from "../components/ProductInfo";
import ProductDetailView from "../components/ProductDetailView";

const ProductDetail = () => {
  return (
    <div>
      {/* Navigation */}
      <Navigation />
      {/* ProductInfo */}
      <ProductInfo
        name={"비숑 블랙 머그잔"}
        cost={"21,800"}
        thumbnail={
          "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
        }
      />
      {/* DetailMenuButton */}
      <DetailMenuButton />
      {/* ProductDetailView */}
      <ProductDetailView
        detailImg={
          "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg"
        }
        name={"비숑 블랙 머그잔"}
      />
      {/* BasketButton */}
      <BasketButton>장바구니 담기</BasketButton>
    </div>
  );
};

export default ProductDetail;

import React, { useState, useEffect } from "react";
import BasketButton from "../components/BasketButton";
import DetailMenuTabs from "../components/DetailMenuTabs";
import Navigation from "../components/Navigation";
import ProductInfo from "../components/ProductInfo";
import ProductDetailView from "../components/ProductDetailView";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../data/mockData";

const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, [productId]);

  return (
    <div>
      <Navigation />
      {product && (
        <>
          <ProductInfo
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
          />
          <DetailMenuTabs
            firstTabName={"상품 설명"}
            secondTabName={"상품 후기"}
          />
          <ProductDetailView
            detailImg={product.detailImg}
            name={product.name}
          />
          <BasketButton>장바구니 담기</BasketButton>
        </>
      )}
    </div>
  );
};

export default ProductDetail;

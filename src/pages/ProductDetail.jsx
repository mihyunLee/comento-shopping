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
  const [tabMenu, setTabMenu] = useState(0);

  const handleClickTabs = (tabId) => {
    if (tabId === 0) {
      setTabMenu(0);
    } else {
      setTabMenu(1);
    }
  };

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
            tabMenu={tabMenu}
            onClick={handleClickTabs}
          />
          <ProductDetailView
            detailImg={product.detailImg}
            name={product.name}
            tabMenu={tabMenu}
          />
          <BasketButton>장바구니 담기</BasketButton>
        </>
      )}
    </div>
  );
};

export default ProductDetail;

import React, { useState, useEffect } from "react";
import BasketButton from "../components/BasketButton";
import DetailMenuTabs from "../components/DetailMenuTabs";
import Navigation from "../components/Navigation";
import ProductInfo from "../components/ProductInfo";
import ProductDetailView from "../components/ProductDetailView";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail, getProductReview } from "../data/mockData";
import * as webStorage from "../utils/webStorage";

const ProductDetail = () => {
  let { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState();
  const [tabMenu, setTabMenu] = useState(0);

  const handleClickTabs = (tabId) => {
    if (tabId === 0) {
      setTabMenu(0);
    } else {
      setTabMenu(1);
    }
  };

  useEffect(() => {
    const product = getProductDetail(productId);
    const productReview = getProductReview(productId);

    setProduct(product);
    setReviews(productReview);
  }, [productId]);

  const handleClickAddBasketButton = (product) => {
    webStorage.addBasket(product);
    navigate("/basket");
  };

  return (
    <div>
      <Navigation header={"코멘토 쇼핑"} />
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
          {reviews && (
            <ProductDetailView
              detailImg={product.detailImg}
              name={product.name}
              tabMenu={tabMenu}
              reviews={reviews}
            />
          )}
          <BasketButton
            text={"장바구니 담기"}
            onClick={() => handleClickAddBasketButton(product)}
          />
        </>
      )}
    </div>
  );
};

export default ProductDetail;

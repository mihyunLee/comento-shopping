import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Products, mockTheme2Products } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Products);
    } else {
      setProducts(mockTheme2Products);
    }
  };

  useEffect(() => {
    // 1초 후, 상품 초기화
    setTimeout(() => {
      setProducts(mockTheme1Products);
    }, 1000);
  }, []);

  return (
    <div>
      <Navigation isHome={true} />
      <GrayLine height={1} />
      <ThemeSection>
        <ThemeButton
          themeName={"# 따순머그컵"}
          onClick={() => onClickThemeButton(1)}
        />
        <ThemeButton
          themeName={"# 여름 필수템"}
          onClick={() => onClickThemeButton(2)}
        />
      </ThemeSection>
      <GrayLine height={8} />
      <ProductSection>
        {products ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              thumbnail={product.thumbnail}
              onClick={() => navigate(`product/${product.id}`)}
            />
          ))
        ) : (
          <div>테마를 선택해주세요</div>
        )}
      </ProductSection>
    </div>
  );
};

const GrayLine = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;

  background: #eeeeee;
`;

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;

  margin: 40px 24px;
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-top: 43px;
  margin-bottom: 85px;
`;

export default Home;

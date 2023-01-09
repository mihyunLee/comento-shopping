import React from "react";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Products } from "../data/mockData";

const Home = () => {
  return (
    <div>
      <Navigation />
      <GrayLine height={1} />
      <ThemeSection>
        <ThemeButton themeName={"# 따순머그컵"} />
        <ThemeButton themeName={"# 여름 필수템"} />
      </ThemeSection>
      <GrayLine height={8} />
      <ProductSection>
        {mockTheme1Products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            thumbnail={product.thumbnail}
          />
        ))}
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

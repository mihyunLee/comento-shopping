const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <div>
      <img width="341" src={thumbnail} alt={name} />
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default ProductCard;

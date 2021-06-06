import "../styles/Product.css";

function Product({id, title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__raiting">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="{title}" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
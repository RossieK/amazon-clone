import "../styles/Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__raiting">
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
        </div>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3BIWym5q5kW-7rNV4gQUTzLiYLLH0FGUADd_iM9u6oRVIY18gxxgt5WJLixXYcHctkc&usqp=CAU" alt="Book cover" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

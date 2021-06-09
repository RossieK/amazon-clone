import "../styles/CheckoutProduct.css";
import {useStateValue} from "../StateProvider";
import {forwardRef} from "react";

const CheckoutProduct = forwardRef(({id, image, title, price, rating}, ref) => {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({type: "REMOVE_FROM_BASKET", id: id});
  };

  return (
    <div ref={ref}>
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt={title} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐️</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </div>
  );
});

export default CheckoutProduct;

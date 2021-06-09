import {useStateValue} from "../StateProvider";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import FlipMove from "react-flip-move";

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="payment">
      <h1>
        Checkout (<Link to="/checkout">{basket?.length}</Link>)
      </h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Sofia, Bulgaria</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            <FlipMove>
              {basket.map((item) => (
                <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
              ))}
            </FlipMove>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

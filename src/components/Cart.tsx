import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";

import { closeCart } from "../toolkit/slices/cartToggle";
import CartItem from "./CartItem";

let cc: ReactElement[] = [];
function Cart() {
  let dispatch = useDispatch();
  const [items, setItems] = useState(cc);
  const [price, setPrice] = useState(0);
  let { left, cartItems } = useSelector((state: RootState) => ({
    left: state.cartReducer.left,
    cartItems: state.orderReducer,
  }));
  useEffect(() => {
    setItems(
      cartItems.reduce((prev, curr, ind) => {
        return curr.orderQuantity
          ? [
              ...prev,
              <CartItem id={ind} key={ind} count={curr.orderQuantity} />,
            ]
          : [...prev];
      }, cc)
    );
    setPrice(
      cartItems.reduce((prev, { orderQuantity, price }) => {
        return orderQuantity ? prev + orderQuantity * price : prev;
      }, 0)
    );
    return () => {};
  }, [cartItems]);

  return (
    <div
      style={{ zIndex: 10 }}
      onClick={() => dispatch(closeCart())}
      className={`bg-opacity-20 row justify-content-end left-${left} fixed cart-store right-0 top-0 bottom-0 vh-100`}
    >
      <div
        className="p-4 cart-list d-grid col-md-8 col-xl-5 col-xxl-4 vh-100 bg-white align-items-start"
        onClick={(e) => e.stopPropagation()}
        style={{ gridTemplateRows: "1fr 5fr 1fr" }}
      >
        <div className="d-flex p-4 align-items-center justify-content-between">
          <button
            onClick={() => dispatch(closeCart())}
            className="btn btn-success"
          >
            x
          </button>

          <b
            className="d-grid text-success"
            style={{ gap: "1ch", gridAutoFlow: "column" }}
          >
            <span>NGN</span>
            <span>{price + ".00"}</span>
          </b>
        </div>
        <div className="text-success" style={{ overflowY: "scroll" }}>
          {items.length ? (
            items
          ) : (
            <div className="text-center">No Items In Cart</div>
          )}
        </div>
        <div className="d-flex p-4 align-items-center justify-content-between">
          <button
            onClick={() => dispatch(closeCart())}
            className="btn btn-outline-success"
          >
            Back To Shopping
          </button>
          <button disabled={!items.length} className="btn btn-success">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

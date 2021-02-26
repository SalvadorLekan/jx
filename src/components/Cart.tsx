import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";

import { closeCart } from "../toolkit/slices/cartToggle";
import CartItem from "./CartItem";
function Cart() {
  let dispatch = useDispatch();
  let { top, cartItems } = useSelector((state: RootState) => ({
    top: state.cartReducer.top,
    cartItems: state.orderReducer,
  }));
  return (
    <div
      onClick={() => dispatch(closeCart())}
      className={`bg-opacity-20 row justify-content-end top-${top} fixed cart-store right-0 left-0 bottom-0 vh-100`}
    >
      <div
        className="p-4 cart-list d-flex col-md-8 col-xl-5 col-xxl-4 vh-100 bg-success align-items-start"
        onClick={(e) => e.stopPropagation()}
        style={{ flexDirection: "column" }}
      >
        <div onClick={() => dispatch(closeCart())} className="btn btn-success">
          x
        </div>
        <div>
          {cartItems.reduce(
            (prev, curr, ind) => {
              return curr
                ? [...prev, <CartItem id={ind} key={ind} count={curr} />]
                : [...prev];
            },
            [<></>]
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;

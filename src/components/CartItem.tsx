import { useDispatch } from "react-redux";
import { addToCart } from "../toolkit/slices/CartItems";

function CartItem({ id, count }: { id: number; count: number }) {
  let dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(addToCart({ id, orderQuantity: -1 }))}
        className="btn"
      >
        -
      </button>
      {count}
      <button
        onClick={() => dispatch(addToCart({ id, orderQuantity: 1 }))}
        className="btn"
      >
        +
      </button>
    </div>
  );
}

export default CartItem;

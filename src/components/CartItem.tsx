import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";
import { addToCart, removeFromCart } from "../toolkit/slices/CartItems";
import placeholder from "./ImgPlaceHolder.svg";

function CartItem({ id, count }: { id: number; count: number }) {
  let dispatch = useDispatch();
  const shopItems = useSelector(
    (state: RootState) => state.shop.serverResponse.data?.products
  ) as ShopItem[];

  const item = shopItems.find((item) => id === item.id) as ShopItem;
  return (
    <div
      style={{
        border: "2px solid black",
        height: "17ch",
        padding: "1ch",
        borderRadius: "1ch",
        display: "grid",
        gridTemplateColumns: "12ch 1fr",
        alignItems: "center",
        margin: "2ch 0",
        gap: "3ch",
      }}
    >
      <img src={placeholder} alt="" className="img-fluid" />
      {/* {JSON.stringify(
        ,
        null,
        2
      )} */}
      <div
        className="h-100 d-flex"
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <b>{item.productName}</b>
        <div
          className="d-flex"
          style={{
            border: "1px solid green",
            alignItems: "center",
            borderRadius: "3ch",
          }}
        >
          <button
            onClick={() => dispatch(addToCart({ id, orderQuantity: -1 }))}
            className="btn text-success"
          >
            -
          </button>
          {count}
          <button
            disabled={item.isQuantityLimited}
            onClick={() => dispatch(addToCart({ id, orderQuantity: 1 }))}
            className="btn text-success"
          >
            +
          </button>
        </div>
        <button className="btn" onClick={() => dispatch(removeFromCart(id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="red"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;

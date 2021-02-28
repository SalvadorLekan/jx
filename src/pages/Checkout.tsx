import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { composeOrder } from "../api";
import Success from "../components/checkout/Success";
import { RootState } from "../toolkit";
import { sendOrder } from "../toolkit/slices/order";

function Checkout(props: ShellProps) {
  const dispatch = useDispatch();

  const { status, cartItems, shopData } = useSelector((state: RootState) => ({
    status: state.orderProcces.status,
    data: state.orderProcces.payload as OrderResponse,
    cartItems: state.orderReducer,
    shopData: state.shop.serverResponse.data as ShopData,
  }));
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [items, setItems] = useState(0);
  useEffect(() => {
    setItems(cartItems.filter((item) => Boolean(item?.orderQuantity)).length);
    return () => {};
  }, [cartItems, dispatch]);
  let shop = props.match.params.shop;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      sendOrder({
        order: composeOrder({
          shopData,
          cartItems,
          customerEmail: email,
          customerName: name,
        }),
        shop,
      })
    );
  };

  if (status === "initial") {
    if (items)
      return (
        <div className="container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelLg"
                className="col-sm-2 col-form-label col-form-label-lg"
              >
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-lg text-success"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelLg"
                className="col-sm-2 col-form-label col-form-label-lg"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg text-success"
                  id="colFormLabelLg"
                  placeholder="Email"
                />
              </div>
            </div>
            <button className="btn mx-auto d-flex my-4 btn-outline-success">
              Place Order
            </button>
          </form>
        </div>
      );
    return <div>initial blank</div>;
  }
  if (status === "pending")
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <Loader type="TailSpin" width={120} height={120} />
      </div>
    );
  if (status === "failure") return <div>failure</div>;
  if (status === "partial") return <div>partial</div>;
  return <Success shop={shop} />;
}

export default Checkout;

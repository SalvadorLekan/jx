import success from "../6673.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../toolkit/slices/CartItems";
function Success({ shop }: { shop: string }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
    return () => {};
  }, [dispatch]);
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ flexDirection: "column" }}
    >
      <img src={success} alt="success" className="img-fluid" />
      <p className="text-white">
        <b>Order Successful!</b>
      </p>
      <Link className="text-white" to={`/shop/${shop}`}>
        Go Back To Shop
      </Link>
    </div>
  );
}

export default Success;

import { useDispatch } from "react-redux";
import { init } from "../../toolkit/slices/order";
import failure from "../11104.png";
function Failure() {
  const dispatch = useDispatch();
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ flexDirection: "column" }}
    >
      <img src={failure} alt="order failed" className="img-fluid" />
      <p className="text-white">
        <b>Order failed!</b>
      </p>
      <button
        className="btn btn-white text-primary"
        onClick={() => dispatch(init())}
      >
        Try Again
      </button>
    </div>
  );
}

export default Failure;

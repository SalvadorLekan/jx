import { useDispatch } from "react-redux";
import { openCart } from "../toolkit/slices/cartToggle";
function SMC() {
  let dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(openCart())}
      className="btn fixed d-flex justify-content-center align-items-center bg-success text-white d-md-none"
      style={{
        right: 15,
        bottom: 15,
        height: "10vmin",
        width: "20vmin",
        borderRadius: 99,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        className="bi bi-bag-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
      </svg>
    </button>
  );
}

export default SMC;

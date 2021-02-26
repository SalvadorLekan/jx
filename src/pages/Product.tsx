import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import placeholder from "../components/ImgPlaceHolder.svg";
import { addToCart } from "../toolkit/slices/CartItems";

function Product(props: ProductPropsType) {
  let history = useHistory();
  let dispatch = useDispatch();
  const [inputNumber, setinputNumber] = useState(1);
  let data = props.shopItem?.find(
    (data) => data.productSlug === props.match.params.item
  );
  if (data)
    return (
      <div className="container row bg-white text-success mx-auto min-vh-100">
        <div className="col-md-6 p-4">
          <img
            src={data.productMedia[0] || placeholder}
            alt=""
            className="img-fluid"
          />
        </div>
        <div
          className="col-md-6 p-4 d-flex justify-content-between align-items-center"
          style={{ flexDirection: "column" }}
        >
          <div id="product-name" className=" display-4">
            {data.productName}
          </div>
          <div id="product-description">{data.productDescription}</div>
          <div id="product-price">
            {props.currency + " " + data.productPrice}
          </div>

          {!data.isQuantityLimited ? (
            <form
              className="d-flex justify-content-between align-items-center"
              style={{ flexDirection: "column", height: "50%" }}
            >
              <fieldset className="row" style={{ width: "20ch" }}>
                <button
                  onClick={() => setinputNumber((number) => number - 1 || 1)}
                  type="button"
                  className="btn col-4 btn-outline-success"
                >
                  -
                </button>
                <input
                  className="col-4 btn btn-outline-success"
                  type="number"
                  name="amount"
                  id="amount"
                  min="1"
                  value={inputNumber}
                  onChange={(e) =>
                    setinputNumber(parseInt(e.target.value) || 1)
                  }
                />
                <button
                  onClick={() => setinputNumber((number) => number + 1 || 1)}
                  type="button"
                  className="col-4 btn btn-outline-success"
                >
                  +
                </button>
              </fieldset>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    addToCart({ id: data?.id || 0, orderQuantity: inputNumber })
                  );
                  history.push(`/shop/${props.match.params.shop}`);
                }}
                type="submit"
                className="btn btn-outline-success"
              >
                Add to cart
              </button>
            </form>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToCart({ id: data?.id || 0, orderQuantity: 1 }));
                history.push(`/shop/${props.match.params.shop}`);
              }}
              className="btn btn-outline-success"
            >
              Order Service
            </button>
          )}
        </div>
      </div>
    );

  return <div>Product Not Found</div>;
}

export default Product;

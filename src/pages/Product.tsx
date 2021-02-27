import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import placeholder from "../components/ImgPlaceHolder.svg";
import { RootState } from "../toolkit";
import { addToCart } from "../toolkit/slices/CartItems";

function Product(props: ProductPropsType) {
  let cartItems = useSelector((state: RootState) => state.orderReducer);
  let history = useHistory();
  let dispatch = useDispatch();
  const [inputNumber, setinputNumber] = useState(1);
  let data = props.shopItem?.find(
    (data) => data.productSlug === props.match.params.item
  );
  if (data)
    return (
      <div className="fixed top-0 vh-100 vw-100 bg-opacity-20 d-flex justify-content-center align-items-center">
        <div
          className="container row bg-white text-success align-items-center"
          style={{ height: "80vh", overflow: "scroll", overflowX: "hidden" }}
        >
          <div className="col-md-6 p-4 d-flex justify-content-center align-items-center">
            <img
              src={data.productMedia[0] || placeholder}
              alt=""
              className="img-fluid"
            />
          </div>
          <div
            className="col-md-6 p-4 d-grid justify-content-between align-items-center"
            style={{ gap: "5ch" }}
          >
            <div id="product-name" className="display-3">
              {data.productName}
            </div>
            <div id="product-description">{data.productDescription}</div>
            <div id="product-price">
              {props.currency + " " + data.productPrice}
            </div>

            {!data.isQuantityLimited ? (
              <form
                className="d-grid justify-content-between align-items-center"
                style={{ gap: "4ch" }}
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
                {cartItems[data.id]?.orderQuantity ? (
                  <div className="btn btn-outline-success">
                    Item already in cart
                  </div>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        addToCart({
                          id: data?.id || 0,
                          orderQuantity: inputNumber,
                          price: data?.productPrice,
                        })
                      );
                      history.push(`/shop/${props.match.params.shop}`);
                    }}
                    type="submit"
                    className="btn btn-outline-success"
                  >
                    Add to cart
                  </button>
                )}
              </form>
            ) : cartItems[data.id]?.orderQuantity ? (
              <div className="btn btn-outline-success">
                Item already in cart
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    addToCart({
                      id: data?.id || 0,
                      orderQuantity: 1,
                      price: data?.productPrice,
                    })
                  );
                  history.push(`/shop/${props.match.params.shop}`);
                }}
                className="btn btn-outline-success"
              >
                Order Service
              </button>
            )}
          </div>
        </div>
      </div>
    );

  return <div>Product Not Found</div>;
}

export default Product;

import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import Header from "./Header";

let initialState: storeResponse | undefined;

function ShopShell(props: shellProps) {
  const [loading, setLoading] = useState(true);
  const [shop, setShop] = useState(initialState);
  let match = useRouteMatch();
  useEffect(() => {
    fetch(
      `https://manifest-salesapi.herokuapp.com/shops/${props.match.params.shop}`
    )
      .then((data) => data.json())
      .then((data: storeResponse) => {
        setLoading(false);
        setShop(data);
      });
    return () => {};
  }, [props.match.params.shop]);

  if (loading)
    return (
      <div className="d-flex container vh-100 justify-content-center align-items-center">
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      </div>
    );
  if (shop?.data !== undefined)
    return (
      <>
        <Header
          value=""
          setValue={() => {}}
          slug={shop.data.storeSlug}
          message={shop.data.welcomeMessage}
          storeName={shop.data.storeName}
          openCart={() => {}}
        />
        <Switch>
          <Route
            path={`${match.path}/product/:item`}
            render={(props) => (
              <Product
                currency={shop.data?.storeCurrency || ""}
                {...props}
                shopItem={shop.data?.products}
              />
            )}
          />
          <Route path={match.path}>
            <Shop
              slug={shop.data.storeSlug}
              items={shop.data.products}
              currency={shop.data.storeCurrency}
            />
          </Route>
        </Switch>
      </>
    );
  return <div>No Shop</div>;
}

export default ShopShell;

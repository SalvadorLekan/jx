import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import Cart from "./Cart";
import Header from "./Header";
import SMC from "./SMC";

let initialState: StoreResponse | undefined;

function ShopShell(props: ShellProps) {
  const [loading, setLoading] = useState(true);
  const [shop, setShop] = useState(initialState);
  let match = useRouteMatch();
  useEffect(() => {
    fetch(
      `https://manifest-salesapi.herokuapp.com/shops/${props.match.params.shop}`
    )
      .then((data) => data.json())
      .then((data: StoreResponse) => {
        setLoading(false);
        setShop(data);
      });
    return () => {};
  }, [props.match.params.shop]);

  if (loading)
    return (
      <div className="d-flex container vh-100 justify-content-center align-items-center">
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      </div>
    );
  if (shop?.data)
    return (
      <>
        <Header
          slug={shop.data.storeSlug}
          message={shop.data.welcomeMessage}
          storeName={shop.data.storeName}
          by={shop.data.business.businessName}
        />
        <Switch>
          <Route
            path={`${match.path}/product/:item`}
            render={(props) => {
              // this works
              let shopData = shop.data as ShopData;
              return (
                <Product
                  currency={shopData.storeCurrency}
                  {...props}
                  shopItem={shopData.products}
                />
              );
            }}
          />
          <Route path={match.path}>
            <Shop
              slug={shop.data.storeSlug}
              items={shop.data.products}
              currency={shop.data.storeCurrency}
            />
          </Route>
        </Switch>
        <Cart />
        <SMC />
      </>
    );
  return <div>No Shop</div>;
}

export default ShopShell;

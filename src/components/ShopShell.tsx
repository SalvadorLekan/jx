import { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import { RootState } from "../toolkit";
import { fetchServerResponse } from "../toolkit/slices/shop";
import Cart from "./Cart";
import Header from "./Header";
import SMC from "./SMC";

function ShopShell(props: ShellProps) {
  const { loading, shop } = useSelector((state: RootState) => ({
    loading: state.shop.loading,
    shop: state.shop.serverResponse,
  }));
  let match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServerResponse(props.match.params.shop));
    return () => {};
  }, [props.match.params.shop, dispatch]);

  if (loading)
    return (
      <div className="d-flex container vh-100 justify-content-center align-items-center">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  if (shop.data)
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

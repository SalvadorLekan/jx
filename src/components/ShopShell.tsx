import { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import StoreNotFound from "../pages/StoreNotFound";
import { RootState } from "../toolkit";
import { fetchServerResponse } from "../toolkit/slices/shop";
import Cart from "./Cart";
import Header from "./Header";
import About from "../pages/About";
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
          storeName={shop.data.storeName}
          by={shop.data.business.businessName}
        />
        <Switch>
          <Route path={`${match.path}/about`}>
            <About shop={shop} />
          </Route>
          <Route
            path={`${match.path}/checkout`}
            render={(props) => {
              return <Checkout {...props} />;
            }}
          />
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
        <Cart slug={props.match.params.shop} />
        <SMC />
      </>
    );
  return <StoreNotFound />;
}

export default ShopShell;

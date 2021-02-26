import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShopShell from "./components/ShopShell";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route
          path="/shop/:shop"
          render={(props) => <ShopShell {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

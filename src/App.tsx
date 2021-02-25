import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShopShell from "./components/ShopShell";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route
            path="/shop/:shop"
            render={(props) => <ShopShell {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

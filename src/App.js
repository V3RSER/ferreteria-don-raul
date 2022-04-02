import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Sell from "./containers/Sell";
import Header from "./components/Header";
import ShoppingCart from "./containers/ShopingCart";
import Buyer from "./containers/Buyer";
import History from "./containers/History";
import Inventory from "./containers/Inventory";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/ferreteria-don-raul" element={<Sell />} />
          <Route
            path="/ferreteria-don-raul/carrito"
            element={<ShoppingCart />}
          />
          <Route path="/ferreteria-don-raul/comprador" element={<Buyer />} />
          <Route path="/ferreteria-don-raul/historial" element={<History />} />
          <Route path="/ferreteria-don-raul/inventario" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

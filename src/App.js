import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Inventory from "./containers/Inventory";
import Sell from "./containers/Sell";
import TableInventory from "./compontents/TableInventory";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route
              path="/ferreteria-don-raul/inventario"
              element={<TableInventory />}
            />
            <Route path="/ferreteria-don-raul/vender" element={<Sell />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

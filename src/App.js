import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Sell from "./containers/Sell";
import Invoice from "./containers/Invoice";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/ferreteria-don-raul/vender" element={<Sell />} />
            <Route path="/ferreteria-don-raul/factura" element={<Invoice />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

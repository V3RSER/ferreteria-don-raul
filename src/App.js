import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Inventory from "./containers/Inventory"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/ferreteria-don-raul/" element={<Inventory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

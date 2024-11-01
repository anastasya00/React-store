import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { store } from "./redux";
import { CartPage } from "./pages/cart-page"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

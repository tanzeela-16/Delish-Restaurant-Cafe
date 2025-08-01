import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Menu from "./pages/FoodMenuPage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:productId" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

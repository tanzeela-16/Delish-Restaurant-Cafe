import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Reservation from "./pages/Reservation";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import Menu from "./pages/FoodMenuPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="blogdetails" element={<BlogDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="Menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

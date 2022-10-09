import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Admin from "./components/Admin";
import HomeContent from "./components/HomeContent";
import CategoryPage from "./components/CategoryPage";
import Categories from "./components/Categories";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<HomeContent />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="by-category" element={<CategoryPage />} />
        <Route path="by-category/drama" element={<Categories />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;

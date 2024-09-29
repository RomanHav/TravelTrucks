import { NavLink, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import NotFound from "./components/NotFound/NotFound";
import CatalogListPart from "./components/CatalogListPart/CatalogListPart";
import css from "./App.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div>
      <div className={css.navbarContainer}>
        <Link to="/" className={css.logo}>
          Travel<span className={css.logoPart}>Trucks</span>
        </Link>
        <nav className={css.navbar}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/ :catalogId" element={<CatalogListPart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PackageDetail from "./pages/PackageDetail";
import Place from "./pages/Place";
import About from "./pages/About";
import Packages from "./pages/Packages";

function App() {


  return (
  <div className="app">
<Routes>

  <Route path="/" element={<HomePage   />} />
  <Route path="/packageDetail/:id" element={<PackageDetail />}  />
  <Route path="/place" element={<Place />} />
  <Route path="/about" element={<About  />} />
  <Route path="/packages" element={<Packages  />} />

</Routes>
  </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
// Views
import Home from "./views/Home";
import AddAdmin from "./views/AddAdmin";
import AdminDetail from "./views/AdminDetail";
import EditAdmin from "./views/EditAdmin";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddAdmin />} />
        <Route path="/detail/:id" element={<AdminDetail />} />
        <Route path="/edit/:id" element={<EditAdmin />} />
      </Routes>
    </div>
  );
};

export default App;

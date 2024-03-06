import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import CropDetails from "./Pages/CropDetails";

function App() {
  return (
    <>

    <div className="h-[150vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop/:id" element={<CropDetails/>}/>
        <Route path="/form" element={<Form />} />
      </Routes>
      </div>
    </>
  );
}

export default App;

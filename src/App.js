import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import CropDetails from "./Pages/CropDetails";
import MainComponent from "./Components/Voice";
import Weather from "./Pages/Weather";

function App() {
  return (
    <>

    <div className="h-[150vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop/:id" element={<CropDetails/>}/>
        <Route path="/form" element={<Form />} />
        <Route path="/voice" element={<MainComponent/>}/>
        <Route path="/weather" element={<Weather/>}/>

        

      </Routes>
      </div>
    </>
  );
}

export default App;

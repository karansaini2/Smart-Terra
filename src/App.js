import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import backgroundImage from "./Images/1.jpg";
function App() {
  return (
    <>

    <div className="h-[150vh]">
      <div
        className="h-[480px] bg-cover bg-center inset-0  font-serif "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />

        <div className="mx-5 my-12  text-center font-semibold">
          <h1 className="text-5xl ">Welcome to Smart Terra </h1>
          <h2 className="text-3xl my-5">Revolutioning Agriculture</h2>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </div>
    </>
  );
}

export default App;

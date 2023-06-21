import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MultiStepForm from "./pages/MultiForm";
import Email from "./pages/Email";
import Carousel from "./pages/Carousel";
import Resizable from "./pages/Resizable";
import Calendar from "./pages/Calendar";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MultiStepForm />} />
        <Route path="/email" element={<Email />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/resizable_panel" element={<Resizable />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;

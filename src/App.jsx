import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DashPage from "./pages/DashPage/DashPage";
import FormPage1 from "./pages/FormPage1/FormPage1";
import FormPage2 from "./pages/FormPage2/FormPage2";
import FormPage3 from "./pages/FormPage3/FormPage3";
import LoadingPage1 from "./pages/LoadingPage1/LoadingPage1";
import LoadingPage2 from "./pages/LoadingPage2/LoadingPage2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/Page-1" />} />
        <Route path="/Page-1" element={<LoadingPage1 />} />
        <Route path="/Page-2" element={<LoadingPage2 />} />
        <Route path="/Page-3" element={<FormPage1 />} />
        <Route path="/Page-4" element={<FormPage2 />} />
        <Route path="/Page-5" element={<FormPage3 />} />
        <Route path="/Page-6" element={<DashPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

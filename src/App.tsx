import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { HelmetProvider } from "react-helmet-async";

const NotFound = () => (
  <h1 className="text-center mt-10">404 - Page Not Found</h1>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
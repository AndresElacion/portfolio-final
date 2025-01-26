import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const NotFound = () => (
  <h1 className="text-center mt-10">404 - Page Not Found</h1>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          {/* <Route path="Components" element={<Components />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App

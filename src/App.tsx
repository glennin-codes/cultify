import { NavBar } from "./components/NavBar";
import "./App.css";
import { Footer } from "./components/footer";

import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Annalysis from "./pages/Annalysis";
import SidebarWithContentSeparator from "./pages/Dashboard";
import ScrollToTop from "./helpers/scrollToTop";
import { AboutUs } from "./pages/AboutUs";
import { HowItworks } from "./pages/HowItWorks";
import ProtectedRoute from "./ProtectedRoute";
import VerificationPage from "./pages/Verification";

function App() {
  return (
    <>
      <Router>
     
        <NavBar />
        <ScrollToTop >
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/howItWorks" element={<HowItworks/>} />
          <Route path="/dashboard" element={<ProtectedRoute>
            < SidebarWithContentSeparator/>
          </ProtectedRoute>} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifying" element={<VerificationPage />} />
        </Routes>
        </ScrollToTop>
        <Footer />
       
      </Router>
    </>
  );
}

export default App;

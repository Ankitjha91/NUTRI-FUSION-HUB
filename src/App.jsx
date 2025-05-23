import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import DietPage from './Pages/DietPage';
import MaintainWeight from './Pages/MaintainWeight';
import WeightLoss from './Pages/WeightLoss';
import WeightGain from './Pages/WeightGain';
import UserInfoPage from './Pages/UserInfoPage';
import ShoppingPage from './Pages/ShoppingPage';
import WorkoutPlan from './Pages/WorkoutPlan';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MyCart from "./Pages/MyCart";

// import About from './Pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dietpage" element={<DietPage />} />
        <Route path="/maintain-weight" element={<MaintainWeight />} />
        <Route path="/weight-loss" element={<WeightLoss />} />
        <Route path="/weight-gain" element={<WeightGain />} />
        <Route path="/setting" element={<UserInfoPage/>} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/workoutplan" element={<WorkoutPlan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mycart" element={<MyCart />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; // ✅ This line was missing!

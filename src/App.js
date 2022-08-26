import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import Footer from "./pages/Footer";
import ShortList from "./pages/ShortList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/home" element={<ProtectedRoute Component={Home} />} />
        <Route path="/infopage/:id" element={<ProtectedRoute Component={InfoPage} />} />
        <Route path="/shortlist" element={<ProtectedRoute Component={ShortList} />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path='/' element={<Home/>} />
       <Route path='/infopage/:id' element={ <InfoPage/>}/>
       <Route path='/shortlist' element={<ShortList/>} />  */}
      </Routes>
    </div>
  );
}

export default App;

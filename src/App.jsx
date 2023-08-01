import UserLinks from "./UserLinks";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Login, Signup } from "./index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path=":username" element={<UserLinks />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

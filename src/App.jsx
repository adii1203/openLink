import UserLinks from "./UserLinks";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Signup } from "./index";
import UnProtectedRoute from "./coponents/UnProtectedRoute";
import ProtectedRoute from "./coponents/ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        {/* Protectrd Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route element={<Dashboard />} />
        </Route>

        {/* UnProtected Routes */}
        <Route path="/" element={<UnProtectedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/:username" element={<UserLinks />} />
      </Routes>
    </>
  );
}

export default App;

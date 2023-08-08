import UserLinks from "./coponents/user/UserLinks";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Signup } from "./index";
import UnProtectedRoute from "./coponents/UnProtectedRoute";
import ProtectedRoute from "./coponents/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Edit from "./coponents/dashboard/Edit";
function App() {
  return (
    <>
      <Routes>
        {/* Protectrd Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="edit/:id" element={<Edit />} />
          </Route>
        </Route>

        {/* UnProtected Routes */}
        <Route path="/" element={<UnProtectedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/:username" element={<UserLinks />} />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            textTransform: "capitalize",
          },
        }}
      />
    </>
  );
}

export default App;

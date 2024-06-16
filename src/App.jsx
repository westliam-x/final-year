import Admin from "./admin/admin";
import AdminMedical from "./admin/medical";
import Login from "./admin";
import Userlogin from "./user";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import "./App.css";
import Registration from "./user/registration";
import Pending from "./admin/pending";
import BusinessProfile from "./admin/pendingBusinesses";
import Finance from "./admin/finance";
import Education from "./admin/education";
import Users from "./admin/users";
import UserProfile from "./admin/userProfile";
import User from "./user/dashboard";
// import MedicalAdmin from "./user/registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      {/* Admin */}
      <Route path="/admin/home" element={<Admin />} />
      <Route path="/admin/medical" element={<AdminMedical />} />
      <Route path="/admin/finance" element={<Finance />} />
      <Route path="/admin/education" element={<Education />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/pending" element={<Pending />} />
      <Route path="/admin/pending/profile/:id" element={<BusinessProfile />} />
      <Route path="/admin/pending/userprofile/:id" element={<UserProfile />} />
      <Route path="/admin/" element={<Login />} />



      {/* User */}
      <Route path="/user/home" element={<User />} />
      <Route path="/user/registration" element={<Registration />} />
      <Route path="/user/" element={<Userlogin />} />
    </Route>
  )
)
function App({routes}) {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

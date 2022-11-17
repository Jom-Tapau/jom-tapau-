import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Head from './Components/Head/Head';
import Login from './Components/Login/Login';

import Registration from './Components/Registration/Registration'
import Home from './Components/Home/Home';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Admin from './Components/Admin/Admin';
import Rider from './Components/Rider/Rider';
import AddFood from './Components/Admin/AddFood';
import EditUser from './Components/EditUser/EditUser';
import EditCustomer from './Components/EditUser/EditCustomer';
import EditRIder from './Components/EditUser/EditRIder';

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Routes>
     

        <Route path="/menu" element={  <Menu></Menu>}></Route>
        {/* <Route path="/homepage" element={  <RequireAuth><Homepage></Homepage></RequireAuth>}></Route> */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/rider" element={<Rider></Rider>}></Route>
        <Route path="/addfood" element={<AddFood></AddFood>}></Route>
        <Route path="/editUser" element={<EditUser></EditUser>}></Route>
        <Route path="/editCustomer" element={<EditCustomer></EditCustomer>}></Route>
        <Route path="/editRider" element={<EditRIder></EditRIder>}></Route>
  

      </Routes>
    </div>
  );
}

export default App;

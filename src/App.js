import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Head from "./Components/Head/Head";
import Login from "./Components/Login/Login";

import Registration from "./Components/Registration/Registration";
import Home from "./Components/Home/Home";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Admin from "./Components/Admin/Admin";
import Rider from "./Components/Rider/Rider";
import AddFood from "./Components/Admin/AddFood";
import EditUser from "./Components/EditUser/EditUser";
import EditCustomer from "./Components/EditUser/EditCustomer";
import EditRIder from "./Components/EditUser/EditRIder";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import AddRider from "./Components/Rider/AddRider";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import EditFood from "./Components/EditFood/EditFood";
import UpdateFood from "./Components/EditFood/UpdateFood";
import Payment from "./Components/Payment/Payment";
import RiderDash from "./Components/RiderDash/RiderDash";

function App() {
    let location = useLocation();
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [incrementCount, setIncrementCount] = useState(1);

  const handleAddtoCart = (item) => {
    const itemFind = cart.find((cartitem) => cartitem._id == item._id);
    if (itemFind) {
      itemFind.quantity = parseInt(itemFind.quantity) + 1;
    } else {
      cart.push(item);
      // setCart([...cart], item);
    }
    setCount(count + 1);
    console.log(cart);
  };
  return (
    <div className="App">
      <Head count={count}></Head>
      <Routes>
        <Route
          path="/menu"
          element={<Menu handleAddtoCart={handleAddtoCart}></Menu>}
        ></Route>
        {/* <Route path="/homepage" element={  <RequireAuth><Homepage></Homepage></RequireAuth>}></Route> */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/rider" element={<Rider></Rider>}></Route>
        <Route path="/addfood" element={<AddFood></AddFood>}></Route>
        <Route path="/EditFood" element={<EditFood></EditFood>}></Route>
        <Route path="/EditFood/:foodID" element={<UpdateFood></UpdateFood>} />
        <Route
          path="/forgotPassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/editCustomer"
          element={<EditCustomer></EditCustomer>}
        ></Route>
        <Route path="/editRider" element={<EditRIder></EditRIder>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/payment" element={<Payment cart={cart}></Payment>}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              count={count}
              setCart={setCart}
              setCount={setCount}
              cart={cart}
              incrementCount={incrementCount}
            ></Cart>
          }
        ></Route>
        <Route path="/riderDash" element={<RiderDash></RiderDash>}></Route>
      </Routes>
      {location.pathname !== "/registration" &&
        location.pathname !== "/login" && <Footer /> && location.pathname !== "/payment" &&<Footer />}
    </div>
  )
}

export default App;

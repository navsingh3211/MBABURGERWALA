import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import { Provider } from 'react-redux'; 
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";

import { useDispatch,useSelector,Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import {toast,Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import "./styles/about.scss";



// function App2() {

//   const dispatch = useDispatch(); 
//   const { error, message, user, isAuthenticated } = useSelector(state => state.auth);
  
//   useEffect(() => {
//     dispatch(loadUser());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({
//         type:"clearError"
//       });
//     }
//     if (message) {
//       toast.success(message);
//       dispatch({
//         type: "clearMessage",
//       });
//     }
//   }, [dispatch, error,message]);
  
//   return (
//     <Router>
//        />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/cart" element={<Cart />}></Route>
//         <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>

//         <Route
//           path="/login"
//           element={
//             <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
//               <Login />
//             </ProtectedRoute>
//           }
//         ></Route>

//         <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
//           <Route path="/me" element={<Profile />} />
//           <Route path="/shipping" element={<Shipping />}></Route>
//           <Route path="/confirmOrder" element={<ConfirmOrder />}></Route>
//           <Route path="/myorders" element={<MyOrders />}></Route>
//           <Route path="/order/:id" element={<OrderDetails />}></Route>
//         </Route>

//         <Route
//           element={
//             <ProtectedRoute
//               isAuthenticated={isAuthenticated}
//               adminRoute={true}
//               // isAdmin={user.role === "admin"}
//               isAdmin={false}
//               redirectAdmin="/me"
//             />
//           }
//         >
//           <Route path="/admin/dashboard" element={<Dashboard />}></Route>
//           <Route path="/admin/users" element={<Users />}></Route>
//           <Route path="/admin/orders" element={<Orders />}></Route>
//         </Route>

//         <Route path="*" element={<NotFound />}></Route>
//       </Routes>

//       <Footer />
//       <Toaster />
//     </Router>
//   );
// }


function App() {

  // const dispatch = useDispatch();  
  const data = useSelector(state => state.aboutMe);
  console.log(data)
  
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route> */}

        <Route path="/login" element={<Login />} ></Route>

        {/* <Route element={<ProtectedRoute  />}> */}
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />}></Route>
          <Route path="/confirmOrder" element={<ConfirmOrder />}></Route>
          <Route path="/myorders" element={<MyOrders />}></Route>
          <Route path="/order/:id" element={<OrderDetails />}></Route>
        {/* </Route> */}

        {/* <Route
          element={
            <ProtectedRoute
              adminRoute={true}
              // isAdmin={user.role === "admin"}
              isAdmin={false}
              redirectAdmin="/me"
            />
          }
        > */}
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/users" element={<Users />}></Route>
          <Route path="/admin/orders" element={<Orders />}></Route>
        {/* </Route> */}

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;

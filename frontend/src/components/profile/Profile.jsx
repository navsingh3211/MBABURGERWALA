import React, { useEffect, useState,useCallback } from 'react';
import axios from "axios";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
import { Link } from "react-router-dom";
import {MdDashboard} from "react-icons/md"
import { useDispatch ,useSelector} from "react-redux";
import { logout } from "../../redux/actions/user";
import {showUser} from "../../features/userDetailsSlice"


const Profile = () => {
  console.log("moemfdoemf") 
  //   return {1:2,3:4}
    console.log("moemfdoemf")
    const options = {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
    };
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const dispatch=useDispatch();

    // const { userss } = useSelector((state) => state.aboutMe.users);
    const  users  = useSelector((state) => state.aboutMe);

    console.log(users?.users?.name,'ram');


    useEffect(()=>{
       dispatch(showUser())
    },[]);
   
    return (
      <section className="profile">
        <main>
          <motion.img src={me} alt="User" {...options} />
          <motion.h5 {...options} transition={{ delay: 0.3 }}>
            {users?.users?.name}
          </motion.h5>
          <motion.div {...options} transition={{ delay: 0.5 }}>
            <Link to="/admin/dashboard" style={{borderRadius:0,backgroundColor:"rgb(40,40,40)"}}><MdDashboard/>DashBoard</Link>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link to="/myorders">orders</Link>
          </motion.div>
          <motion.button
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={{}} //{logoutHandler}
          >
            Logout
          </motion.button>
        </main>
      </section>
    );
};


export default Profile;

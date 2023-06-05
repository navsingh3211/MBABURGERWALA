import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

// import { motion } from "framer-motion";
// import me from "../../assets/founder.jpg";

const Menu = () => {
    const addToCartHandler = (itemNum) => {
      
    }

    return (
      <section id="menu">
        <h1>MENU</h1>
        <div>
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            price={110}
            title="Cheese Burger"
            handler={addToCartHandler}
            delay={0.1}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger2}
            price={170}
            title="Veg Cheese Burger"
            handler={addToCartHandler}
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            price={210}
            title="Chicken Burger Full"
            handler={addToCartHandler}
            delay={0.8}
          />
        </div>
      </section>
    );
};

export default Menu;

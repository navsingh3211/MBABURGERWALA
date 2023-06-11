import React from "react";
import {AiFillYoutube,AiFillGithub} from "react-icons/ai"


const Footer = () => {
  
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you the best teste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights reserved to @navsingh3211</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.youtube.com/watch?v=QWJi3sBzaxE&ab_channel=KrishnaKunj">
          <AiFillYoutube />
        </a>
        <a href="https://github.com/navsingh3211?tab=repositories">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;

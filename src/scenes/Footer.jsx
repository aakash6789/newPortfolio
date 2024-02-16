import SocialMediaIcons from "../components/SocialMediaIcons";
import "./foot.css";

const Footer = () => {
  return (
    // <footer className="h-21 bg-white pt-1">
    //   <div className="w-10/12 mx-auto">
    //     <SocialMediaIcons />
    //     <div className="md:flex justify-center md:justify-between text-center ">
    //       <p className="font-playfair font-semibold text-2xl text-black">
    //       AKASH CHAUDHARY
    //       </p>
    //       <p className="font-playfair text-md text-white">
    //         ©2023 AKASHCHAUDHARY. All Rights Reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer>
      <div className="wave">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        {/* <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li> */}
        <SocialMediaIcons/>
        
      </ul>
      <div>
        <p className="rights">@2023 AKASH CHAUDHARY || ALL RIGHTS RESERVED</p>
        </div>
    </footer>
  );
};

export default Footer;
// #332F2E #2E3233
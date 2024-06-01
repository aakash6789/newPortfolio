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
    <footer className="bg-black text-white">
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
        {/* <SocialMediaIcons/> */}
        <div className="flex  justify-center md:justify-start my-10 gap-7">
        <a
            className="hover:opacity-50 transistion duration-500"
            href="https://www.linkedin.com/in/aakash-chaudhary-6312a922a/"
            target="_blank"
            rel="noreferrer"
            >
            <img alt="linkedin-link" src="./assets/linkedin.png"/>
            {/* <img alt="linkedin-link" src={linkedlnlogo}/> */}
        </a>
        <a
            className="hover:opacity-50 transistion duration-500"
            href="https://github.com/aakash6789"
            target="_blank"
            rel="noreferrer"
            >
            <img alt="instagram-link" src="./assets/instagram.png"/>
        </a>
        <a
            className="hover:opacity-50 transistion duration-500"
            href="https://github.com/aakash6789"
            target="_blank"
            rel="noreferrer"
            >
            <img alt="github-link" src="./assets/github (1).png"/>
        </a>
       
        

    </div>
        
      </ul>
      <div>
        <p className="rights text-[0.8rem]">@2023 AKASH CHAUDHARY || ALL RIGHTS RESERVED</p>
        </div>
    </footer>
  );
};

export default Footer;
// #332F2E #2E3233
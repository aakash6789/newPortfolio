import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-21 bg-white pt-1">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-black">
          AKASH CHAUDHARY
          </p>
          <p className="font-playfair text-md text-white">
            ©2023 AKASHCHAUDHARY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// #332F2E #2E3233
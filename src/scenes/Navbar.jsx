import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
const Link=({page,selectedPage,setSelectedpage})=>{
    const lowerCasePage=page.toLowerCase();
    return(
            <AnchorLink className={`${selectedPage==lowerCasePage?"text-yellow":""} 
            hover:text-yellow transition duration-500`
        }
        href={`#${lowerCasePage}`}
        onClick={()=>setSelectedpage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar=({isTopOfPage,selectedPage,setSelectedpage})=>{
    const [isMenuToggled,setIsMenuToggled]=useState(false);
    const isAboveSmallScreens=useMediaQuery("(min-width:768px)");
    const navbarBackground=isTopOfPage?"":"bg-white";

    return(
        <nav style={{color:isTopOfPage?"white":"black"}} className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold">AC</h4>

            {/* DESKTOP NAV */}
            {isAboveSmallScreens?( 
                <div  className={"flex justify-between gap-16 font-opensans text-sm  font-semibold"}>
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                </div>
            ):(<button className="rounded-full bg-red p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <img alt="menu-icon" src='./assets/menu-icon.svg'/>
            </button>)}
            {/* MOBILE MENU POPUP  */}
            {!isAboveSmallScreens && isMenuToggled &&(
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                    {/* CLOSE ICON  */}
                    <div className="flex justify-end p-12">
                        <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <img alt="close-icon" src='./assets/close-icon.svg'/>
                        </button>
                    </div>
                    {/* MENU ITEMS  */}
                    <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />
                    <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedpage={setSelectedpage}
                    />   
                    </div>

                </div>

            )}
            </div>
        </nav>
    )
};
export default Navbar;


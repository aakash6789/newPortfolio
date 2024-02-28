import linkedlnlogo from '../assets/download.png'
const SocialMediaIcons=()=>{
return(
    <div className="flex justify-center md:justify-start my-10 gap-7">
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
)
}
export default SocialMediaIcons;
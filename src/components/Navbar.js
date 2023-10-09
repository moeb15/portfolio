import { FaBars,FaTimes,FaGithub,FaLinkedin,FaKaggle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar(){
    const [ nav,setNav ] = useState(false);
    const handleClick = () => setNav(!nav); 

    return(
        <div className="fixed w-full h-[80px] 
                        flex justify-between 
                        items-center px-4
                        bg-[#0a192f]
                        text-gray-300">
            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
            </ul>
           
            {/* hamburger */}
            <div className="md:hidden z-10">
                {!nav ?
                    <FaBars onClick={handleClick}/> :
                    <FaTimes onClick={handleClick}/>
                }
            </div>
            
            {/* mobile-menu */}
            <ul className={nav ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" : 
                                "hidden"}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
            </ul>   
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/moeb15/">
                            Github
                            <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/mujtaba-bader-90279b14a/">
                            LinkedIn
                            <FaLinkedin size={30}/>
                        </a>
                    </li>
                    {/*<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.kaggle.com/mbader12">
                            Kaggle
                            <FaKaggle size={30}/>
                        </a>
            </li>*/}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
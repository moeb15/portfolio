import { FaPython,FaHtml5,FaCss3Alt,FaDocker } from "react-icons/fa";
import { FaGolang,FaReact } from "react-icons/fa6";
import { BiLogoGoogleCloud,BiLogoJavascript } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

function Skills(){
    return(
        <div name="skills" className=" bg-[#0a192f] text-gray-300">

            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl py-4 font-bold border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies I'm familiar with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <FaHtml5 className="mx-auto" size={30}/>
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <FaCss3Alt className="mx-auto" size={30}/>
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <BiLogoJavascript className="mx-auto" size={30}/>
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <FaReact className="mx-auto" size={30}/>
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <FaPython className="mx-auto" size={30}/>
                        <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <FaGolang className="mx-auto" size={30}/>
                        <p className="my-4">Go</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <AiOutlineConsoleSql className="mx-auto" size={30}/>
                        <p className="my-4">SQL</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <FaDocker className="mx-auto" size={30}/>
                        <p className="my-4">Docker</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <SiPostman className="mx-auto" size={30}/>
                        <p className="my-4">Postman</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <BiLogoGoogleCloud className="mx-auto" size={30}/>
                        <p className="my-4">Google Cloud Platform</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
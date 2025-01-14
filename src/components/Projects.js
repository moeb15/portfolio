import { GiClothes, GiHighPunch, GiJumpAcross } from "react-icons/gi";
import { SiNewegg, SiUnrealengine } from "react-icons/si";
import { AiFillLock } from "react-icons/ai";
import { FaGun } from "react-icons/fa6";

function Projects(){
    return(
        <div name="projects" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold linline border-b-4 border-pink-600">Projects</p>
                    <p className="py-6">Checkout some of my projects, click the icons to view the repositories</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-pink-800 duration-500 p-4 w-full">
                            <a href="https://github.com/moeb15/RetroFPS">
                                <FaGun className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Retro FPS
                            </span>
                            <p className="text-sm">Built with C++ and Unreal Engine 5</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-green-700 duration-500 p-4  w-full">
                            <a href="https://github.com/moeb15/3D-OpenGL-Game">
                                <SiUnrealengine className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                3D Game Engine
                            </span>
                            <p className="text-sm">Developed using C++, GLSL, GLFW, GLM, Assimp, and OpenGL </p>
                            <p className="text-sm"> Actively working on this project </p>
                        </div>

                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-red-500 duration-500 p-4 w-full">
                            <a href="https://github.com/moeb15/2D-Platformer">
                                <GiJumpAcross className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                2D Platformer
                            </span>
                            <p className="text-sm">Built with C++, SFML, ImGui, Aesprite, and Reaper</p>
                        </div>

                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-orange-600 duration-500 p-4 w-full">
                            <a href="https://github.com/moeb15/E-Commerce-Scraper">
                                <SiNewegg className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                E-Commerce Data Scraper Web Application
                            </span>
                            <p className="text-sm">Built with Python, Flask, BeautifulSoup, Docker, Terraform, and GCP</p>
                        </div>

                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-blue-600 duration-500 p-4 w-full">
                            <a href="https://github.com/moeb15/Clothing-Segmentation-UNet">
                                <GiClothes className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Outfit Segmenation with UNet
                            </span>
                            <p className="text-sm">Built with Python, OpenCV, and TensorFlow</p>
                        </div>

                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-yellow-900 duration-500 p-4 w-full">
                            <a href="https://github.com/moeb15/Medieval-Fighter">
                                <GiHighPunch className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                2D Fighting Game
                            </span>
                            <p className="text-sm">Developed with C++, SFML, and Gimp</p>
                        </div>

                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-pink-800 duration-500 p-4 w-full">
                            <a href="https://github.com/moeb15/Password-Manager">
                                <AiFillLock className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Password Manager
                            </span>
                            <p className="text-sm">Built with Go, Gin, Golang-JWT, MongoDB, the Go Crypto package, JavaScript, React, and Tailwind CSS</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Projects;
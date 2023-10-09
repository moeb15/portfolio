import { FaSpotify } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { SiNewegg } from "react-icons/si";


function Projects(){
    return(
        <div name="projects" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold linline border-b-4 border-pink-600">Projects</p>
                    <p className="py-6">Checkout some of my projects, click the icons to view the repositories</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-green-700 duration-500 p-4  w-full">
                            <a href="https://github.com/moeb15/spotify_recommender">
                                <FaSpotify className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Spotify Recommender System
                            </span>
                            <p className="text-sm">Built with Python, pandas, Scikit-Learn, KModes, SQL, and Streamlit</p>
                        </div>

                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-red-500 duration-500 p-4 w-full">
                            <a href="https://github.com/moeb15/forum_app">
                                <MdForum className="mx-auto" size={30}/>
                            </a>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Forum Website
                            </span>
                            <p className="text-sm">Built with Go, Gin, Gorm, Golang-JWT, PostgreSQL, JavaScript, and React</p>
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
                    </div>
                </div>
        </div>
    )
}

export default Projects;
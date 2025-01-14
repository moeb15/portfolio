import Video from "./Video.js";
import video1 from "../assets/PlatformerVideo.mp4";
import video2 from"../assets/3DEngineDemo.mp4"
import video3 from"../assets/RetroFPSVideoCompressed.mp4"


function Demos(){
    return(
        <div name="demos" className="bg-[#0a192f] w-full md:h-screen text-gray-300 pt-20">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold linline border-b-4 border-pink-600">Demos</p>
                    <p className="py-6">Here are some demos of what I'm currently working on</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-[#1e67d4] duration-500 p-4 w-fit text-center">
                                <Video v={video3}/>
                                <span className="text-m font-bold text-white tracking-wider">
                                    Retro FPS
                                </span>
                                <p className="text-sm">Bulit with C++ and Unreal Engine 5</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] rounded-md hover:bg-[#1e67d4] duration-500 p-4 w-fit text-center">
                                <Video v={video1}/>
                                <span className="text-m font-bold text-white tracking-wider">
                                    2D Medieval Themed Platformer
                                </span>
                                <p className="text-sm">Being bulit with C++, SFML, and my custom 2D engine</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Demos;
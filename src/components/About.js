function About(){
    return(
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                        <div className="sm:text-4xl font-bold">
                            <p>Hi, I'm Moe, nice to meet you. Please take a look around.</p>
                        </div>
                        <div>
                            <p>
                                I'm a recent graduate from the University of Waterloo with 
                                a Bachelor's of Mathematics, Honours Applied Mathematics major. 
                                I enjoy programming, in particular I spend my time learning about game and game engine development,
                                 and building full stack projects. 
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About;
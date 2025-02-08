
import HeroImage from '../../assets/hero-phone.png'
function Hero() {
    return (
        <header className='md:pt-20 pt-35 overflow-hidden h-screen relative'>
            <div className="h-screen relative flex flex-col md:flex-row md:items-center justify-center">
                <div className="flex flex-col md:flex-row sm:relative md:absolute z-0 gap-0 md:gap-[3rem] mb-5 md:mb-20 ">
                    <div className="w-full md:w-[27rem] gap-3 flex md:flex-col justify-center">
                        <h2 className="text-3xl md:text-7xl  text-center text-white font-urbanist font-medium">Meet </h2>
                        <h2 className="text-3xl md:text-7xl font-medium text-center  text-white">People</h2>
                    </div>

                    <div className="w-full md:w-[27rem] gap-3 flex md:flex-col justify-center">
                        <h2 className="text-3xl md:text-7xl  font-medium text-center  text-white">Your </h2>
                        <h2 className="text-3xl md:text-7xl font-medium text-center text-white">Way</h2>
                    </div>
                </div>
                <div className='relative z-1 flex items-center justify-center'>
                    <div className="h-full w-[50%] absolute top-0 -z-1 bg-gradient-to-r from-black/30 via-black/90 to-black/30"></div>

                    <img src={HeroImage} alt="Hero" className="w-[90%] md:ms-8 ms-12 md:w-[40%]" />
                </div>
            </div>
            <div className="h-[300px] absolute bottom-0 z-20 w-full bg-gradient-to-t from-black via-black-900/100 to-transparent flex items-center justify-end flex-col pb-10">
                <button className='py-3 bg-black px-10 rounded-full z-50 border border-orange-500 text-white'>Download the App</button>
                <p className='mt-5 text-white text-sm'>Don’t Be Late to the Party – Get Early Access Today!</p>
            </div>
        </header>
    )
}

export default Hero
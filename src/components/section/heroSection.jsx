
import HeroImage from '../../assets/hero-phone.png'
function HeroSection() {
    return (
        <header className='md:pt-20 pt-35 overflow-hidden h-screen relative'>
            <div className="h-[300px] absolute bottom-0 z-20 w-full bg-gradient-to-t from-black via-black-900/100 to-transparent">
            </div>
            <div className="h-screen relative flex flex-col md:flex-row md:items-center justify-center">
                <div className="flex flex-col md:flex-row gap-0 md:gap-4 sm:relative md:absolute z-0 gap-0 md:gap-[3rem] mb-5 md:mb-20">
                    <div className="w-full md:w-[27rem] gap-3 flex md:flex-col justify-center">
                        <h2 className="text-3xl md:text-7xl font-normal text-center text-white">Meet </h2>
                        <h2 className="text-3xl md:text-7xl font-normal text-center  text-white">People</h2>
                    </div>

                    <div className="w-full md:w-[27rem] gap-3 flex md:flex-col justify-center">
                        <h2 className="text-3xl md:text-7xl  font-normal text-center  text-white">Your </h2>
                        <h2 className="text-3xl md:text-7xl font-normal text-center text-white">Way</h2>
                    </div>
                </div>
                <div className='relative z-1 flex items-center justify-center'>
                    <img src={HeroImage} alt="Hero" className="w-[90%] md:ms-8 ms-12 md:w-[40%]" />
                </div>
            </div>
        </header>
    )
}

export default HeroSection
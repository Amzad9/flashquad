
import HeroImage from '../../assets/hero-phone.png'
function HeroSection() {
    return (
        <header className='pt-20 overflow-hidden h-screen'>
            <div className="h-screen relative flex items-center justify-center">
                <div className="flex gap-4 absolute z-0 gap-[3rem] mb-20">
                    <div className="w-[27rem]">
                        <h2 className="text-7xl font-normal text-center text-white">Meet </h2>
 <h2 className="text-7xl font-normal text-center  text-white">People</h2>
                    </div>

                    <div className="w-[27rem]">
                        <h2 className="text-7xl font-normal text-center  text-white">Your </h2>
    <h2 className="text-7xl font-normal text-center text-white">Way</h2>
                    </div>
                </div>
                <div className='relative z-1 flex items-center justify-center'>
                    <img src={HeroImage} alt="Hero" className="w-[40%]" />
                </div>
            </div>
        </header>
    )
}

export default HeroSection
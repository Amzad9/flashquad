import FlipCard from "../Card"


function OurValues() {

    return (
        <section className="bg-dark h-screen bg-dark pt-20">
            <div className="md:container mx-auto">
                <div className="text-center">
                    <p className="text-xl">Making Socail Media Truly Social</p>
                    <h2 className="text-6xl text-white font-medium">Our Values</h2>
                </div>

            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <FlipCard rotateByDefaulrt={20} />
                <FlipCard />
                <FlipCard />
                <FlipCard />
            </div>


        </section>
    )
}

export default OurValues
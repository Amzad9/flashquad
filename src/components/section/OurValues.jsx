import FlipCard from "../Card";

function OurValues() {
  return (
    <section className="bg-dark h-auto md:h-screen bg-dark pt-20">
      <div className="md:container mx-auto">
        <div className="text-center">
          <p className="text-xl">Making Social Media Truly Social</p>
          <h2 className="text-6xl text-white font-medium">Our Values</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Corrected the typo for rotateByDefault */}
        <FlipCard rotateByDefault={10} />
        <FlipCard rotateByDefault={-10} /> {/* You can pass a default of 0 for others */}
        <FlipCard rotateByDefault={10} /> {/* Customize as needed */}
        <FlipCard rotateByDefault={-10} /> {/* Another example */}
      </div>
    </section>
  );
}

export default OurValues;

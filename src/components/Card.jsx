import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from 'prop-types';
import CardImg from "../assets/card.png";

export default function FlipCard({ rotateByDefault }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-64 h-78 perspective-[1000px] mt-10 ">
      <motion.div
        className="w-full h-full absolute"
        initial={{ rotateZ: rotateByDefault }} // Rotate by the value passed from parent
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={CardImg} alt="Card Front" className="rounded-lg" />
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-gray-800 text-white text-xl font-bold rounded-lg border-2 border-e-amber-400"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden"
          }}
        >

          <div className="text-start p-4">
            <h2 className="text-2xl font-bold mb-2 text-amber-700">Humanity:</h2>
            <h4 className="mb-20">Real people, real connections</h4>
            <p className="text-sm">
              At Flashquad, we value genuine connections, fostering fun, safe, and respectful interactions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

FlipCard.propTypes = {
  rotateByDefault: PropTypes.number.isRequired,
};

import { motion, useScroll, useTransform } from "framer-motion";

function Passions() {
    // Hook to track scroll progress
    const { scrollYProgress } = useScroll();

    // Transform scroll progress into x-axis movement
    const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

    return (
        <div className="h-screen flex items-center justify-center overflow-hidden bg-[url('https://cdn.prod.website-files.com/672f0d4d7f4c51f604c1a912/672f0d4d7f4c51f604c1a92b_passions.avif')] bg-cover bg-center">
            <motion.h2
                className="text-[16vw] text-white text-start whitespace-nowrap"
                style={{ x }} // Apply the x transformation
            >
                New passions
            </motion.h2>
        </div>
    );
}

export default Passions;
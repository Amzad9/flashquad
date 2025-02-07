// import { useEffect, useRef, useState } from "react";
// import { gsap, Linear } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import useIsDesktop from "../../../common/useIsDesktop";
// import { NO_MOTION_PREFERENCE_QUERY } from "../../../config/constants";
// import Lottie from "lottie-react";
// import privacy from "../../../assets/privacy.json";

// gsap.registerPlugin(ScrollTrigger);

// const PROJECT_STYLES = {
//   SECTION: "w-full relative select-none section-container flex-col flex py-8 justify-center overflow-hidden",
//   PROJECTS_WRAPPER: "mt-6 flex gap-10 project-wrapper w-fit", // Adjusted for better scrolling
// };

// const PROJECTS = [
//   { title: "We're Here", description: "When you need us - no hassle, just help." },
//   { title: "Private Squads", description: "You have full control over who participates in your squads." },
//   { title: "Community Guidelines", description: "We promote respect and positive behavior through clear community rules." },
//   { title: "Community Guidelines", description: "We promote respect and positive behavior through clear community rules." },
//   { title: "Community Guidelines", description: "We promote respect and positive behavior through clear community rules." },
//   { title: "Community Guidelines", description: "We promote respect and positive behavior through clear community rules." },
//   { title: "Community Guidelines", description: "We promote respect and positive behavior through clear community rules." },
//   { title: "Zero Tolerance Policy", description: "We have ZERO tolerance towards inappropriate behavior and content." },
// ];

// const ScrollingCards = () => {
//   const isDesktop = useIsDesktop();
//   const targetSectionRef = useRef(null);
//   const sectionTitleElementRef = useRef(null);
//   const projectsWrapperRef = useRef(null);

//   const [horizontalAnimationEnabled, setHorizontalAnimationEnabled] = useState(false);
//   const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);
//     const handleMotionChange = (e) => setPrefersReducedMotion(!e.matches);
//     setPrefersReducedMotion(!mediaQuery.matches);
//     mediaQuery.addEventListener("change", handleMotionChange);
//     return () => mediaQuery.removeEventListener("change", handleMotionChange);
//   }, []);

//   useEffect(() => {
//     setHorizontalAnimationEnabled(isDesktop && !prefersReducedMotion);
//   }, [isDesktop, prefersReducedMotion]);

//   useEffect(() => {
//     if (!horizontalAnimationEnabled || !targetSectionRef.current || !projectsWrapperRef.current) return;

//     const container = targetSectionRef.current;
//     const wrapper = projectsWrapperRef.current;
//     const totalWidth = wrapper.scrollWidth - window.innerWidth;

//     gsap.to(wrapper, {
//       x: -totalWidth,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: `+=${totalWidth}`,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });
//   }, [horizontalAnimationEnabled]);

//   return (
//     <section ref={targetSectionRef} className={`${isDesktop ? "min-h-screen" : ""} ${PROJECT_STYLES.SECTION}`}>
//       <div ref={sectionTitleElementRef} className="flex flex-col justify-center items-center mb-10">
//         <div className="flex justify-center items-center">
//           <h2 className="text-7xl font-semibold">Your</h2>
//           <div className="h-[64px] w-[64px]">
//             <Lottie animationData={privacy} loop={true} />
//           </div>
//           <h2 className="text-7xl font-semibold"> Safety</h2>
//         </div>
//         <h2 className="text-7xl font-semibold">Is Our Priority</h2>
//       </div>

//       <div ref={projectsWrapperRef} className={PROJECT_STYLES.PROJECTS_WRAPPER}>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className="bg-gray-100 p-6 rounded-lg w-80 shadow-lg">
//             <h3 className="text-[1.5rem] mb-3 text-black font-light">{project.title}</h3>
//             <p className="text-gray-600">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ScrollingCards;

import { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsDesktop from "../../../common/useIsDesktop";
import { NO_MOTION_PREFERENCE_QUERY } from "../../../config/constants";
import Lottie from "lottie-react";
import privacy from "../../../assets/privacy.json";
import chat from "./chat.json";
import chat2 from "./chat2.json";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "We're Here",
    icons: chat2,
    description: "When you need us - no hassle, just help.",
  },
  {
    title: "Private Squads",
    icons: chat2,
    description: "You have full control over who participates in your squads.",
  },
  {
    title: "Community Guidelines",
    icons: chat2,
    description:
      "We promote respect and positive behavior through clear community rules.",
  },
  {
    title: "Zero Tolerance Policy",
    icons: chat2,
    description:
      "We have ZERO tolerance towards inappropriate behavior and content.",
  },
  {
    title: "We're Here",
    icons: chat2,
    description: "When you need us - no hassle, just help.",
  },
  {
    title: "Private Squads",
    icons: chat2,
    description: "You have full control over who participates in your squads.",
  },
];

const ScrollingCards = () => {
  const isDesktop = useIsDesktop();
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  //   const titleRef = useRef(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);
    const handleMotionChange = (e) => setPrefersReducedMotion(!e.matches);
    setPrefersReducedMotion(!mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const container = containerRef.current;
    const content = contentRef.current;
    // const title = titleRef.current;
    const totalWidth = content.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(content, {
      x: -scrollDistance,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1.2,
        pin: true,
      },
    });

    // gsap.to(title, {
    //   x: scrollDistance / 2,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: container,
    //     start: "top top",
    //     end: `+=${scrollDistance}`,
    //     scrub: 1.2,
    //   },
    // });
  }, [isDesktop, prefersReducedMotion]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="text-center mb-12">
        <h2 className="text-7xl font-semibold flex items-center justify-center gap-3">
          Your <Lottie animationData={privacy} loop className="h-16 w-16" />{" "}
          Safety
        </h2>
        <h2 className="text-7xl font-semibold">Is Our Priority</h2>
      </div>

      <div >
        <div ref={contentRef} className="flex gap-6 w-fit px-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 h-full p-6 rounded-lg w-80 shadow-lg"
            >
              <Lottie
                animationData={project.icons}
                loop
                className="h-full w-44 mb-10 mx-auto"
              />

              <h3 className="text-[1.5rem] mb-3 text-black font-light">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingCards;

import "./footer.scss";

const Footer = () => {
  const socials = [
    { href: "#", className: "instagram" },
    { href: "#", className: "twitter" },
    { href: "#", className: "linkedin" },
    { href: "#", className: "codepen" },
  ];

  return (
    <footer className="bg-black rounded-tl-4xl rounded-tr-4xl text-white py-14 px-5 md:px-10 text-center">
      <div className="relative mb-20">
        <h2 className="text-3xl md:text-[87px] font-normal">
          Pssst... We&#39;re waiting for you!
        </h2>
      </div>

      <div className="grid grid-cols-12 items-center mt-6">
        {/* Email Links */}
        <div className="col-span-12 md:col-span-4 items-center">
          <div className="flex items-center justify-center gap-7">
            <a
              href="mailto:contact@flashquad.com"
              className="text-[#f3f4f699] hover:text-green-500 text-sm md:text-sm"
            >
              contact@flashquad.com
            </a>
            <a
              href="mailto:press@flashquad.com"
              className="text-[#f3f4f699] hover:text-green-500 text-sm md:text-sm"
            >
              press@flashquad.com
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-xs md:text-sm">
            Flashquad Corporation - All Rights Reserved ©2024
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="col-span-12 md:col-span-4 py-5 md:py-0 w-full flex justify-center items-center">
          <ul className="flex gap-5">
            {socials.map((social, index) => (
              <li key={index} className="relative icons-wrap p-3 rounded-full bg-gray-800">
                <a
                  href={social.href}
                  className={`block ${social.className}`}
                ></a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
      <div className="col-span-12 md:col-span-4">
  <div className="flex items-center gap-8 justify-center text-[#f3f4f699] text-sm">
          <a href="#" className="hover:text-[#34c404] text-[#f3f4f699]">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-[#34c404] text-[#f3f4f699]">
            Privacy Policy
          </a>
        </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;

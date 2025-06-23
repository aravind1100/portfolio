import codingGif from "../assets/coding.gif";
import socialLinks from "../data/socialLinks"; // Adjust the path as needed

const Hero = () => {
  const resumePdfUrl = "src/assets/Resume (10).pdf";

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center pt-30 md:pt-0 md:flex-row md:items-center md:justify-center md:h-screen text-white px-4 md:gap-10"
    >
      {/* Image */}
      <div className="mb-5 md:mb-0 md:mr-10 lg:mr-0">
        <img
          src={codingGif}
          alt="coder"
          className="w-[360px] sm:w-[300px] md:w-[560px] h-auto rounded"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl">
        <p className="text-lg italic">Hi, I'm</p>
        <h1 className="italic text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mt-2">
          Aravind Raj B
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-400 mt-4">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-green-500 max-w-md mt-6 underline">
          I build responsive and scalable web applications using React, Node.js,
          and MongoDB. Passionate about clean code, performance, and UI/UX.
        </p>

        {/* Buttons */}
        <div className="hidden md:flex space-x-2 mt-5">
          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
             className="flex items-center py-3 px-4 quoteText hover:py-3 hover:px-4 hover:rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 group transform hover:-translate-y-1"
          ><span className="mr-2 text-blue-500 group-hover:text-white transition-colors">
               <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:animate-pulse"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <path d="M14 3v5h5M12 18v-6M9 15h6" />
            </svg>
              </span>
            
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') || link.url.startsWith('mailto') ? "_blank" : undefined}
              rel={link.url.startsWith('http') || link.url.startsWith('mailto') ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className={`${link.color} hover:scale-125 transition`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
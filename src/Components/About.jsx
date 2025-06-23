const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="logoText text-3xl font-bold text-blue-500 pt-5 mb-10 border-b-2 border-blue-300 inline-block">
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image Container */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/153/003/small_2x/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png"
            alt="Programming Illustration"
            className="w-64 h-64 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <p className="text-gray-800 leading-relaxed text-lg">
            Hello! I'm <span className="text-blue-500 font-semibold">Aravind Raj B</span>, a passionate Full Stack Developer with a knack
            for creating seamless and interactive web applications. My journey
            started with curiosity and a love for technology, which turned into a
            fulfilling career.
          </p>
          
          <p className="text-gray-800 leading-relaxed text-lg">
            I believe in building applications that solve real problems while providing intuitive user experiences. My development approach focuses on clean architecture, maintainable code, and performance optimization - ensuring digital products that stand the test of time.
          </p>
          
          <p className="text-gray-800 leading-relaxed text-lg">
            I'm always eager to learn new skills and contribute to impactful projects.
            When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
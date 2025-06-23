import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiRedux, 
  SiTypescript, 
  SiExpress, 
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiNodedotjs,
  SiBootstrap,
  SiMysql  // Import MySQL icon
} from "react-icons/si";

const Skills = () => {
  // Skill data with corresponding icons
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    // { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    // { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },  // Added MySQL
    // { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    // { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "REST APIs", icon: <span className="text-[#0a192f] font-bold">API</span> },
    { name: "Git & GitHub", icon: <div className="flex gap-1">
        <FaGitAlt className="text-orange-600" />
        <FaGithub className="text-gray-800" />
      </div> }
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
     <h2 className="logoText text-3xl pt-5 font-bold text-blue-500 mb-10 border-b-2 border-blue-300 inline-block">
       Skills
      </h2>

      <div className="space-y-16">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-10 text-center">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {frontendSkills.map((skill, index) => (
              <div
                key={`front-${index}`}
                className="flex flex-col items-center gap-2 hover:scale-125 transition"
              >
                <div className="text-5xl">
                  {skill.icon}
                </div>
                <p className="text-gray-800 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-10 text-center">Backend</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {backendSkills.map((skill, index) => (
              <div
                key={`back-${index}`}
                className="flex flex-col items-center gap-2 flex flex-col items-center gap-2 hover:scale-125 transition"
              >
                <div className="text-4xl">
                  {skill.icon}
                </div>
                <p className="text-gray-800 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
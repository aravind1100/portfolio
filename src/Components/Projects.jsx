
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Travel Planner ",
      description : "An App where you can plan your travels and make budgets and plans for specific destinations",
      technologies: ["React" ,"Tailwind CSS", "Node.js", "Express.js","MongoDB" ],
      thumbnail: "/travelPlanner.png",
      previewLink: "https://travelplanner-trip.netlify.app",
      frontendLink: "https://github.com/aravind1100/travelPlanner-frontEnd",
      backendLink: "https://github.com/aravind1100/travelPlanner-backEnd"
    }
    ,
     {
      title: "Construction Website",
      description: "A single page application built for client to showcase their construction works",
      technologies: ["React","Tailwind CSS"],
      thumbnail: "/builders.png",
      previewLink: "https://sskbuilders.netlify.app",
      frontendLink: "https://github.com/aravind1100/saiKrishna-frontEnd",
      backendLink: null
    }
    ,
    {
      title: "My Portfolio",
      description: "A personal website to showcase my skills and projects. Built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS"],
      thumbnail: "/portfolio.png",
      previewLink: "#",
      frontendLink: "https://github.com/yourusername/portfolio-frontend",
      backendLink: null 
    }
  ];

  return (
    <section id="projects" className="py-30 px-4  max-w-6xl mx-auto">
      <h2 className="logoText text-3xl font-bold text-blue-500 mb-10 border-b-2 border-blue-300 inline-block">
        Projects
      </h2>
      
      <div className="space-y-25">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Project Thumbnail */}
              <div className="md:w-3/5 flex items-center justify-center  bg-gray-50">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-lg "
                  
                />
              </div>
              
              {/* Project Details */}
              <div className="md:w-2/5 pl-9 pr-6 pt-6 pb-6">
                <h3 className="text-2xl font-bold text-green-600 mb-3">{project.title}</h3>
                
                <p className="text-gray-600 mb-5">{project.description}</p>
                
                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-center mb-6 gap-5">
                  {project.previewLink && (
                    <div className="px-35">
                    <a 
                      href={project.previewLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt /> Preview
                    </a>
                    </div>
                  )}
                 </div>
                  <div className="flex flex-row justify-center gap-17">
                  {project.frontendLink && (
                    
                    <a 
                      href={project.frontendLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaGithub /> Frontend Code
                    </a>
                  )}
                  
                  {project.backendLink && (
                    <a 
                      href={project.backendLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaGithub /> Backend Code
                    </a>
                    
                  )}
                  </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
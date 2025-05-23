import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="p-8" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-8xl text-customText2 dark:text-darkText2">My Projects</h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg bg-customText2 dark:bg-darkText shadow-lg">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="h-auto w-full object-cover"
                loading='eager'
            style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
            onLoad={(e) => e.currentTarget.style.opacity = 1}
              />
              <div className="absolute bottom-0 left-0 right-0 m-0 p-8 text-customText backdrop-blur-sm bg-customText2 dark:bg-darkText bg-opacity-80 dark:bg-opacity-80 dark:backdrop-blur-sm dark:text-darkBg ">
                <h3 className="text-3xl">{project.title}</h3>
                <p className="max-w-xs text-lg">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

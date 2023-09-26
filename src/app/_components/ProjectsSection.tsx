import { Project, projects } from "../_data/projects_data";

function ProjectCard({ ...data }: Project) {
  return (
    <div className="flex flex-col justify-between w-full rounded-md md:w-72 text-foreground">
      <div className="flex flex-col gap-2">
        <a
          href={data.href}
          className="text-base md:text-xl font-bold underline"
        >
          {data.title}
        </a>
        <p className="text-secondary-btn text-sm md:text-sm">
          {data.description}
        </p>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-xl md:text-2xl font-bold text-foreground w-full md:text-center">
        What I Build
      </h1>
      <div className="w-full flex flex-wrap gap-4 items-start justify-center ">
        {projects.map((v, i) => (
          <div key={i}>
            <div className="flex flex-col justify-center items-center">
              <ProjectCard {...v} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;

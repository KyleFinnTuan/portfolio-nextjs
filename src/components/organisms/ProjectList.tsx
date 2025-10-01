import React from 'react';
import ProjectCard from '../molecules/ProjectCard';

const ProjectList: React.FC<ProjectListProps> = ({
  project = [],
  limit 
}) => {
  const getBackgroundClass = (index: number) => `bg-study${(index % 6) + 1}`;

  return (
    <>
      <div className="mx-auto my-12">
        <div className="flex flex-wrap gap-8">
          {project.slice(0,limit).map((project, index) => (
            <div
              key={project.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <ProjectCard
                imgSrc={project.imgSrc}
                title={project.title}
                work_scope={project.work_scope}
                overview={project.overview}
                slug={project.slug}
                id={project.id}
                backgroundClass={getBackgroundClass(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;

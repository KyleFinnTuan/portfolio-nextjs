import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "../ui/badge";

const ProjectCard: React.FC<ProjectProps> = ({
  imgSrc,
  title,
  overview,
  slug,
  backgroundClass,
  work_scope,
}) => {
  const router = useRouter();

  return (
    <Card
      className={`relative h-[250px] md:h-[300px] shadow-2xl bg-cover bg-center overflow-hidden transition-all group ${backgroundClass}`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="absolute inset-0 bg-[#202020]/0 group-hover:bg-[#202020]/75 transition duration-300 flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-white text-4xl tracking-wide mb-4 transform -translate-y-32 group-hover:translate-y-0 transition-all duration-300">
          {title}
        </h2>
        <div className="tracking-wide mb-4 flex gap-2 transform -translate-y-34 group-hover:translate-y-0 transition-all duration-300">
        {work_scope &&
          work_scope.map((scope, index) => (
              <Badge
                key={index}
                variant="neutral"
                className="text-sm text-black"
              >
                {scope}
              </Badge>
          ))}
          </div>
        <p className="text-white line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 mb-4 max-w-[80%] text-md font-light">
          {overview}
        </p>
        <Button
          variant="neutral"
          onClick={() => router.push(`/projects/${slug}`)}
          className=" text-white border-white border-2 bg-transparent hover:bg-white hover:text-[#202020] opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-300"
        >
          View Case Study
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;

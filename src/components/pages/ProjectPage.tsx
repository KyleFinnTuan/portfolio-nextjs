"use client";

import React from "react";
import ProjectList from "@/components/organisms/ProjectList";
import { projects } from "@/lib/db/ProjectDB";
import { useRouter } from "next/navigation";

const ProjectPage = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div className="px-6 bg-white relative sm:items-start py-24 z-10">
          <div className="container mx-auto items-center">
            <h1 className="font-bold mb-8 text-4xl sm:text-8xl">My Works</h1>
            <p className="text-xl mb-8 max-w-4xl">
              Here are some of the projects I have worked on:
            </p>
            <ProjectList project={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

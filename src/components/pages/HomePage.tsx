"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { tools } from '@/lib/db/ToolDB';
import { projects } from '@/lib/db/ProjectDB';
import SocialIconsList from "@/components/organisms/SkillIconList";
import ProjectList from "@/components/organisms/ProjectList";
import { Button } from '@/components/ui/button'
import Typewriter from "@/components/atoms/TypeWritterEffect";
import HeroParallax from "@/components/organisms/HeroParallax";
import SplitView from "@/components/organisms/SplitView";

const HomePage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen gap-16">
      <div id="root"></div>
      <div>
        <div className="relative z-5">
          <div className="sticky top-0 min-h-screen bg-white hidden lg:block">
            <HeroParallax>
              <SplitView />
            </HeroParallax>
          </div>
          <div className="text-center px-6 sticky top-0 bg-white font-bold">
            <div className="mx-auto items-center sm:items-start container py-28">
              <p className="font-semibold mb-6 text-2xl">Hi, my name is</p>
              <h1 className="font-bold text-4xl sm:text-8xl">
                Kelvin Tan
              </h1>
              <h1 className="font-bold text-4xl sm:text-8xl">
                I'm a
              </h1>
              <h1 className="font-bold mb-8 text-4xl sm:text-8xl">                
                <Typewriter
                  textArray={[
                    "Frontend Developer",
                    "System Integrator",
                    "Designer",
                    "Problem Solver",
                  ]}
                  colorArray={["#e63946", "#2a9d8f", "#f4a261", "#457b9d"]}
                />
              </h1>
              <p className="text-center text-xl mb-8 max-w-4xl mx-auto">
                I'm a frontend developer with a strong understanding of backend
                systems. I've built various websites and web applications — both
                with Webflow and full-code implementations. I also dabble in
                design to bring more polish to my interfaces. Beyond the
                frontend, I have solid experience as a data engineer and data
                analyst, giving me a well-rounded perspective on both user
                experience and data-driven solutions.
              </p>
              <Button className="font-bold bg-pink-300" onClick={() => router.push("/about")}>
                LEARN MORE ABOUT ME
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="px-6 bg-white relative sm:items-start py-24 z-10">
            <div className="container text-center mx-auto items-center">
              <h1 className="font-bold mb-8 text-4xl sm:text-8xl">
                My Works
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto">
                Here are some of the projects I have worked on
              </p>
              <ProjectList project={projects} limit={9}/>
              <div className="flex justify-center mt-14">
                <Button className="font-bold bg-green-300" onClick={() => router.push("/projects")}>
                  SEE MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 bg-neutral-50   relative sm:items-start py-24 z-10">
          <div className="container mx-auto items-center">
            <h1 className="font-bold mb-8 text-4xl sm:text-8xl text-center">My Skills</h1>
            <p className="text-xl mb-8 max-w-4xl text-center mx-auto">
              I have experience with a variety of tools and technologies,
              including:
            </p>
            <SocialIconsList skill={tools} />
            <div className="flex justify-center mt-14">
              <Button className="text-black font-bold bg-yellow-300" onClick={() => router.push("/skills")}>See more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage

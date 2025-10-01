"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import { tools } from '@/lib/db/ToolDB';
import SkillCardList from '../organisms/SkillCardList';
import TypeWritterEffect from '../atoms/TypeWritterEffect';

const SkillsPage = () => {
  const router = useRouter()

  return (
      <div className="px-6 bg-white relative sm:items-start py-24 z-10">
          <div className="container mx-auto items-center">
            <h1 className=" text-center font-bold mb-8 text-4xl sm:text-8xl">My <TypeWritterEffect textArray={["Skills", "Weapons", "Partners"]} colorArray={["#e63946", "#2a9d8f", "#f4a261", "#457b9d"]}/></h1>
            <p className="mx-auto text-center text-xl mb-8 max-w-4xl">
              I have a diverse set of skills that I have honed over the years. 
              From frontend development to backend systems, I have a strong understanding of how to build and maintain web applications. 
            </p>
            <SkillCardList skill={tools} />
          </div>
        </div>
  )
}

export default SkillsPage

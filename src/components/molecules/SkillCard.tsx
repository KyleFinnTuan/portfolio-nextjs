import React from 'react'
import { Card } from "@/components/ui/card";

const SkillCard: React.FC<SkillProps> = ({id: skillId, link: skillLink, imgSrc: skillIcon, name: skillName, description: skillDescription}) => {
  return (
    <Card className='p-6 bg-gray-50 relative h-[250px] md:h-[300px] shadow-2xl bg-cover bg-center overflow-hidden group transition-all duration-300 hover:move-y-1 hover:scale-105'>
      <li key={skillId} className='group relative w-full h-full transition-all duration-200 ease-out' >
           <a href={skillLink} className='h-full flex flex-col'>
            <img
            src={skillIcon}
            alt={skillName}
            className='h-16 w-16 rounded-xl'
            />
            <h3 className='text-2xl font-semibold mt-7'>{skillName}</h3>
            <p className='text-gray-600 line-clamp-3 mt-2'>{skillDescription}</p>
            <span className='mt-5 text-gray-500'>Click to learn more</span>
            </a> 
            
        
    </li>
    </Card>
  )
}

export default SkillCard

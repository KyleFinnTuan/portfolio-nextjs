import React from 'react'
import SkillCard from '../molecules/SkillCard'

const SkillCardList: React.FC<SkillListProps> = ( {skill}) => {
  return (
    <ul className='mx-auto grid grid-cols-4 gap-8'>
      {skill.map((tool) => (
        <SkillCard
          key={tool.id}
          id={tool.id}
          imgSrc={tool.imgSrc}
          link={tool.link}
          name={tool.name}
          description={tool.description}
        />
      ))}
    </ul>
  )
}

export default SkillCardList

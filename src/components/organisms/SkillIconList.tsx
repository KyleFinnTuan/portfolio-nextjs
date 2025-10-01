import React from 'react';
import SocialIcon from '../molecules/SkillIcon';

const SocialIconsList: React.FC<SkillListProps> = ({ skill }) => (
  <ul className=" mx-auto flex flex-wrap justify-center gap-4">
    {skill.slice(0,27).map((skill) => (
      <SocialIcon
        key={skill.id}
        id={skill.id}
        imgSrc={skill.imgSrc}
        link={skill.link}
        name={skill.name}
      />
    ))}
  </ul>
);

export default SocialIconsList;

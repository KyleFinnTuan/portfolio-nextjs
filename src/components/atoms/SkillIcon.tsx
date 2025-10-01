import React from 'react';



const IconImage: React.FC<SkillIconProps> = ({ src }) => (
  <div
    className="absolute inset-0 bg-center bg-[#111111] bg-no-repeat bg-[length:100%] transition-all duration-500 ease-out group-hover:bg-[length:0%] group-hover:bg-[#222] group-hover:blur-sm"
    style={{ backgroundImage: `url(${src})` }}
  />
);

export default IconImage;

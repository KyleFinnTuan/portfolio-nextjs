import React from 'react';

const IconLabel: React.FC<SkillLabelProps> = ({ label }) => (
  <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold bg-black bg-opacity-70 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none px-1.5 text-center">
    {label}
  </span>
);

export default IconLabel;

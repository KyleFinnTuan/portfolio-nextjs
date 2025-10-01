import React from "react";
import IconImage from "../atoms/SkillIcon";
import IconLabel from "../atoms/SkillLabel";
import { Card } from "../ui/card";

const SocialIcon: React.FC<SkillProps> = ({
  id: toolId,
  link: toolLink,
  imgSrc: toolIcon,
  name: toolName,
}) => (
  <Card className="group relative w-[19%] aspect-square sm:w-[9%] transition-all duration-200 ease-out">
    <li key={toolId}>
      <a
        href={toolLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block absolute inset-0 w-full h-full bg-white transition-all duration-200 ease-out overflow-hidden"
      >
        <IconImage src={toolIcon} />
        <IconLabel label={toolName} />
      </a>
    </li>
  </Card>
);

export default SocialIcon;

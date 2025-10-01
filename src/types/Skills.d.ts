interface SkillProps {
  id: number;
  name: string;
  imgSrc: string;
  link: string;
  description?: string;
}

interface SkillListProps {
  skill: Skill[];
}

type SkillLabelProps = {
  label: string;
}

type SkillIconProps = {
  src: string;
};
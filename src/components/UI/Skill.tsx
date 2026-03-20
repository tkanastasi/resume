import { Tag } from "./Skill.styled";

type SkillProps = {
  label: string;
};

export const Skill = ({ label }: SkillProps) => {
  return <Tag>{label}</Tag>;
};
import { useEffect, useRef } from "react";
import {
  SidebarWrapper,
  Name,
  Role,
  ExRole,
  SectionTitle,
  ProfilePhoto
} from "./Sidebar.styled";

import { Contact } from "../UI/Contact";
import { Skill } from "../UI/Skill";

export const Sidebar = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        imgRef.current.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contacts = [
    {
      text: "tkacheva.anastasi@gmail.com",
      href: "mailto:tkacheva.anastasi@gmail.com",
    },
    { text: "📍 Yerevan, Armenia" },
    {
      text: "@tkanastasi",
      href: "https://t.me/tkanastasi",
    },
  ];

  const skills = [
    "Data Processing — Expert",
    "Data Analysis — Advanced",
    "Data Consistency — Expert",
    "UI Accuracy — Advanced",
  ];

  const languages = [
    "English — A2/B1",
    "Russian — Native",
  ];

  return (
    <SidebarWrapper>
      <Name>Anastasiia Tkacheva</Name>
      <Role>Frontend Web Developer</Role>
      <ExRole>ex Senior Data Analyst</ExRole>

      <SectionTitle>Contacts</SectionTitle>
      {contacts.map((item, index) => (
        <Contact key={index} text={item.text} href={item.href} />
      ))}

      <SectionTitle>Skills</SectionTitle>
      {skills.map((skill, index) => (
        <Skill key={index} label={skill} />
      ))}

      <SectionTitle>Languages</SectionTitle>
      {languages.map((lang, index) => (
        <Skill key={index} label={lang} />
      ))}

      <ProfilePhoto ref={imgRef} src="/office.jpg" />
    </SidebarWrapper>
  );
};
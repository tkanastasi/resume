import {
  SidebarWrapper,
  Name,
  Role,
  ExRole,
  SectionTitle,
  ProfilePhoto,
  InfoCard
} from "./Sidebar.styled";

import { Contact } from "../UI/Contact";
import { Skill } from "../UI/Skill";
import profilePhoto from "../../assets/profilePhoto.jpg";
import telegramIcon from "../../assets/telegram-svgrepo-com.svg";

export const Sidebar = () => {
  const contacts = [
    {
      text: "tkacheva.anastasi@gmail.com",
      href: "mailto:tkacheva.anastasi@gmail.com",
    },
    { text: "📍 Yerevan, Armenia" },
    {
      text: "@tkanastasi",
      href: "https://t.me/tkanastasi",
      icon: telegramIcon,
    },
  ];

  const skills = [
    "Data Processing — Expert",
    "Data Analysis — Advanced",
    "Data Consistency — Expert",
    "UI Accuracy — Advanced",
  ];

  const languages = [
    "English — B1",
    "Russian — Native",
  ];

  return (
    <SidebarWrapper>
      <ProfilePhoto src={profilePhoto} />

      <Name>Anastasiia Tkacheva</Name>
      <Role>Frontend Developer</Role>
      <ExRole>ex Senior Data Analyst</ExRole>

      <SectionTitle>Contacts</SectionTitle>
      {contacts.map((item, index) => (
        <Contact
          key={index}
          text={item.text}
          href={item.href}
          icon={item.icon}
        />
      ))}

      <SectionTitle>Skills</SectionTitle>
      {skills.map((skill, index) => (
        <Skill key={index} label={skill} />
      ))}

      <SectionTitle>Languages</SectionTitle>
      <div>
        {languages.map((lang, index) => (
          <div key={index}>
            <Skill label={lang} />
          </div>
        ))}
      </div>
      
      <InfoCard>
        <SectionTitle>Education</SectionTitle>
        <div>
          Electrical and Electronics Engineering
          <br />
          Moscow Aviation Institute
        </div>
      </InfoCard>
      
      <SectionTitle>Interests & Work Style</SectionTitle>
      <div>
        Enjoy hiking, cycling, and pilates 🌿
        <br/>
        I value calm, focused work, clear tasks, and a friendly team environment
      </div>
    </SidebarWrapper>
  );
};
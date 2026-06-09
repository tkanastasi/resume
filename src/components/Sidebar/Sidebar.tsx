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
      
      <SectionTitle>Education</SectionTitle>
      <InfoCard>
        <div style={{ display: "flex", gap: "10px" }}>
          <span>🎓</span>
            
          <div>
            <strong>Electrical & Electronics Engineering</strong>
            <br />
            <span style={{ color: "#666" }}>
              Moscow Aviation Institute
            </span>
          </div>
        </div>
      </InfoCard>
      
      <SectionTitle>Interests & Work Style</SectionTitle>
      <div>
        🌿 Hiking, Cycling, Pilates
        <br/>
        <br/>
        Calm and focused work
        <br />
        Clear tasks and expectations
        <br />
        Friendly team environment
      </div>
    </SidebarWrapper>
  );
};
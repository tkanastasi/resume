import {
  SidebarWrapper,
  Name,
  Role,
  ExRole,
  SectionTitle,
  ProfilePhoto,
  InfoCard,
  ContactItem
} from "./Sidebar.styled";
import { useState } from "react";
import { Skill } from "../UI/Skill";
import profilePhoto from "../../assets/profilePhoto.jpg";
import officeMeme from "../../assets/office.jpg";

export const Sidebar = () => {
  const [showMeme, setShowMeme] = useState(false);
  const contacts = [
    {
      text: "tkacheva.anastasi@gmail.com",
      href: "mailto:tkacheva.anastasi@gmail.com",
    },
    { text: "Yerevan, Armenia" },
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
    "English — B1",
    "Russian — Native",
  ];

  return (
    <SidebarWrapper>
      <ProfilePhoto
        src={showMeme ? officeMeme : profilePhoto}
        onClick={() => setShowMeme(!showMeme)}
        style={{ cursor: "pointer" }}
      />

      <Name>Anastasiia Tkacheva</Name>
      <Role>Frontend Developer</Role>
      <ExRole>ex Senior Data Analyst</ExRole>

      <SectionTitle>Contacts</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {contacts.map((item, index) => (
          <ContactItem key={index}>
            {item.href ? (
              <a href={item.href}>{item.text}</a>
            ) : (
              item.text
            )}
          </ContactItem>
        ))}
      </div>

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
        <div className="title">
          Electrical & Electronics Engineering
        </div>

        <div className="sub">
          Moscow Aviation Institute
        </div>

        <div className="sub">
          Sep 2013 – Jan 2017
        </div>
      </InfoCard>
      
      <SectionTitle>Interests & Work Style</SectionTitle>
        <div
          style={{
            fontSize: "14px",
            color: "#D3D1C7"
          }}
        >
        🌿 Hiking, Cycling, Pilates
        <br/>
        <br/>
        I value calm, focused work, clear tasks, and a friendly team environment
      </div>
    </SidebarWrapper>
  );
};
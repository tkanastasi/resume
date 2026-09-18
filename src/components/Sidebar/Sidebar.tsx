import {
  SidebarWrapper,
  Name,
  ExRole,
  SectionTitle,
  ProfilePhoto,
  InfoCard,
  ContactItem,
  Interests,
} from "./Sidebar.styled";

import { Skill } from "../UI/Skill";
import profilePhoto from "../../assets/profilePhoto.jpg";

export const Sidebar = () => {
  const contacts = [
    {
      text: "tkacheva.anastasi@gmail.com",
      href: "mailto:tkacheva.anastasi@gmail.com",
    },
    {
      text: "Yerevan, Armenia",
    },
    {
      text: "tg: @tkanastasi",
      href: "https://t.me/tkanastasi",
    },
  ];

  const languages = [
    "English — B1",
    "Russian — Native",
  ];

  return (
    <SidebarWrapper>
      <ProfilePhoto src={profilePhoto} />

      <Name>Anastasi Tk.</Name>
      <ExRole />

      <SectionTitle>Contacts</SectionTitle>

      <div>
        {contacts.map((item, index) => (
          <ContactItem key={index}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </ContactItem>
        ))}
      </div>

      <SectionTitle>Languages</SectionTitle>

      {languages.map((lang, index) => (
        <div key={index}>
          <Skill label={lang} />
        </div>
      ))}

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

      <Interests>
        <div>🌿 Hiking, Cycling, Pilates</div>

        <p>
          I value calm, focused work, clear tasks, and a friendly team
          environment.
        </p>
      </Interests>
    </SidebarWrapper>
  );
};
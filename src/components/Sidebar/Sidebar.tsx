import { useState } from "react";

import {
  SidebarWrapper,
  ProfileHeader,
  ProfilePhoto,
  ProfileInfo,
  Name,
  ExRole,
  SectionTitle,
  ContactItem,
  DesktopDetails,
  DesktopContacts,
} from "./Sidebar.styled";

import { ProfileDetails } from "../ProfileDetails/ProfileDetails";

import profilePhoto from "../../assets/profilePhoto.jpg";

export const Sidebar = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "tkacheva.anastasi@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 1500);
    } catch {
      // Clipboard API may be unavailable in some browsers.
    }
  };

  const renderContacts = () => (
    <>
      <ContactItem>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="email-button"
        >
          {emailCopied ? "Copied!" : "Email"}
        </button>
      </ContactItem>
  
      <ContactItem>
        <a
          href="https://t.me/tkanastasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </ContactItem>
  
      <ContactItem>
        <a
          href="https://www.linkedin.com/in/tkanastasi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </ContactItem>
    </>
  );

  return (
    <SidebarWrapper>
      <ProfileHeader>
        <ProfilePhoto src={profilePhoto} />

        <ProfileInfo>
          <Name>Anastasi Tk.</Name>

          <ExRole />

          <div className="location">
            Yerevan, Armenia
          </div>

          <div className="mobile-contacts">
            <div className="contact-label">
              Contacts
            </div>

            {renderContacts()}
          </div>
        </ProfileInfo>
      </ProfileHeader>

      <DesktopContacts>
        <SectionTitle>Contacts</SectionTitle>
        
        <div className="contacts">
          {renderContacts()}
        </div>
      </DesktopContacts>

      <DesktopDetails>
        <ProfileDetails />
      </DesktopDetails>
    </SidebarWrapper>
  );
};
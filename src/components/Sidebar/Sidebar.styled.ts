import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  padding: 64px 32px 80px;

  border-right: 1px solid #383838;
  background: #171717;

  @media (max-width: 1100px) {
    padding: 56px 26px 70px;
  }

  @media (max-width: 900px) {
    padding: 48px 24px 60px;
  }

  @media (max-width: 600px) {
    padding: 28px 22px 24px;

    border-right: none;
    border-bottom: none;
  }
`;

export const ProfileHeader = styled.div`
  display: block;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 145px 1fr;
    gap: 20px;
    align-items: start;
  }
`;

export const ProfilePhoto = styled.img`
  display: block;

  width: 100%;
  aspect-ratio: 1 / 1;

  object-fit: cover;
  object-position: center;

  border-radius: 5px;

  margin-bottom: 30px;

  @media (max-width: 600px) {
    width: 145px;
    height: 205px;

    margin-bottom: 0;

    object-fit: cover;
    object-position: center;
  }
`;

export const ProfileInfo = styled.div`
  @media (max-width: 600px) {
    min-width: 0;
    padding-top: 8px;
  }

  .location {
    display: none;

    @media (max-width: 600px) {
      display: block;

      margin-top: 7px;

      color: #777;
      font-size: 12px;
      line-height: 1.4;
    }
  }

  .mobile-contacts {
    display: none;

    @media (max-width: 600px) {
      display: block;

      margin-top: 28px;
    }
  }

  .contact-label {
    margin-bottom: 10px;

    color: #666;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.16em;
    line-height: 1.2;

    text-transform: uppercase;
  }
`;

export const Name = styled.h1`
  margin: 0 0 8px;

  color: #f1f1f1;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: 600px) {
    margin-bottom: 0;

    font-size: 24px;
    letter-spacing: -0.8px;
  }
`;

export const ExRole = styled.div`
  display: none;
`;

export const SectionTitle = styled.h2`
  margin: 34px 0 14px;

  color: #666;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 600px) {
    margin: 24px 0 11px;
  }
`;

export const ContactItem = styled.div`
  margin-bottom: 13px;

  color: #a0a0a0;
  font-size: 13px;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration: none;

    transition: color 0.2s ease;
  }

  a:hover {
    color: #f1f1f1;
  }

  .email-button {
    padding: 0;

    color: inherit;
    background: none;
    border: none;

    font: inherit;
    cursor: pointer;

    transition: color 0.2s ease;
  }

  .email-button:hover {
    color: #f1f1f1;
  }

  @media (max-width: 600px) {
    margin-bottom: 9px;

    font-size: 11px;
    line-height: 1.4;
  }
`;

export const DesktopDetails = styled.div`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const DesktopContacts = styled.div`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;
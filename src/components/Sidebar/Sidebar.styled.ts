import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  padding: 64px 32px 80px;
  border-right: 1px solid #383838;
  background: #171717;

  @media (max-width: 900px) {
    padding: 48px 28px 60px;
  }

  @media (max-width: 600px) {
    border-right: none;
    border-bottom: 1px solid #383838;
    padding: 40px 20px;
  }
`;

export const ProfilePhoto = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const Name = styled.h1`
  margin: 0 0 8px;

  color: #f1f1f1;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -1px;
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
`;

export const ContactItem = styled.div`
  margin-bottom: 12px;

  color: #a0a0a0;
  font-size: 12px;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #f1f1f1;
  }
`;

export const InfoCard = styled.div`
  padding: 15px;

  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 5px;

  .title {
    margin-bottom: 9px;

    color: #ddd;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
  }

  .sub {
    color: #777;
    font-size: 11px;
    line-height: 1.6;
  }
`;

export const Interests = styled.div`
  color: #aaa;
  font-size: 12px;
  line-height: 1.6;

  p {
    margin: 16px 0 0;
    color: #888;
  }
`;
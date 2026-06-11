import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  padding: 25px;
  position: relative;
`;

export const Name = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;

  color: white;
`;

export const Role = styled.div`
  font-size: 13px;
  color: #666;
`;

export const ExRole = styled.div`
  font-size: 12px;
  color: #888;
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin: 20px 0 10px;
  color: #2f4f4f;
`;

export const ContactItem = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const SkillTag = styled.div`
  display: inline-block;
  background: #2f5d50;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  margin-bottom: 8px;
`;

export const LangTag = styled(SkillTag)``;

export const ProfilePhoto = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const InfoCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 1.6;

  border-left: 3px solid #2f5d50;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;
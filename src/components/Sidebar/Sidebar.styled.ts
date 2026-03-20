import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background: #f2f4f3;
  padding: 25px;
  position: relative;
`;

export const Name = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 5px;
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
  margin-top: 30px;

  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
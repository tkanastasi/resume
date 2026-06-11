import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background: #2E2E38;
  padding: 25px;
  position: relative;
`;

export const Name = styled.div`
  color: #F1EFF8;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Role = styled.div`
  font-size: 13px;
  color: #888;
`;

export const ExRole = styled.div`
  font-size: 12px;
  color: #666;
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin: 20px 0 10px;
  color: #888780;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  margin-bottom: 8px;

  color: #D3D1C7;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #EEEDFE;
  }

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #7F77DD;
    flex-shrink: 0;
  }
`;

export const SkillTag = styled.div`
  display: inline-block;
  background: #534AB7;
  color: #EEEDFE;
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
  background: #3A3A46;

  border-radius: 11px;

  padding: 16px;
  margin-bottom: 12px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .title {
    color: #F1EFF8;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;

    margin-bottom: 10px;
  }

  .sub {
    color: #888780;
    font-size: 14px;
    line-height: 1.4;
  }

  .sub:last-child {
    font-size: 13px;
  }
`;
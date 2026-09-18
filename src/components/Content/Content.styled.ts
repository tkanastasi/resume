import styled from "styled-components";

export const ContentWrapper = styled.main`
  padding: 64px 56px 100px;
  min-width: 0;

  @media (max-width: 900px) {
    padding: 48px 32px 80px;
  }

  @media (max-width: 600px) {
    padding: 40px 20px 60px;
  }
`;

export const Intro = styled.div`
  max-width: 760px;
  padding-top: 18px;
`;

export const IntroTitle = styled.h2`
  margin: 0 0 24px;

  color: #f1f1f1;
  font-size: clamp(30px, 4.5vw, 45px);
  line-height: 1.05;
  font-weight: 500;
  letter-spacing: -2px;
`;

export const IntroText = styled.p`
  max-width: 700px;
  margin: 0;

  color: #a5a5a5;
  font-size: 16px;
  line-height: 1.75;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
`;

export const Tag = styled.span`
  padding: 7px 11px;

  color: #a9a9a9;
  background: #1d1d1d;
  border: 1px solid #363636;
  border-radius: 5px;

  font-size: 11px;
  line-height: 1;
`;

export const Section = styled.section`
  margin-bottom: 88px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;
`;

export const SectionNumber = styled.span`
  color: #666;
  font-size: 11px;
  letter-spacing: 0.12em;
`;

export const SectionTitle = styled.h2`
  margin: 0;

  color: #ededed;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const HeaderLine = styled.div`
  flex: 1;
  height: 1px;
  background: #333;
`;

/* Timeline */

export const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 96px;
    width: 1px;
    background: #353535;
  }

  @media (max-width: 600px) {
    &::before {
      left: 66px;
    }
  }
`;

export const TimelineItem = styled.article`
  position: relative;

  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 32px;

  padding-bottom: 42px;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 66px 1fr;
    gap: 20px;
  }
`;

export const TimelineYear = styled.div`
  color: #ddd;
  font-size: 15px;
  font-weight: 500;
`;

export const TimelineContent = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;

    width: 9px;
    height: 9px;

    left: -37px;
    top: 5px;

    background: #171717;
    border: 1px solid #777;
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    &::before {
      left: -25px;
    }
  }
`;

export const TimelineTitle = styled.h3`
  margin: 0 0 6px;

  color: #e8e8e8;
  font-size: 15px;
  font-weight: 500;
`;

export const TimelineMeta = styled.div`
  margin-bottom: 10px;

  color: #666;
  font-size: 12px;
  letter-spacing: 0.04em;
`;

export const TimelineDescription = styled.p`
  max-width: 650px;
  margin: 0;

  color: #919191;
  font-size: 13px;
  line-height: 1.65;
`;

export const TimelineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

export const TimelineTag = styled.span`
  color: #737373;
  border: 1px solid #303030;
  padding: 5px 8px;
  border-radius: 4px;

  font-size: 11px;
`;

/* Work */

export const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkCard = styled.article`
  min-height: 190px;
  padding: 22px;

  background: #1b1b1b;
  border: 1px solid #333;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #555;
    transform: translateY(-2px);
  }
`;

export const WorkType = styled.div`
  margin-bottom: 18px;

  color: #686868;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const WorkTitle = styled.h3`
  margin: 0 0 9px;

  color: #ededed;
  font-size: 17px;
  font-weight: 500;
`;

export const WorkDescription = styled.p`
  margin: 0;

  color: #858585;
  font-size: 12px;
  line-height: 1.6;
`;

export const WorkFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
  padding-top: 22px;
`;

export const WorkTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const WorkTag = styled.span`
  color: #777;
  border: 1px solid #303030;
  padding: 5px 8px;
  border-radius: 4px;

  font-size: 11px;
`;

export const WorkLink = styled.a`
  color: #aaa;
  font-size: 12px;
  text-decoration: none;

  transition: color 0.2s ease;

  &:hover {
    color: #f1f1f1;
  }
`;
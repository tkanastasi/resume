import styled from "styled-components";

export const ContentWrapper = styled.main`
  padding: 64px 56px 100px;
  min-width: 0;

  @media (max-width: 1100px) {
    padding: 56px 42px 90px;
  }

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

  @media (max-width: 600px) {
    padding-top: 8px;
  }
`;

export const IntroTitle = styled.h2`
  margin: 0 0 30px;

  color: #f1f1f1;
  font-size: clamp(30px, 4.5vw, 45px);
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: -1px;

  @media (max-width: 600px) {
    font-size: 34px;
    line-height: 1.1;
    letter-spacing: -0.8px;
  }
`;

export const IntroText = styled.p`
  max-width: 700px;
  margin: 0;

  color: #a5a5a5;
  font-size: 16px;
  line-height: 1.75;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const SkillGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-top: 42px;

  @media (max-width: 900px) {
    gap: 24px;
    margin-top: 36px;
  }

  @media (max-width: 600px) {
    gap: 25px;
    margin-top: 34px;
  }
`;

export const SkillGroup = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: start;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 105px 1fr;
    gap: 16px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const SkillGroupTitle = styled.div`
  padding-top: 8px;

  color: #777;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 600px) {
    padding-top: 0;
  }
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const SkillTag = styled.span<{
  $type: "gamedev" | "data" | "development";
}>`
  display: inline-block;

  padding: 8px 11px;

  border: 1px solid;
  border-radius: 5px;

  font-size: 12px;
  line-height: 1.2;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  ${({ $type }) => {
    if ($type === "gamedev") {
      return `
        color: #9daebe;
        background: #1b2025;
        border-color: #38434d;

        &:hover {
          color: #d4dee7;
          background: #20272e;
          border-color: #596977;
        }
      `;
    }

    if ($type === "data") {
      return `
        color: #9eaea1;
        background: #1c211e;
        border-color: #39433c;

        &:hover {
          color: #d1ddd4;
          background: #222a25;
          border-color: #59685d;
        }
      `;
    }

    return `
      color: #aaa39a;
      background: #211f1d;
      border-color: #45413c;

      &:hover {
        color: #ddd8d1;
        background: #282521;
        border-color: #666057;
      }
    `;
  }}
`;

/* Sections */

export const Section = styled.section`
  margin-bottom: 88px;

  opacity: 0;
  transform: translateY(24px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;

  &[data-visible="true"] {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    margin-bottom: 72px;
  }

  @media (max-width: 600px) {
    margin-bottom: 60px;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;

  @media (max-width: 600px) {
    gap: 12px;
    margin-bottom: 28px;
  }
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

  @media (max-width: 600px) {
    font-size: 21px;
  }
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

  @media (max-width: 900px) {
    &::before {
      left: 82px;
    }
  }

  @media (max-width: 600px) {
    &::before {
      left: 68px;
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

  @media (max-width: 900px) {
    grid-template-columns: 82px 1fr;
    gap: 24px;
    padding-bottom: 36px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 68px 1fr;
    gap: 20px;
    padding-bottom: 32px;
  }
`;

export const TimelineYear = styled.div`
  color: #ddd;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 14px;
  }
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

  @media (max-width: 900px) {
    &::before {
      left: -31px;
    }
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

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const TimelineMeta = styled.div`
  margin-bottom: 10px;

  color: #666;
  font-size: 12px;
  letter-spacing: 0.04em;

  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 1.5;
  }
`;

export const TimelineDescription = styled.p`
  max-width: 650px;
  margin: 0;

  color: #919191;
  font-size: 13px;
  line-height: 1.65;

  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 1.6;
  }
`;

export const TimelineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

export const TimelineTag = styled.span<{
  $type: "gamedev" | "data" | "development";
}>`
  padding: 5px 8px;

  border: 1px solid;
  border-radius: 4px;

  font-size: 11px;
  line-height: 1.2;

  ${({ $type }) => {
    if ($type === "gamedev") {
      return `
        color: #8d9dab;
        background: #1a1f24;
        border-color: #35404a;
      `;
    }

    if ($type === "data") {
      return `
        color: #8f9f93;
        background: #1b201d;
        border-color: #364039;
      `;
    }

    return `
      color: #9b958c;
      background: #201e1c;
      border-color: #403c37;
    `;
  }}

  @media (max-width: 600px) {
    font-size: 10px;
    padding: 5px 7px;
  }
`;

/* Work */

export const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    gap: 12px;
  }

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

  @media (max-width: 600px) {
    min-height: 170px;
    padding: 18px;
  }
`;

export const WorkType = styled.div`
  margin-bottom: 18px;

  color: #686868;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  @media (max-width: 600px) {
    margin-bottom: 14px;
    font-size: 10px;
  }
`;

export const WorkTitle = styled.h3`
  margin: 0 0 9px;

  color: #ededed;
  font-size: 17px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const WorkDescription = styled.p`
  margin: 0;

  color: #858585;
  font-size: 12px;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const WorkFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
  padding-top: 22px;

  @media (max-width: 600px) {
    align-items: flex-end;
    gap: 12px;
    padding-top: 18px;
  }
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

export const GameDesignTitle = styled.span`
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 400;
`;

export const RegularTitle = styled.span`
  font-family: inherit;
  font-size: 0.82em;
  font-weight: 500;
`;
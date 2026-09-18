import { Skill } from "../UI/Skill";
import {
  DetailsWrapper,
  DetailsSummary,
  DetailsContent,
  SectionTitle,
  LanguageTags,
  InfoCard,
  Interests,
} from "./ProfileDetails.styled";

import { profileData } from "../../data/profileData";

type ProfileDetailsProps = {
  mobile?: boolean;
};

export const ProfileDetails = ({
  mobile = false,
}: ProfileDetailsProps) => {
  const content = (
    <>
      <SectionTitle>Languages</SectionTitle>

      <LanguageTags>
        {profileData.languages.map((lang, index) => (
          <Skill key={index} label={lang} />
        ))}
      </LanguageTags>

      <SectionTitle>Education</SectionTitle>

      <InfoCard>
        <div className="title">
          {profileData.education.title}
        </div>

        <div className="sub">
          {profileData.education.university}
        </div>

        <div className="sub">
          {profileData.education.period}
        </div>
      </InfoCard>

      <SectionTitle>Interests & Work Style</SectionTitle>

      <Interests>
        <div>{profileData.interests.activities}</div>

        <p>
          {profileData.interests.description}
        </p>
      </Interests>
    </>
  );

  if (mobile) {
    return (
      <DetailsWrapper>
        <details>
          <DetailsSummary>
            <span>More about me</span>
            <span className="arrow">↓</span>
          </DetailsSummary>

          <DetailsContent>
            {content}
          </DetailsContent>
        </details>
      </DetailsWrapper>
    );
  }

  return <div>{content}</div>;
};
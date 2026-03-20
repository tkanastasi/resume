import {
  ContentWrapper,
  SectionTitle,
  Summary,
  Job,
  JobTitle,
  JobMeta,
  List,
  ListItem,
  Block
} from "./Content.styled";

export const Content = () => {
  return (
    <ContentWrapper>
      <SectionTitle>Professional summary</SectionTitle>

      <Summary>
        Frontend Web developer with a background in Senior Data Analysis,
        specializing in precise UI implementation and ensuring data consistency.
        Experienced in data processing and analysis to enhance accuracy.
      </Summary>

      <SectionTitle>Work experience</SectionTitle>

      <Job>
        <JobTitle>Freelance Frontend Developer</JobTitle>
        <JobMeta>Dec 2025 – Present · Upwork</JobMeta>
        <List>
          <ListItem>Building web interfaces with React and TypeScript</ListItem>
          <ListItem>Pixel-perfect layouts and responsive design</ListItem>
          <ListItem>Consistent component-based structure</ListItem>
        </List>
      </Job>

      <Job>
        <JobTitle>Data Analyst / Senior Data Analyst</JobTitle>
        <JobMeta>Jan 2020 – Sep 2022 · Tiburon Research</JobMeta>
        <List>
          <ListItem>Full-cycle research projects and data processing</ListItem>
          <ListItem>Ensured data accuracy and consistency</ListItem>
          <ListItem>Validated datasets and fixed inconsistencies</ListItem>
        </List>
      </Job>

      <Job>
        <JobTitle>Junior Data Analyst</JobTitle>
        <JobMeta>Aug 2018 – Jan 2020 · Tiburon Research</JobMeta>
        <List>
          <ListItem>Programmed surveys using XML and HTML/CSS</ListItem>
          <ListItem>Maintained structured logic and data consistency</ListItem>
        </List>
      </Job>

      <Job>
        <JobTitle>Assistant Instructor</JobTitle>
        <JobMeta>Sep 2016 – Aug 2018 · STEM Education Center</JobMeta>
        <List>
          <ListItem>Supported programming classes</ListItem>
          <ListItem>Helped students troubleshoot and build projects</ListItem>
        </List>
      </Job>

      <Block>
        <SectionTitle>Education</SectionTitle>
        Electrical and Electronics Engineering<br />
        Moscow Aviation Institute
      </Block>

      <Block>
        <SectionTitle>Hobbies</SectionTitle>
        Enjoy hiking, cycling, and pilates. I value calm, focused work,
        clear tasks, and a friendly team environment 🌿
      </Block>
    </ContentWrapper>
  );
};
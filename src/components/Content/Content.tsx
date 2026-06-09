import {
ContentWrapper,
SectionTitle,
Summary,
Job,
JobTitle,
JobMeta,
List,
ListItem,
FeaturedProject,
ReferenceBlock
} from "./Content.styled";

export const Content = () => {
  return (
    <ContentWrapper>
      <SectionTitle>Professional summary</SectionTitle>
      <Summary>
        Frontend Developer with a background in Senior Data Analysis, specializing in building user-friendly interfaces, data visualizations and dashboard solutions. 
        <br/>
        Experienced in working with structured data, ensuring data consistency and transforming complex information into intuitive user experiences.
      </Summary>

      <FeaturedProject>
        <SectionTitle>Featured Project</SectionTitle>

        <strong>Signal Dashboard</strong>
        <p>
          Interactive dashboard for monitoring and visualizing data using React,
          TypeScript and Supabase.
        </p>

        <a
          href="https://tkanastasi.github.io/resume/projects/signal-dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </FeaturedProject>

      <ReferenceBlock>
        <SectionTitle>Professional References</SectionTitle>

        <strong>Recommendation Letter</strong>
        <p>Reference letter from my Senior Data Analyst position at Tiburon Research.</p>

        <a
          href="https://drive.google.com/file/d/1gv997koJZbqizQlUBJT5DBZiNZR3uLFl/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Document →
        </a>
      </ReferenceBlock>

      <SectionTitle>Work experience</SectionTitle>

      <Job>
        <JobTitle>Freelance Frontend Developer</JobTitle>
        <JobMeta>Dec 2025 – Present · Upwork</JobMeta>
        <List>
          <ListItem>Developed user interfaces using React and TypeScript.</ListItem>
          <ListItem>Integrated component-based solutions into Webflow projects.</ListItem>
          <ListItem>Worked with structured data, CMS and Supabase databases.</ListItem>
          <ListItem>Built interactive dashboards, visualizations and responsive web interfaces.</ListItem>
          <ListItem>Ensured quality, consistency and cross-device compatibility of web solutions.</ListItem>
        </List>
      </Job>

      <Job>
        <JobTitle>Senior Data Analyst</JobTitle>
        <JobMeta>Oct 2021 – Sep 2022 · Tiburon Research</JobMeta>
        <List>
          <ListItem>Led full-cycle research projects from survey design to reporting.</ListItem>
          <ListItem>Processed, analyzed and visualized data using SPSS, Python and DataTile.</ListItem>
          <ListItem>Developed interactive dashboards and analytical reports.</ListItem>
          <ListItem>Trained and mentored team members.</ListItem>
          <ListItem>Ensured data quality and consistency throughout project lifecycles.</ListItem>
        </List>
      </Job>

      <Job>
        <JobTitle>Data Analyst / Junior Data Analyst</JobTitle>
        <JobMeta>Aug 2018 – Oct 2021 · Tiburon Research</JobMeta>
        <List>
          <ListItem>Programmed online surveys using XML, HTML/CSS and C#.</ListItem>
          <ListItem>Collected, validated and processed research data.</ListItem>
          <ListItem>Maintained survey logic and data quality controls.</ListItem>
          <ListItem>Supported analysis and reporting activities.</ListItem>
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
    </ContentWrapper>
  );
};
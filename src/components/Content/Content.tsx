import {
  ContentWrapper,
  Intro,
  IntroTitle,
  IntroText,
  Tags,
  Tag,
  Section,
  SectionHeader,
  SectionNumber,
  SectionTitle,
  HeaderLine,
  Timeline,
  TimelineItem,
  TimelineYear,
  TimelineContent,
  TimelineTitle,
  TimelineMeta,
  TimelineDescription,
  TimelineTags,
  TimelineTag,
  WorkGrid,
  WorkCard,
  WorkType,
  WorkTitle,
  WorkDescription,
  WorkFooter,
  WorkTags,
  WorkTag,
  WorkLink,
} from "./Content.styled";

export const Content = () => {
  return (
    <ContentWrapper>
      <Section>
        <SectionHeader>
          <SectionNumber>01</SectionNumber>
          <HeaderLine />
          <SectionTitle>About Me</SectionTitle>
        </SectionHeader>

        <Intro>
          <IntroTitle>
            Game Design · Data · Development
          </IntroTitle>

          <IntroText>
            I work with data, code and interactive systems. My background
            combines 4+ years in data analytics, programming and development.
            Currently exploring Game Design, with a particular interest in
            systems, balance and game economy.
          </IntroText>

          <Tags>
            <Tag>Game Design</Tag>
            <Tag>Data Analysis</Tag>
            <Tag>Development</Tag>
            <Tag>GameDev</Tag>
            <Tag>Unity</Tag>
          </Tags>
        </Intro>
      </Section>

      <Section>
        <SectionHeader>
          <SectionNumber>02</SectionNumber>
          <HeaderLine />
          <SectionTitle>Timeline</SectionTitle>
        </SectionHeader>

        <Timeline>
          <TimelineItem>
            <TimelineYear>2026</TimelineYear>

            <TimelineContent>
              <TimelineTitle>Moving towards Game Design</TimelineTitle>

              <TimelineMeta>
                GameDev · Game Design · Unity
              </TimelineMeta>

              <TimelineDescription>
                Exploring game design and development, learning Unity and
                working on small personal projects.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag>Unity</TimelineTag>
                <TimelineTag>Game Design</TimelineTag>
                <TimelineTag>Game Economy</TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2025</TimelineYear>

            <TimelineContent>
              <TimelineTitle>Development</TimelineTitle>

              <TimelineMeta>
                Upwork · Freelance
              </TimelineMeta>

              <TimelineDescription>
                Building web projects and interfaces, working with React,
                TypeScript, Webflow, Supabase and structured data.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag>React</TimelineTag>
                <TimelineTag>TypeScript</TimelineTag>
                <TimelineTag>Webflow</TimelineTag>
                <TimelineTag>Supabase</TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2021</TimelineYear>

            <TimelineContent>
              <TimelineTitle>Senior Data Analyst</TimelineTitle>

              <TimelineMeta>
                Tiburon Research · 2021–2022
              </TimelineMeta>

              <TimelineDescription>
                Full-cycle research projects, data processing, advanced
                analysis and interactive dashboards. Trained and mentored a
                team member.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag>Python</TimelineTag>
                <TimelineTag>SPSS</TimelineTag>
                <TimelineTag>DataTile</TimelineTag>
                <TimelineTag>Analytics</TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2018</TimelineYear>

            <TimelineContent>
              <TimelineTitle>Data Analytics</TimelineTitle>

              <TimelineMeta>
                Tiburon Research · 2018–2021
              </TimelineMeta>

              <TimelineDescription>
                Research data processing and analysis, survey programming,
                data validation and interactive survey elements.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag>Data Analysis</TimelineTag>
                <TimelineTag>Python</TimelineTag>
                <TimelineTag>JavaScript</TimelineTag>
                <TimelineTag>C#</TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2016</TimelineYear>

            <TimelineContent>
              <TimelineTitle>Programming Instructor</TimelineTitle>

              <TimelineMeta>
                STEM Education Center · 2016–2018
              </TimelineMeta>

              <TimelineDescription>
                Supported programming classes for children and teenagers,
                helping students troubleshoot code and build projects.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag>Python</TimelineTag>
                <TimelineTag>JavaScript</TimelineTag>
                <TimelineTag>Unreal Engine</TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionHeader>
          <SectionNumber>03</SectionNumber>
          <HeaderLine />
          <SectionTitle>Selected Work</SectionTitle>
        </SectionHeader>

        <WorkGrid>
          <WorkCard>
            <WorkType>Game Design / Coming soon</WorkType>

            <WorkTitle>Game Economy Study</WorkTitle>

            <WorkDescription>
              A personal study of progression, resource sources and sinks,
              economy balance and player pacing.
            </WorkDescription>

            <WorkFooter>
              <WorkTags>
                <WorkTag>Game Design</WorkTag>
                <WorkTag>Sheets</WorkTag>
                <WorkTag>Analytics</WorkTag>
              </WorkTags>

              <WorkLink href="#">
                Soon →
              </WorkLink>
            </WorkFooter>
          </WorkCard>

          <WorkCard>
            <WorkType>Data / Development</WorkType>

            <WorkTitle>Signal Dashboard</WorkTitle>

            <WorkDescription>
              Interactive dashboard for monitoring and visualizing trading
              signals using structured data.
            </WorkDescription>

            <WorkFooter>
              <WorkTags>
                <WorkTag>React</WorkTag>
                <WorkTag>TypeScript</WorkTag>
                <WorkTag>Supabase</WorkTag>
              </WorkTags>

              <WorkLink
                href="https://tkanastasi.github.io/resume/projects/signal-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View →
              </WorkLink>
            </WorkFooter>
          </WorkCard>

          <WorkCard>
            <WorkType>Development</WorkType>

            <WorkTitle>Where is Ararat?</WorkTitle>

            <WorkDescription>
              Telegram bot that checks whether Mount Ararat is visible using
              webcam images and computer vision.
            </WorkDescription>

            <WorkFooter>
              <WorkTags>
                <WorkTag>Python</WorkTag>
                <WorkTag>OpenCV</WorkTag>
                <WorkTag>ONNX</WorkTag>
              </WorkTags>

              <WorkLink href="#">
                View →
              </WorkLink>
            </WorkFooter>
          </WorkCard>

          <WorkCard>
            <WorkType>Development</WorkType>

            <WorkTitle>More experiments</WorkTitle>

            <WorkDescription>
              A collection of smaller projects, experiments and things built
              while exploring different areas of development.
            </WorkDescription>

            <WorkFooter>
              <WorkTags>
                <WorkTag>C#</WorkTag>
                <WorkTag>Python</WorkTag>
                <WorkTag>JavaScript</WorkTag>
              </WorkTags>
            </WorkFooter>
          </WorkCard>
        </WorkGrid>
      </Section>
    </ContentWrapper>
  );
};
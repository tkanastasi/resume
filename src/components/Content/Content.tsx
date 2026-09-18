import { useEffect, useRef } from "react";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";

import {
  ContentWrapper,
  Intro,
  IntroTitle,
  IntroText,
  SkillGroups,
  SkillGroup,
  SkillGroupTitle,
  SkillTags,
  SkillTag,
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
  GameDesignTitle,
  RegularTitle,
} from "./Content.styled";

export const Content = () => {
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = contentRef.current?.querySelectorAll(
      "[data-reveal]"
    );

    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ContentWrapper ref={contentRef}>
      {/* About */}

      <Section data-reveal>
        <SectionHeader>
          <SectionNumber>01</SectionNumber>
          <HeaderLine />
          <SectionTitle>About Me</SectionTitle>
        </SectionHeader>

        <Intro>
          <IntroTitle>
            <GameDesignTitle>Game Design </GameDesignTitle>
            <RegularTitle>/ Data / Development</RegularTitle>
          </IntroTitle>

          <IntroText>
            I work at the intersection of data, programming and
            interactive systems. My background combines 4+ years in
            data analytics, professional web development and earlier
            experience in programming education and game development
            tools.
            <br />
            <br />
            I&apos;m currently moving towards Game Design, with a
            particular interest in game systems, progression, balance
            and economy. I enjoy understanding how systems work,
            analysing them and turning ideas into something playable
            or interactive.
          </IntroText>

          <SkillGroups>
            <SkillGroup>
              <SkillGroupTitle>GameDev</SkillGroupTitle>

              <SkillTags>
                <SkillTag $type="gamedev">Unity</SkillTag>
                <SkillTag $type="gamedev">
                  Unreal Engine
                </SkillTag>
                <SkillTag $type="gamedev">C#</SkillTag>
              </SkillTags>
            </SkillGroup>

            <SkillGroup>
              <SkillGroupTitle>Data</SkillGroupTitle>

              <SkillTags>
                <SkillTag $type="data">
                  Data Analysis
                </SkillTag>
                <SkillTag $type="data">Python</SkillTag>
                <SkillTag $type="data">Dashboards</SkillTag>
                <SkillTag $type="data">SPSS</SkillTag>
                <SkillTag $type="data">DataTile</SkillTag>
              </SkillTags>
            </SkillGroup>

            <SkillGroup>
              <SkillGroupTitle>Development</SkillGroupTitle>

              <SkillTags>
                <SkillTag $type="development">
                  TypeScript
                </SkillTag>
                <SkillTag $type="development">
                  JavaScript
                </SkillTag>
                <SkillTag $type="development">
                  React
                </SkillTag>
                <SkillTag $type="development">
                  Webflow
                </SkillTag>
                <SkillTag $type="development">
                  Supabase
                </SkillTag>
                <SkillTag $type="development">Git</SkillTag>
              </SkillTags>
            </SkillGroup>
          </SkillGroups>
          <ProfileDetails mobile />
        </Intro>
      </Section>

      {/* Timeline */}

      <Section data-reveal>
        <SectionHeader>
          <SectionNumber>02</SectionNumber>
          <HeaderLine />
          <SectionTitle>Timeline</SectionTitle>
        </SectionHeader>

        <Timeline>
          <TimelineItem>
            <TimelineYear>2026</TimelineYear>

            <TimelineContent>
              <TimelineTitle>
                Moving towards Game Design
              </TimelineTitle>

              <TimelineMeta>
                GameDev · Game Design · Unity
              </TimelineMeta>

              <TimelineDescription>
                Exploring game design and development, learning Unity
                and working on small personal projects.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag $type="gamedev">
                  Unity
                </TimelineTag>
                <TimelineTag $type="gamedev">
                  Game Design
                </TimelineTag>
                <TimelineTag $type="gamedev">
                  Game Economy
                </TimelineTag>
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
                Building web projects and interfaces, working with
                React, TypeScript, Webflow, Supabase and structured
                data.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag $type="development">
                  React
                </TimelineTag>
                <TimelineTag $type="development">
                  TypeScript
                </TimelineTag>
                <TimelineTag $type="development">
                  Webflow
                </TimelineTag>
                <TimelineTag $type="development">
                  Supabase
                </TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2021</TimelineYear>

            <TimelineContent>
              <TimelineTitle>
                Senior Data Analyst
              </TimelineTitle>

              <TimelineMeta>
                Tiburon Research · 2021–2022
              </TimelineMeta>

              <TimelineDescription>
                Full-cycle research projects, data processing,
                advanced analysis and interactive dashboards. Trained
                and mentored a team member.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag $type="data">
                  Python
                </TimelineTag>
                <TimelineTag $type="data">
                  SPSS
                </TimelineTag>
                <TimelineTag $type="data">
                  DataTile
                </TimelineTag>
                <TimelineTag $type="data">
                  Analytics
                </TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2018</TimelineYear>

            <TimelineContent>
              <TimelineTitle>
                Data Analytics
              </TimelineTitle>

              <TimelineMeta>
                Tiburon Research · 2018–2021
              </TimelineMeta>

              <TimelineDescription>
                Research data processing and analysis, survey
                programming, data validation and interactive survey
                elements.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag $type="data">
                  Data Analysis
                </TimelineTag>
                <TimelineTag $type="data">
                  Python
                </TimelineTag>
                <TimelineTag $type="development">
                  JavaScript
                </TimelineTag>
                <TimelineTag $type="gamedev">
                  C#
                </TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2016</TimelineYear>

            <TimelineContent>
              <TimelineTitle>
                Programming Instructor
              </TimelineTitle>

              <TimelineMeta>
                STEM Education Center · 2016–2018
              </TimelineMeta>

              <TimelineDescription>
                Supported programming classes for children and
                teenagers, helping students troubleshoot code and
                build projects.
              </TimelineDescription>

              <TimelineTags>
                <TimelineTag $type="data">
                  Python
                </TimelineTag>
                <TimelineTag $type="development">
                  JavaScript
                </TimelineTag>
                <TimelineTag $type="gamedev">
                  Unreal Engine
                </TimelineTag>
              </TimelineTags>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* Selected Work */}

      <Section data-reveal>
        <SectionHeader>
          <SectionNumber>03</SectionNumber>
          <HeaderLine />
          <SectionTitle>Selected Work</SectionTitle>
        </SectionHeader>

        <WorkGrid>
          <WorkCard>
            <WorkType>
              Game Design / Coming soon
            </WorkType>

            <WorkTitle>
              Game Economy Study
            </WorkTitle>

            <WorkDescription>
              A personal study of progression, resource sources and
              sinks, economy balance and player pacing.
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
            <WorkType>
              Data / Development
            </WorkType>

            <WorkTitle>
              Signal Dashboard
            </WorkTitle>

            <WorkDescription>
              Interactive dashboard for monitoring and visualizing
              trading signals using structured data.
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

            <WorkTitle>
              Where is Ararat?
            </WorkTitle>

            <WorkDescription>
              Telegram bot that checks whether Mount Ararat is visible
              using webcam images and computer vision.
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

            <WorkTitle>
              More experiments
            </WorkTitle>

            <WorkDescription>
              A collection of smaller projects, experiments and things
              built while exploring different areas of development.
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
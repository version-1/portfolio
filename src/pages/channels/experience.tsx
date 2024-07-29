import React from "react";
import styled from "@emotion/styled";
import { LI, H3, Table, Th, Tr, Td } from "components/styles";
import Message from "components/domains/channel/message";
import Page from "components/shared/templates/page";
import { Thumbnail } from "components/styles/index";

const Container = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  display: flex;
`;

const Position = styled.h2`
  margin: 0;
  font-size: 18px;
  margin-right: 16px;
`;

const Company = styled.span`
  position: relative;
  top: 6px;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-right: 4px;
`;

const Location = styled.span`
  position: relative;
  top: 6px;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-right: 4px;
`;

const Date = styled.span`
  position: relative;
  top: 6px;
  font-size: 12px;
  font-weight: normal;
  display: block;
`;

function Title({
  position,
  company,
  location,
  date,
}: {
  position: string;
  company: string;
  location: string;
  date: string;
}) {
  return (
    <Container>
      <Position>{position}</Position>
      <Company>- {company}</Company>
      <Location>, {location}</Location>
      <Date>( {date} )</Date>
    </Container>
  );
}

export const Component: React.FC = () => {
  return (
    <Page title="Experience">
      <Message
        title={
          <Title
            company="Influitive"
            position="Senior Software Developer"
            location="Tronto, Canada"
            date="Mar 2021 ~ Feb 2024"
          />
        }
        body={
          <>
            <Table>
              <Tr>
                <Th>Product:</Th>
                <Td>
                  Customer Advocacy Saas for better customer success and feature
                  improvement based on direct feedback
                </Td>
              </Tr>
              <Tr>
                <Th>Skills:</Th>
                <Td>
                  Go, Ruby on Rails, React, Next.js, TypeScript, GraphQL,
                  Kubernetes, AWS
                </Td>
              </Tr>
            </Table>
            <H3>Accomplishment</H3>
            <LI>
              - Played as one of the main contributors in the GraphQL project
              from its inception to completion in order to implement the new
              flexible UI.
            </LI>
            <LI>
              - Resolved urgent bugs and customized the Rails forum
              library(discourse) to meet specific project requirements.
            </LI>
            <LI>
              - Actively participated in code reviews and contributed to the
              development of a robust, maintainable codebase by reviewing pull
              requests and implementing best practices.
            </LI>
            <LI>
              - Collaborated with customer support and design teams to address
              and resolve urgent user requirements and issues
            </LI>
          </>
        }
      />
      <Message
        title={
          <Title
            company="Phronesis Inc."
            position="Lead Developer"
            location="Tokyo, Japan"
            date="Oct 2018 ~ Dec 2020"
          />
        }
        body={
          <>
            <Table>
              <Tr>
                <Th>Product:</Th>
                <Td>
                  Automated document outputs for web and native apps (React
                  Native) tailored for real estate agents.
                </Td>
              </Tr>
              <Tr>
                <Th>Skills:</Th>
                <Td>
                  React, TypeScript, React Native, Vue, Ruby on Rails, AWS,
                  Circle CI, Firebase
                </Td>
              </Tr>
            </Table>
            <H3>Accomplishment</H3>
            <LI>
              - Led a team of 6 developers as the Lead Engineer, overseeing the
              design of both web and mobile applications
            </LI>
            <LI>
              - Engineered core features across backend and frontend for web and
              mobile apps, including chat functionality, file viewing, payment
              processing, and certificate registration requests.
            </LI>
            <LI>
              - Spearheaded the development and release of a React Native mobile
              application from inception to deployment.
            </LI>
            <LI>
              - Implemented Atomic Design principles to enhance development
              efficiency and create highly reusable components for the mobile
              app.
            </LI>
            <LI>
              - Designed and implemented app-wide libraries, such as an HTTP
              client library, to significantly boost development productivity
              and code reusability.
            </LI>
            <LI>
              - Improved product stability and increased test coverage by 10% by
              creating a robust test code environment and active team
              engagement.
            </LI>
            <LI>
              - Ensured stable and efficient deployment processes for web and
              mobile applications by implementing CI/CD pipelines.
            </LI>
          </>
        }
      />
      <Message
        title={
          <Title
            company="Jiraffe Inc."
            position="React/ Ruby on Rails Developer"
            location="Tokyo, Japan"
            date="Nov 2017 ~ Sep 2018"
          />
        }
        body={
          <>
            <Table>
              <Tr>
                <Th>Product:</Th>
                <Td>
                  Automated document outputs for web and native apps (React
                  Native) tailored for real estate agents.
                </Td>
              </Tr>
              <Tr>
                <Th>Skills:</Th>
                <Td>React, TypeScript, Ruby on Rails, AWS, Jenkins, MySQL</Td>
              </Tr>
            </Table>
            <H3>Accomplishment</H3>
            <LI>
              Led the design and implementation of the web console for a new web
              service, achieving peak sales of $10,000 in a single day.
            </LI>
            <LI>
              Streamlined the user registration flow by simplifying the
              registration form, improving the overall user experience while
              collaborating with the marketing team.
            </LI>
          </>
        }
      />
      <Message
        title={
          <Title
            company="EYS-STYLE"
            position="Rails Developer"
            location="Tokyo, Japan"
            date="Nov 2016 ~ Oct 2017"
          />
        }
        body={
          <>
            <Table>
              <Tr>
                <Th>Product:</Th>
                <Td>Lesson and customer management system for music school</Td>
              </Tr>
              <Tr>
                <Th>Skills:</Th>
                <Td>Ruby on Rails, JavaScript, AWS, PostgresSQL</Td>
              </Tr>
            </Table>
            <H3>Accomplishment</H3>
            <LI>
              - Led a development team of 3 members to create and maintain
              system.
            </LI>
            <LI>
              - Spearheaded a project to implement a new pricing plan, ensuring
              a smooth and efficient transition.
            </LI>
          </>
        }
      />
      <Message
        title={
          <Title
            company="Axis Co., Ltd."
            position="Java Developer / QA Engineer"
            location="Tokyo, Japan"
            date="Apr 2014 ~ Seq 2016"
          />
        }
        body={
          <>
            <Table>
              <Tr>
                <Th>Product:</Th>
                <Td>Web System related to Japan Central Bank</Td>
              </Tr>
              <Tr>
                <Th>Skills:</Th>
                <Td>Java, JavaScript, PostgresSQL, Jenkins, WAS, JBoss</Td>
              </Tr>
            </Table>
          </>
        }
      />
    </Page>
  );
};

export default Component;

import React from "react";
import styled from "styled-components";

interface PersonData {
  name: string;
  lastname: string;
  email: string;
  picture: string;
}

interface Props {
  exps: string[];
  educat: string[];
  intere: string[];
  skill: string[];
  lang: string[];
  user: PersonData;
  colors: string[];
}

const FormalStyle: React.FC<Props> = ({
  exps,
  educat,
  intere,
  skill,
  lang,
  user,
  colors,
}) => {
  return (
    <ClassicContainer>
      <PreviewCV style={{ color: colors[2] }}>
        <CvSidebar>
          <img src={user.picture} alt="" />
          <hr style={{ color: colors[1] }} />
          <h5>Dane Kontaktowe:</h5>
          <hr style={{ color: colors[1] }} />
          <p>{user.email}</p>
        </CvSidebar>

        <CvBody>
          <h1>
            {user.name} {user.lastname}
          </h1>
          <hr style={{ color: colors[1] }} />
          {exps.length !== 0 && (
            <BodySection>
              <h3> Doświadczenie zawodowe </h3>
              <ul>
                {exps.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
          {educat.length !== 0 && (
            <BodySection>
              <h3> Wykształcenie </h3>
              <ul>
                {educat.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
          {lang.length !== 0 && (
            <BodySection>
              <h3> Znajomość Języków </h3>
              <ul>
                {lang.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
          {skill.length !== 0 && (
            <BodySection>
              <h3> Umiejętności </h3>
              <ul>
                {skill.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}

          {intere.length !== 0 && (
            <BodySection>
              <h3> Zainteresowania </h3>
              <ul>
                {intere.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
        </CvBody>
      </PreviewCV>
    </ClassicContainer>
  );
};

export default FormalStyle;

const ClassicContainer = styled.div``;
const PreviewCV = styled.div`
  display: flex;
  align-items: center;
  height: 594px;
  width: 420px;
  box-shadow: 2px 8px 9px -2px rgba(66, 68, 90, 1);
  color: black;
`;
const CvSidebar = styled.div`
  height: 95%;
  flex: 0.2;
  margin-left: 10px;
  background-color: #fff;
  > img {
    margin-top: 20px;
    height: 120px;
    width: 100px;
  }
`;
const CvBody = styled.div`
  height: 95%;
  flex: 0.8;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #fff;
  > hr {
    color: #777707;
  }
  > h1 {
    font-size: 25px;
  }
`;
const BodySection = styled.div`
  word-wrap: break-word;
  max-width: 294px;
  > h3 {
    margin: 5px;
    font-size: 15px;
  }
  > ul {
    margin-left: 0;

    > li {
      margin-left: 10;
      font-size: 12px;
    }
  }
`;

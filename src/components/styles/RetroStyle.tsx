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

const RetroStyle: React.FC<Props> = ({
  exps,
  educat,
  intere,
  skill,
  lang,
  user,
  colors,
}) => {
  const bodySecStyle = {
    borderLeft: `3px solid ${colors[1]}`,
  };

  return (
    <ClassicContainer>
      <PreviewCV style={{ color: colors[2], backgroundColor: colors[0] }}>
        <CvBody>
          {exps.length !== 0 && (
            <BodySection style={bodySecStyle}>
              <h3> Doświadczenie zawodowe </h3>
              <ul>
                {exps.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
          {educat.length !== 0 && (
            <BodySection style={bodySecStyle}>
              <h3> Wykształcenie </h3>
              <ul>
                {educat.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
          {lang.length !== 0 && (
            <BodySection style={bodySecStyle}>
              <h3> Znajomość Języków </h3>
              <ul>
                {lang.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}

          {skill.length !== 0 && (
            <BodySection style={bodySecStyle}>
              <h3> Umiejętności </h3>
              <ul>
                {skill.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
          {intere.length !== 0 && (
            <BodySection style={bodySecStyle}>
              <h3> Zainteresowania </h3>
              <ul>
                {intere.map((exp: string, index: number) => {
                  return <li key={index}>{exp}</li>;
                })}
              </ul>
            </BodySection>
          )}
        </CvBody>
        <CvSidebar style={{ backgroundColor: colors[2] }}>
          <h4>
            {user.name} {user.lastname}
          </h4>
          <img src={user.picture} alt="" />
          <h5>Dane Kontaktowe:</h5>
          <p>{user.email}</p>
          <BodySection>
            <h3> Tech Stack </h3>
            <ul>
              {skill.map((exp: string, index: number) => {
                return <li key={index}>{exp}</li>;
              })}
            </ul>
          </BodySection>
        </CvSidebar>
      </PreviewCV>
    </ClassicContainer>
  );
};

export default RetroStyle;

const ClassicContainer = styled.div``;
const PreviewCV = styled.div`
  display: flex;
  align-items: center;
  height: 594px;
  width: 420px;
  box-shadow: 2px 8px 9px -2px rgba(66, 68, 90, 1);
`;
const CvSidebar = styled.div`
  height: 100%;
  width: 126px;
  flex: 0.3;
  text-align: center;
  border-bottom-left-radius: 20px;
  color: white;
  > img {
    border-radius: 30px;
    margin-top: 20px;
    height: 150px;
    width: 100%;
  }
`;
const CvBody = styled.div`
  height: 95%;
  flex: 0.7;
  > h1 {
    font-size: 25px;
  }
`;
const BodySection = styled.div`
  word-wrap: break-word;
  max-width: 294px;
  > h3 {
    margin: 10px;
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

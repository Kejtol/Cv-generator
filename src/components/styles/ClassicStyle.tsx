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

const ClassicStyle: React.FC<Props> = ({
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
      <Circle style={{ backgroundColor: colors[0] }} />
      <PreviewCV>
        <CvSidebar>
          <img src={user.picture} alt="" />
          <hr />
          <h5>Dane Kontaktowe:</h5>
          <hr />
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
        <Circle2 style={{ backgroundColor: colors[0] }} />
      </PreviewCV>
    </ClassicContainer>
  );
};

export default ClassicStyle;

const ClassicContainer = styled.div``;
const PreviewCV = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 594px;
  width: 420px;
  box-shadow: 2px 8px 9px -2px rgba(66, 68, 90, 1);
  color: black;
`;
const CvSidebar = styled.div`
  height: 95%;
  flex: 0.4;
  margin-left: 10px;
  background-color: transparent;
  z-index: 2;
  > img {
    height: 150px;
    width: 90%;
  }
`;
const CvBody = styled.div`
  height: 95%;
  flex: 0.6;
  margin-left: 10px;
  margin-right: 10px;
  background-color: transparent;
  > hr {
    color: black;
  }
  > h1 {
    font-size: 25px;
  }
`;
const BodySection = styled.div`
  word-wrap: break-word;
  max-width: 252px;
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
const Circle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-bottom-right-radius: 200px;
`;
const Circle2 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  bottom: 0;
  right: 0;
  border-top-left-radius: 200px;
`;

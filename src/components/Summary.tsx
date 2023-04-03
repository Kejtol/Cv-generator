import React, { useState, useEffect } from "react";
import styled from "styled-components";
import classic from "./photos/classic.png";
import retro from "./photos/retro.png";
import formal from "./photos/formal.png";
import ClassicStyle from "./styles/ClassicStyle";
import RetroStyle from "./styles/RetroStyle";
import FromalStyle from "./styles/FormalStyle";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
  isDone: number;
}

const Summary: React.FC<Props> = ({
  setStart,
  setIsDone,
  isDone,
  exps,
  educat,
  intere,
  skill,
  lang,
  user,
}) => {
  useEffect(() => {
    setStart(2);
    setIsDone(7);
  }, []);
  const [style, setStyle] = useState("classic");
  const [colors, setColors] = useState(["#84a4e92f", "#2e50ad", "#0e034e"]);

  const generatePdf = () => {
    const input = document.getElementById("divToPrint");
    if (input) {
      const pdfWidth = input.offsetWidth;
      const pdfHeight = input.offsetHeight;
      html2canvas(input, {
        scrollX: 0,
        scrollY: 0,
        scale: 3,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("download.pdf");
      });
    }
  };

  return (
    <SummaryContainer>
      {isDone === 8 && (
        <SummaryLeft>
          <button className="pdf" onClick={generatePdf}>
            Pobierz jak PDF
          </button>
        </SummaryLeft>
      )}
      {isDone === 7 && (
        <SummaryLeft>
          <StyleSection>
            <StylePic>
              <button
                onClick={(): void => {
                  setStyle("classic");
                }}
              >
                Classic
              </button>
              <img src={classic} alt="classic style" />
            </StylePic>
            <StylePic>
              <button
                onClick={(): void => {
                  setStyle("formal");
                }}
              >
                Formal
              </button>
              <img src={formal} alt="classic style" />
            </StylePic>
            <StylePic>
              <button
                onClick={(): void => {
                  setStyle("retro");
                }}
              >
                Retro
              </button>
              <img src={retro} alt="classic style" />
            </StylePic>
          </StyleSection>
          <ColorSection>
            <ColorPic>
              <BoxContainer>
                <Box className="box1" />
                <Box className="box2" />
                <Box className="box3" />
              </BoxContainer>
              <button
                onClick={(): void => {
                  setColors(["#d68b8b36", "#ad2b2b", "#3a0505"]);
                }}
              >
                Warm
              </button>
            </ColorPic>
            <ColorPic>
              <BoxContainer>
                <Box className="box4" />
                <Box className="box5" />
                <Box className="box6" />
              </BoxContainer>
              <button
                onClick={(): void => {
                  setColors(["#84a4e92f", "#2e50ad", "#0e034e"]);
                }}
              >
                Cold
              </button>
            </ColorPic>
            <ColorPic>
              <BoxContainer>
                <Box className="box7" />
                <Box className="box8" />
                <Box className="box9" />
              </BoxContainer>
              <button
                onClick={(): void => {
                  setColors(["#a0f8c230", "#3ea543", "#043306"]);
                }}
              >
                Nature
              </button>
            </ColorPic>
          </ColorSection>
        </SummaryLeft>
      )}

      <SummaryRight>
        <Preview id="divToPrint">
          {style === "classic" && (
            <ClassicStyle
              exps={exps}
              educat={educat}
              intere={intere}
              skill={skill}
              lang={lang}
              user={user}
              colors={colors}
            />
          )}

          {style === "retro" && (
            <RetroStyle
              exps={exps}
              educat={educat}
              intere={intere}
              skill={skill}
              lang={lang}
              user={user}
              colors={colors}
            />
          )}

          {style === "formal" && (
            <FromalStyle
              exps={exps}
              educat={educat}
              intere={intere}
              skill={skill}
              lang={lang}
              user={user}
              colors={colors}
            />
          )}
        </Preview>
      </SummaryRight>
    </SummaryContainer>
  );
};

export default Summary;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 550px;
`;
const SummaryLeft = styled.div`
  display: flex;
  height: 100%;
  padding: 30px;
  margin: 20px;
  flex: 0.55;
  background-color: white;
  align-items: center;
  justify-content: center;
  > button {
    width: 40%;
    height: 30%;
    font-size: 40px;
    border: none;
    border-radius: 60px;
    color: white;
    background-color: #df0909d3;
  }
`;
const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  flex: 0.4;
`;
const StyleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  flex: 0.6;
`;
const ColorPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 100%;
  border-bottom: 2px solid gray;
  border-right: 2px solid gray;
  border-bottom-right-radius: 10px;
  margin: 0;

  > button {
    width: 50%;
    height: 30%;
    font-size: 20px;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #23126d;
  }
`;
const Box = styled.div`
  width: 75px;
  height: 75px;
  margin: 10px;
`;
const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > .box1 {
    background-color: #cc76765e;
  }
  > .box2 {
    background-color: #ad2b2b;
  }
  > .box3 {
    background-color: #3a0505;
  }
  > .box4 {
    background-color: #93a9da63;
  }
  > .box5 {
    background-color: #2348ac;
  }
  > .box6 {
    background-color: #0e034e;
  }
  > .box7 {
    background-color: #a7f0c381;
  }
  > .box8 {
    background-color: #3ea543;
  }
  > .box9 {
    background-color: #043306;
  }
`;
const StylePic = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 100%;
  border-bottom: 2px solid gray;
  border-left: 2px solid gray;
  border-bottom-left-radius: 10px;

  > img {
    height: 90%;
    box-shadow: 2px 8px 9px -2px rgba(66, 68, 90, 1);
  }
  > button {
    width: 50%;
    height: 40%;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #23126d;
  }
`;
const SummaryRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px;
  margin: 20px;
  flex: 0.45;
  background-color: white;
`;
const Preview = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  height: 594px;
  width: 420px;
`;

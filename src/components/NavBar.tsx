import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface Props {
  isDone: number;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const NavBar: React.FC<Props> = ({ isDone, setIsDone }) => {
  return (
    <NavBarContainer>
      <NavBarTop>
        <h2>CV-Generator</h2>
      </NavBarTop>

      {isDone >= 1 ? (
        <NavBarBottom>
          <NavBar1>
            <p>Start</p>
            {isDone >= 1 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </NavBar1>
          <NavBar1>
            <p>Doświadczenie Zawodowe</p>
            {isDone >= 2 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </NavBar1>
          <NavBar1>
            <p>Wykształcenie</p>
            {isDone >= 3 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </NavBar1>
          <NavBar1>
            <p>Znajomość Języków</p>
            {isDone >= 4 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </NavBar1>
          <NavBar1>
            <p>Umiejętności</p>
            {isDone >= 5 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </NavBar1>
          <NavBar1>
            <p>Zainteresowania</p>
            {isDone >= 6 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </NavBar1>
          <NavBar1>
            <p>Twoje Dane oraz zdjęcie</p>
            {isDone >= 7 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </NavBar1>
        </NavBarBottom>
      ) : (
        ""
      )}
    </NavBarContainer>
  );
};

export default NavBar;
const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  height: 16vh;
  width: 100vw;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #23126d;
  border-bottom: 1px solid #000;
  background-color: #fff;
`;
const NavBarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  > h2 {
    font-size: 50px;
  }
`;
const NavBarBottom = styled.div`
  display: flex;
  align-items: center;
  height: 8vh;
  justify-content: space-evenly;
  border-top: 1px solid #000;
`;
const NavBar1 = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    font-size: 40px;
  }
  > p {
    font-size: 20px;
  }
`;

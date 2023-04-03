import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StartPage from "./components/StartPage";
import StepOne from "./components/StepOne";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Summary from "./components/Summary";
import Person from "./components/Person";

const App: React.FC = () => {
  interface PersonData {
    name: string;
    lastname: string;
    email: string;
    picture: string;
  }

  const [isDone, setIsDone] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [exps, setExps] = useState<string[]>([]);
  const [educat, setEducat] = useState<string[]>([]);
  const [lang, setLang] = useState<string[]>([]);
  const [skill, setSkill] = useState<string[]>([]);
  const [intere, setIntere] = useState<string[]>([]);
  const [user, setUser] = useState<PersonData>({
    name: "Imię",
    lastname: "Nazwisko",
    email: "Email",
    picture: "",
  });

  return (
    <Router basename="/Cv-generator">
      <div className="App">
        {isDone < 7 && <NavBar isDone={isDone} setIsDone={setIsDone} />}
        <Routes>
          <Route
            path="/Cv-generator"
            element={
              <StartPage
                start={start}
                setStart={setStart}
                setIsDone={setIsDone}
              />
            }
          />

          <Route
            path="/stepone"
            element={
              <StepOne
                isDone={isDone}
                setIsDone={setIsDone}
                setStart={setStart}
              />
            }
          />

          <Route
            path="/experience"
            element={
              <Experience
                exps={exps}
                setExps={setExps}
                setStart={setStart}
                setIsDone={setIsDone}
              />
            }
          />
          <Route
            path="/education"
            element={
              <Education
                educat={educat}
                setEducat={setEducat}
                setStart={setStart}
                setIsDone={setIsDone}
              />
            }
          />

          <Route
            path="/languages"
            element={
              <Languages
                lang={lang}
                setLang={setLang}
                setStart={setStart}
                setIsDone={setIsDone}
              />
            }
          />
          <Route
            path="/skills"
            element={
              <Skills
                skill={skill}
                setSkill={setSkill}
                setStart={setStart}
                setIsDone={setIsDone}
              />
            }
          />

          <Route
            path="/interests"
            element={
              <Interests
                intere={intere}
                setIntere={setIntere}
                setStart={setStart}
                setIsDone={setIsDone}
              />
            }
          />
          <Route
            path="/person"
            element={
              <Person
                user={user}
                setUser={setUser}
                setStart={setStart}
                setIsDone={setIsDone}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <Summary
                exps={exps}
                intere={intere}
                skill={skill}
                lang={lang}
                educat={educat}
                user={user}
                setStart={setStart}
                setIsDone={setIsDone}
                isDone={isDone}
              />
            }
          />
        </Routes>
        {start >= 1 && (
          <Footer
            isDone={isDone}
            setIsDone={setIsDone}
            start={start}
            setStart={setStart}
          />
        )}
      </div>
    </Router>
  );
};

export default App;

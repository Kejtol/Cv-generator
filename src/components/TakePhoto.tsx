import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Webcam from "react-webcam";

interface PersonData {
  name: string;
  lastname: string;
  email: string;
  picture: string;
}

interface Props {
  setUser: React.Dispatch<React.SetStateAction<PersonData>>;
  user: PersonData;
  setTakePic: React.Dispatch<React.SetStateAction<boolean>>;
}

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};

const TakePhoto: React.FC<Props> = ({ setUser, user, setTakePic }) => {
  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    console.log("first");
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setUser({ ...user, picture: imageSrc });
      }
    }
  }, [webcamRef]);

  return (
    <TakePhotoContainer>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <button
        onClick={(): void => {
          setTakePic(false);
        }}
      >
        <KeyboardBackspaceIcon />
      </button>
      <button onClick={capture}>
        <CameraAltIcon />
      </button>
    </TakePhotoContainer>
  );
};

export default TakePhoto;

const TakePhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  > button {
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 20px;
    background-color: #ece9fa;
    > .MuiSvgIcon-root {
      font-size: 50px;
      color: #23126d;
    }
  }
`;

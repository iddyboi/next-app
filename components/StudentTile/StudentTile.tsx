import { FunctionComponent } from "react";
import styled from "styled-components";

interface IProps {
  imgUrl?: string;
  text: string;
}
const StudentTile: FunctionComponent<IProps> = ({ text, imgUrl }) => {
  return (
    <>
      <StudentGridContainer>
        <StudentInfo>
          <ImageContainer>
            <Overlay />
            <img src={imgUrl} alt={text} />
          </ImageContainer>
          <TextContainer>
            <p>{text}</p>
          </TextContainer>
        </StudentInfo>
        <StudentInfo>
          <ImageContainer>
            <Overlay />
            <img src={imgUrl} alt={text} />
          </ImageContainer>
          <TextContainer>
            <p>{text}</p>
          </TextContainer>
        </StudentInfo>
        <StudentInfo>
          <ImageContainer>
            <Overlay />
            <img src={imgUrl} alt={text} />
          </ImageContainer>
          <TextContainer>
            <p>{text}</p>
          </TextContainer>
        </StudentInfo>
        <StudentInfo>
          <ImageContainer>
            <Overlay />
            <img src={imgUrl} alt={text} />
          </ImageContainer>
          <TextContainer>
            <p>{text}</p>
          </TextContainer>
        </StudentInfo>
      </StudentGridContainer>
    </>
  );
};

export default StudentTile;

const StudentGridContainer = styled.div`
  display: grid;
  gap: 20px;
  place-items: center;
  margin: 2rem 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem 0;
  }
`;

const StudentInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  padding: 1.6rem;
`;
const TextContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  p {
    font-size: 3rem;
  }
`;
const Overlay = styled.div`
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.3;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

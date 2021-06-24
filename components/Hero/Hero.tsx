import styled from "styled-components";

export interface HeroProps {
  imgUrl?: string;
  title?: string;
  text?: string;
}

const Hero: React.SFC<HeroProps> = ({ imgUrl, title, text }) => {
  return (
    <>
      <h1>Hero</h1>
    </>
  );
};

export default Hero;

const HeroImage = styled.div``;

const HeroText = styled.article``;

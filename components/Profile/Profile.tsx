import { useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Title, Subtitle, Lead, List } from "../../styles/fonts";
import { Container } from "../../styles/utility-styles";
import { myContext } from "../../hooks/store";
import { IProfile } from "../../interfaces/ProfileInterface";
import TextCard from "../TextCard/TextCard";
function Profile() {
  const todoCtx = useContext(myContext);
  const getProfileData = async () => {
    try {
      const response = await axios.get<IProfile>("/profile.json");
      return await response.data;
    } catch (error) {
      return error;
    }
  };
  const { error, isLoading, data, status, isError } = useQuery(
    "profile",
    getProfileData
  );

  return (
    <Container>
      <Title>{data?.name}</Title>
      <Subtitle fontSize="2rem">{data?.jobDescription}</Subtitle>
      <Lead>
        <strong>Location: </strong>
        {data?.location}
      </Lead>

      <TextCard heading="About me" paragraph={data?.info} />
      <List>
        <Subtitle fontSize="2rem">My Skills</Subtitle>
        {data?.tech.map((techItem) => (
          <li>{techItem}</li>
        ))}
      </List>
    </Container>
  );
}

export default Profile;

import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IUser } from '../../pages';

interface IProps {
  users: IUser[];
}

const UsersList: FunctionComponent<IProps> = ({ users }) => {
  return (
    <Wrapper>
      {' '}
      <ul>
        {users.map(({ username, age, id }) => (
          <li key={id}>
            {username},({age})
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default UsersList;

const Wrapper = styled.div`
  max-width: 40rem;
  width: 90%;
  margin: 2rem auto;

  ul {
    list-style: none;
    li {
      margin: 1rem 0;
      background-color: #fff;
      padding: 1em;
      border-radius: 5px;
    }
  }
`;

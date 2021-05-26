import styled from 'styled-components';
import AddInventory from '../components/Inventory/AddInventory';

function StatePage() {
  return (
    <>
      <Title>Inventory App</Title>
      <AddInventory />
    </>
  );
}

export default StatePage;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0;
`;

import styled from "styled-components";

const InventoryList = ({ inventories }) => {
  return (
    <List>
      {inventories.inventories.map(({ name, description, quantity }) => (
        <Item key={description}>
          <div>
            {" "}
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <p>Quantity: {quantity}</p>
        </Item>
      ))}
    </List>
  );
};

export default InventoryList;

const List = styled.div`
  padding: 0 15px;
  margin-top: 50px;
`;
const Item = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

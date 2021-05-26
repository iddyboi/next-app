import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import styled from 'styled-components';
import InventoryList from './InventoryList';

interface Inventory {
  name: string;
  quantity: number;
  description?: string;
}

interface InventoryListItems {
  inventories: Inventory[];
}
type Action =
  | { type: 'ADD'; payload: Inventory }
  | { type: 'DELETE' }
  | { type: 'EDIT' };
const invertoryReducer = (state: InventoryListItems, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, inventories: [...state.inventories, action.payload] };
    default:
      return state;
  }
};

const initalstate: InventoryListItems = {
  inventories: [
    { name: 'Cream', quantity: 10, description: 'Vitamin E cream' },
  ],
};

const AddInventory = () => {
  const [inventoriesstate, inventoriesDispatch] = useReducer(
    invertoryReducer,
    initalstate
  );
  const [inventoryForm, setInventoryForm] = useState<Inventory>({
    name: '',
    quantity: 0,
    description: '',
  });
  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInventoryForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    inventoriesDispatch({ type: 'ADD', payload: inventoryForm });
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormControl>
          <label htmlFor='inventoryName'>Inventory Name</label>
          <input
            type='text'
            id='inventoryName'
            value={inventoryForm.name}
            name='name'
            onChange={formHandler}
          />
        </FormControl>
        <FormControl>
          <label htmlFor='Quantity'>Quantity</label>
          <input
            type='number'
            id='Quantity'
            value={inventoryForm.quantity}
            name='quantity'
            onChange={formHandler}
          />
        </FormControl>
        <FormControl>
          <label htmlFor='description'>Inventory Description</label>
          <input
            type='text'
            id='description'
            value={inventoryForm.description}
            name='description'
            onChange={formHandler}
          />
        </FormControl>
        <button type='submit'>add inventory</button>
      </Form>
      <InventoryList inventories={inventoriesstate} />
    </>
  );
};

export default AddInventory;

const Form = styled.form`
  width: 100%;
  padding: 0 15px;
  button {
    padding: 0.5rem 1rem;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
  }
`;
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
  }
  input {
    padding: 0.5rem 1rem;
    margin-bottom: 10px;
  }
`;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Food } from '../../components/CustomerCard';
type Customer = {
  id: number;
  name: string;
  food: Food;
};
type CustomerFood = {
  id: number;
  food: string;
};
type CustomerState = {
  value: Customer[];
};

const initialState: CustomerState = {
  value: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addCustomerFood: (state, action: PayloadAction<CustomerFood>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
        return;
      });
    },
  },
});

export const { addCustomer, addCustomerFood } = customerSlice.actions;
export default customerSlice.reducer;

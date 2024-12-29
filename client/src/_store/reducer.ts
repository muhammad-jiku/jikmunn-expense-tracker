import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ITransaction } from '../_interfaces';

interface IExpenseState {
  categories: ICategory[];
  transactions: ITransaction[];
}

const initialState: IExpenseState = {
  categories: [],
  transactions: [],
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    // Reducer to set transactions
    setTransactions: (state, action: PayloadAction<ITransaction[]>) => {
      state.transactions = action.payload;
    },
    // Reducer to set categories
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setTransactions, setCategories } = expenseSlice.actions;
export default expenseSlice.reducer;

// Updated interfaces based on the response data

// For Category data
export interface ICategory {
  _id: string;
  type: string;
  color: string;
  // createdAt: string;
  // updatedAt: string;
  // id: string;
}

// For Label data, which extends from ITransaction and includes 'color'
export interface ILabel extends ITransaction {
  color?: string;
  percent?: number;
}

// Transaction interface with MongoDB-compatible _id
export interface ITransaction {
  _id: string;
  name: string;
  type: 'Investment' | 'Expense' | 'Savings';
  amount: number;
  date: string;
  // createdAt: string;
  // updatedAt: string;
  // id: string;
}

// Interface for summarizing transactions
export interface ITransactionSum {
  type: 'Investment' | 'Expense' | 'Savings';
  color: string;
  total: number;
}

// Response interfaces for different endpoints
export interface ITransactionResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    total: number;
  };
  data: ITransaction[];
}

export interface ICategoryResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    total: number;
  };
  data: ICategory[];
}

export interface ILabelResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    total: number;
  };
  data: ILabel[];
}

export interface IExpenseState {
  categories: ICategory[];
  transactions: ITransaction[];
}

export interface IFormInputs {
  name: string;
  type: 'Investment' | 'Expense' | 'Savings';
  amount: number;
}

import _ from 'lodash';
import {
  ILabel,
  ITransaction,
  ITransactionResponse,
  ITransactionSum,
} from '../_interfaces';

// Function to get the sum of transactions, grouped by type if a type is provided
export function getSum(
  transaction: ILabel[],
  type?: string
): number | ITransactionSum[] {
  const sum = _(transaction)
    .groupBy('type')
    .map((objs, key) => {
      if (type) {
        // When type is provided, return an object with grouped data
        return {
          type: key,
          color: objs[0]?.color, // Ensure objs[0] exists before accessing color
          total: _.sumBy(objs, 'amount'),
        };
      }
      // When no type is provided, return the sum of all amounts
      return _.sumBy(objs, 'amount');
    })
    .value();

  // TypeScript can't infer this perfectly, so we explicitly ensure correct types
  return type ? (sum as ITransactionSum[]) : _.sum(sum as number[]); // Ensure sum is consistent
}

// Function to calculate labels with percentages
export function getLabels(transaction: ITransaction[]): ILabel[] {
  const amountSum = getSum(transaction, 'type');

  if (Array.isArray(amountSum)) {
    const total = _.sumBy(amountSum, 'total'); // Sum up all totals

    return amountSum.map((item) => ({
      _id: '', // Default empty value or generate unique ID
      date: '', // Default empty value or add date logic
      createdAt: '', // Default empty value or use current date
      updatedAt: '', // Default empty value or use current date
      id: '', // Default empty value or generate unique ID
      name: item.type, // Assuming name is the type
      type: item.type,
      amount: item.total,
      color: item.color || '#000000', // Default color if undefined
      percent: (100 * item.total) / total,
    }));
  }

  return []; // If `amountSum` is a number, return an empty array
}

// Function to generate chart data based on ITransactionResponse
export function chartData(transaction: ITransactionResponse, custom?: object) {
  console.log('Transaction data:', transaction); // Log to check what `transaction` is
  const bg = _.uniq(transaction.data.map((t: ILabel) => t.color)); // Ensure transaction.data is used

  const sum = getSum(transaction.data as ILabel[], 'type');
  const dataValue = Array.isArray(sum) ? sum.map((item) => item.total) : []; // Extract totals

  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bg,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return custom ?? config;
}

// Function to get the total of all transactions
export function getTotal(transaction: ITransaction[]): number {
  const sum = getSum(transaction);
  return typeof sum === 'number' ? sum : _.sumBy(sum, 'total'); // Return sum directly or sum totals
}

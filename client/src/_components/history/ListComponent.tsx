import { ILabel } from '../../_interfaces';
import {
  useDeleteTransactionMutation,
  useGetLabelsQuery,
} from '../../_store/apiSlice';
import TransactionComponent from './TransactionComponent';

// const obj = [
//   {
//     name: 'Savings',
//     color: '#f9c74f',
//   },
//   {
//     name: 'Investment',
//     color: '#f9c74f',
//   },
//   {
//     name: 'Expense',
//     color: 'rgb(54, 162, 235)',
//   },
// ];

function ListComponent() {
  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery();
  const [deleteTransaction] = useDeleteTransactionMutation();

  console.log('label data', data);

  let Transactions: React.ReactNode;

  // Event handler type explicitly defined
  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    deleteTransaction(id as string); // Pass the correct id to the mutation
  };

  if (isFetching) {
    Transactions = <div>Fetching...</div>;
  } else if (isSuccess && data?.data?.length > 0) {
    Transactions = data?.data?.map((label: ILabel, index: number) => (
      <TransactionComponent
        key={label._id || index}
        category={label}
        handler={handlerClick}
      />
    ));
  } else if (isError) {
    Transactions = <div>Error fetching labels</div>;
  }

  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {Transactions}
    </div>
  );
}

export default ListComponent;

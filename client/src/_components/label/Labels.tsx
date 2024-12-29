import { getLabels } from '../../_helpers';
import { useGetLabelsQuery } from '../../_store/apiSlice';
import LabelsComponent from './LabelsComponent';

// const obj = [
//   {
//     type: 'Savings',
//     color: '#f9c74f',
//     percent: 45,
//   },
//   {
//     type: 'Investment',
//     color: '#f9c74f',
//     percent: 20,
//   },
//   {
//     type: 'Expense',
//     color: 'rgb(54, 162, 235)',
//     percent: 10,
//   },
// ];

function Labels() {
  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery();
  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = getLabels(data?.data).map((v, i) => (
      <LabelsComponent key={i} data={v} />
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return <>{Transactions}</>;
}

export default Labels;

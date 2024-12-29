import { getLabels } from '../../_helpers';
import { useGetLabelsQuery } from '../../_store/apiSlice';
import LabelsComponent from './LabelsComponent';

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

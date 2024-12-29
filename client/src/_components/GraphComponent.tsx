import { ArcElement, Chart, ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { chartData, getTotal } from '../_helpers';
import { ILabel, ITransactionResponse } from '../_interfaces';
import { useGetLabelsQuery } from '../_store/apiSlice';
import Labels from './label/Labels';

Chart.register(ArcElement);

const GraphComponent: React.FC = () => {
  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery();
  let graphData: JSX.Element | null;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess && data) {
    // Explicitly type the chart configuration returned by `chartData`
    const chartConfig = chartData(data as ITransactionResponse) as {
      data: ChartData<'doughnut'>;
      options: ChartOptions<'doughnut'>;
    };

    graphData = (
      <Doughnut data={chartConfig.data} options={chartConfig.options} />
      // <Doughnut {...chartData(data as ITransactionResponse)} />
    );
  } else if (isError) {
    graphData = <div>Error</div>;
  } else {
    graphData = null;
  }

  return (
    <div className='flex justify-content max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart relative'>
          {graphData}
          <h3 className='mb-4 font-bold title'>
            Total
            <span className='block text-3xl text-emerald-400'>
              ${data ? Math.round(getTotal(data?.data as ILabel[])) : 0}
            </span>
          </h3>
        </div>

        <div className='flex flex-col py-10 gap-4'>
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;

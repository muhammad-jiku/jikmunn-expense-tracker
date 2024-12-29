import { ILabel } from '../../_interfaces';

interface ILabelsComponentProps {
  data: ILabel;
}

const LabelsComponent: React.FC<ILabelsComponentProps> = ({ data }) => {
  if (!data) return <></>;

  return (
    <div className='labels flex justify-between'>
      <div className='flex gap-2'>
        <div
          className='w-2 h-2 rounded py-3'
          style={{ background: data.color ?? '#f9c74f' }}
        ></div>
        <h3 className='text-md'>{data.type ?? ''}</h3>
      </div>
      <h3 className='font-bold'>{Math.round(data.percent as number) ?? 0}%</h3>
    </div>
  );
};

export default LabelsComponent;

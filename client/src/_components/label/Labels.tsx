import { LabelsComponent } from './LabelsComponent';

const obj = [
  {
    type: 'Savings',
    color: '#f9c74f',
    percent: 45,
  },
  {
    type: 'Investment',
    color: '#f9c74f',
    percent: 20,
  },
  {
    type: 'Expense',
    color: 'rgb(54, 162, 235)',
    percent: 10,
  },
];

function Labels() {
  return (
    <>
      {obj.map((v, i) => (
        <LabelsComponent key={i} data={v} />
      ))}
    </>
  );
}

export default Labels;

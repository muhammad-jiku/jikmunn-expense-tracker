import 'boxicons/css/boxicons.min.css';

type CatergoryData = {
  name: string;
  color: string;
};

function TransactionComponent({ category }: { category: CatergoryData }) {
  if (!category) return <></>;

  return (
    <div
      className='item flex justify-center bg-gray-50 py-2 rounded-r'
      style={{ borderRight: `8px solid ${category.color ?? '#e5e5e5'}` }}
    >
      {/* <button className='px-3' aria-label={`Delete ${category.name}`}>
        <box-icon
          color={category.color ?? '#e5e5e5'}
          size='15px'
          name='trash'
        ></box-icon>
      </button> */}
      <button className='px-3' aria-label={`Delete ${category.name}`}>
        <span
          className='bx bx-trash'
          style={{ color: category.color ?? '#e5e5e5', fontSize: '15px' }}
        ></span>
      </button>
      <span className='block w-full'>{category.name ?? ''}</span>
    </div>
  );
}

export default TransactionComponent;

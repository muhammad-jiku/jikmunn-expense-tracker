import 'boxicons/css/boxicons.min.css';
import React from 'react';
import { ILabel } from '../../_interfaces';

interface TransactionComponentProps {
  category: ILabel; // Category follows the ILabel interface
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void; // Event handler for delete button
}

const TransactionComponent: React.FC<TransactionComponentProps> = ({
  category,
  handler,
}) => {
  if (!category) return null;

  return (
    <div
      className='item flex justify-center bg-gray-50 py-2 rounded-r'
      style={{ borderRight: `8px solid ${category.color ?? '#e5e5e5'}` }}
    >
      <button
        className='px-3'
        aria-label={`Delete ${category.name}`}
        onClick={handler}
        data-id={category._id} // Attach the id to the button's dataset
      >
        <span
          className='bx bx-trash'
          style={{ color: category.color ?? '#e5e5e5', fontSize: '15px' }}
        ></span>
      </button>
      <span className='block w-full'>{category.name ?? ''}</span>
    </div>
  );
};

export default TransactionComponent;

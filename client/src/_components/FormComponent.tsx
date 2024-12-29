import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormInputs } from '../_interfaces';
import { useAddTransactionMutation } from '../_store/apiSlice';
import ListComponent from './history/ListComponent';

const FormComponent: React.FC = () => {
  const { register, handleSubmit, resetField } = useForm<IFormInputs>();
  const [addTransaction] = useAddTransactionMutation();

  // Submit handler to handle form submission
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (!data) return;

    const transactionData: IFormInputs = {
      name: data.name,
      type: data.type,
      amount: parseFloat(data.amount), // Assuming amount is a string and needs conversion to a number
    };

    try {
      // Add the transaction and reset form fields
      await addTransaction(transactionData).unwrap();
      resetField('name');
      resetField('amount');
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  };

  return (
    <div className='form max-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          <div className='input-group'>
            <input
              type='text'
              {...register('name')}
              placeholder='Salary, House Rent, SIP'
              className='form-input'
            />
          </div>

          <select className='form-input' {...register('type')}>
            <option defaultValue='Investment'>Investment</option>
            <option value='Expense'>Expense</option>
            <option value='Savings'>Savings</option>
          </select>

          <div className='input-group'>
            <input
              type='text'
              {...register('amount')}
              placeholder='Amount'
              className='form-input'
            />
          </div>

          <div className='submit-btn'>
            <button className='border py-2 text-white bg-indigo-500 w-full'>
              Make Transaction
            </button>
          </div>
        </div>
      </form>

      <ListComponent />
    </div>
  );
};

export default FormComponent;

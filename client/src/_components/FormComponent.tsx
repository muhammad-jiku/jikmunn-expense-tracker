import { useForm } from 'react-hook-form';
import ListComponent from './history/ListComponent';

type FormData = {
  name: string;
  type: string;
  amount: string;
};

function FormComponent() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
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
          <select
            className='form-input'
            {...register('type')}
            defaultValue='Investment'
          >
            <option value='Investment'>Investment</option>
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
}

export default FormComponent;

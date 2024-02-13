import { useState } from 'react';
import './LoanCalculation.css';

export default function LoanCalculation() {
  const [capital, setCapital] = useState('');
  const [rate, setRate] = useState('');
  const [duration, setDuration] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'capital') {
      setCapital(value);
    } else if (name === 'rate') {
      setRate(value);
    } else if (name === 'duration') {
      setDuration(value);
    }
  };

  const calculateLoan = () => {
    const capitalAmount = parseFloat(capital);
    const ratePercentage = parseFloat(rate) * (1.1 / 100);
    const durationMonths = parseFloat(duration) * 12;

    const alpha = capitalAmount * ratePercentage / 12;
    const beta = 1 + ratePercentage / 12;
    const negatif = -1 * durationMonths;
    const puissance = Math.pow(beta, negatif);
    const denominateur = 1 - puissance;
    const result = alpha / denominateur;

    setMonthlyPayment(Math.round(result * 100) / 100);
  };

  return (
    
    <div className='loanCalculationContainer'>

    <div className="tutorial">
            <h1 className='text-3xl font-extrabold sm:text-5xl'>How to simulate your loan</h1><br />
            <p className='font-serif'>In order to take an idea about what will be the cost of your loan, you can use our loan simulator by following the steps below :</p><br />
            <ol className='list-decimal'> 
                <li className='font-serif'>Choose a capital of your loan and wright it on the indicated space;</li>
                <li className='font-serif'>Use the cursor in order to select the rate interest you may wish. You can wether choose the mouse or your keybord. Note that the interest is defined on HT and calculated on TTC;</li>
                <li className='font-serif'>Use the cursor to determine the wished duration of your loan. You can wether choose the mouse or your keybord;</li>
                <li className='font-serif'>Press the button calculate;</li>
                <li className='font-serif'>Congrats ! Here you have your estimation of the loan cost.</li>
            </ol>
        </div>  

      <div className='calculationContainer'>
      <label htmlFor="capital" className="block text-sm font-medium leading-6 text-gray-900">
        Capital
      </label>
      <input
        type="text"
        name="capital"
        id="capital"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0.00"
        value={capital}
        onChange={handleInputChange}
      />

      <label htmlFor="rate" className="block text-sm font-medium leading-6 text-gray-900">
        Rate
      </label>
      <input
        type="text"
        name="rate"
        id="rate"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0.00"
        value={rate}
        onChange={handleInputChange}
      />

      <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
        Duration
      </label>
      <input
        type="text"
        name="duration"
        id="duration"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0"
        value={duration}
        onChange={handleInputChange}
      />

      <br />

      <button
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        onClick={calculateLoan}
      >
        Calculate
      </button>

      <label htmlFor="loan" className="block text-sm font-medium leading-6 text-gray-900">
        Result loan
      </label>
      <input
        type="text"
        name="loan"
        id="loan"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0.00"
        value={monthlyPayment}
        readOnly
      />
    </div>

    
      </div>
  );
}

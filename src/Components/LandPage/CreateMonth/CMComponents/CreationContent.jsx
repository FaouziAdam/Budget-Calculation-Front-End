import { useState } from 'react';
import './CreationContent.css';
import axios from 'axios';

export default function CreationContent() {

  const [selectedMonth, setSelectedMonth] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataCreationBudget = {
        id: "",
        mois: selectedMonth
    };

    console.log(dataCreationBudget);

    try {
        const response = await axios.post('http://localhost:8081/api/budget/enregistrerResultat', dataCreationBudget, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 201) {
            console.log('Requête POST réussie');
            alert("Month Submitted")
        } else {
            console.error('Erreur lors de la requête POST');
        }
    } catch (error) {
        console.error('Erreur lors de la requête POST:', error);
    }

};




  return (
    <div 
    className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 creationContentContainer"
    aria-modal="true"
    role="dialog"
    tabIndex="-1">

        <label htmlFor="Month" className="block text-sm font-medium text-gray-900"> Month </label>

        <select
            name="Month"
            id="Month"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}>
            
            <option value="">Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>

        </select>


        <br /><br />
        <button 
              type="submit" 
              className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 creationMonthButton"
              onClick={handleSubmit}>
              <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Submit
              </span>
          </button>

    </div>
  )
}

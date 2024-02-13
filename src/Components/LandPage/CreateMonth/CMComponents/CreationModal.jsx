import axios from 'axios';
import './CreationModal.css';
import { useState } from 'react';

export default function CreationModal() {
    const [mois, setMois] = useState('');
    const [typeDeFlux, setTypeDeFlux] = useState('');
    const [libelle, setLibelle] = useState('');
    const [montant, setMontant] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const dataCreationFlux = {
            id: "",
            mois: mois,
            typeDeFlux: typeDeFlux,
            libelle: libelle,
            montant: montant
        };

        console.log(dataCreationFlux);

        try {
            const response = await axios.post('http://localhost:8081/api/flux/creerFlux', dataCreationFlux, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                console.log('Requête POST réussie');
                alert("Flux Créer")
            } else {
                console.error('Erreur lors de la requête POST');
            }
        } catch (error) {
            console.error('Erreur lors de la requête POST:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] creationMondalContainer">

                <label htmlFor="Month" className="block text-sm font-medium text-gray-900"> Month </label>
                <select
                    name="Month"
                    id="Month"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    value={mois}
                    onChange={(e) => setMois(e.target.value)}>

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

                <label htmlFor="Stream" className="block text-sm font-medium text-gray-900"> Stream </label>
                <select
                    name="Stream"
                    id="Stream"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    value={typeDeFlux}
                    onChange={(e) => setTypeDeFlux(e.target.value)}
                >
                    <option value="">Select Stream</option>
                    <option value="Recette">Recette</option>
                    <option value="Charge">Charge</option>
                </select>

                <label htmlFor="Libelle" className="block text-sm font-medium text-gray-900"> Libelle </label>
                <input
                    type="text"
                    id="Libelle"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Libelle"
                    value={libelle}
                    onChange={(e) => setLibelle(e.target.value)}
                />

                <label htmlFor="Montant" className="block text-sm font-medium leading-6 text-gray-900">
                    Montant
                </label>
                <input
                    type="text"
                    name="Montant"
                    id="Montant"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                />

                <br />

                <button type="submit" className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 creationMonthButton">
                    <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                        Submit
                    </span>
                </button>

            </div>
        </form>
    );
}

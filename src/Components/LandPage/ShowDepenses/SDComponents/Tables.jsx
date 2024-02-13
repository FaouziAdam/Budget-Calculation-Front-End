import './Tables.css';
import React from 'react'
import PropTypes from 'prop-types';

const monthNames = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

export default function Tables({dataAppBudget}) {
  return (
    <div className='tableDepensesContainer rounded-lg'>
      {dataAppBudget.map((appData) => (
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm" key={appData.mois}>
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-900 result" colSpan={2}>
                <strong>{monthNames[appData.mois - 1]}</strong>
              </th>
            </tr>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Label</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Amount</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200' >
            {appData.appFluxList.map((flux, index) => (
              <React.Fragment key={flux.id}>
                {index === 0 || flux.typeDeFlux !== appData.appFluxList[index - 1].typeDeFlux ? (
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dataRow" colSpan={2}>
                      <strong>{flux.typeDeFlux}</strong>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dataRow">{flux.libelle}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dataRow">{flux.montant}</td>
                </tr>
              </React.Fragment>
            ))}
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-900 dataRow result">Resultat</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-900 dataRow result">{appData.resultat}</td>
            </tr>
          </tbody>
        </table>
      ))}
        
    </div>
  )
}

Tables.propTypes = {
    dataAppBudget: PropTypes.arrayOf(PropTypes.shape({
      mois: PropTypes.number.isRequired,
      appFluxList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        mois: PropTypes.number.isRequired,
        typeDeFlux: PropTypes.string.isRequired,
        libelle: PropTypes.string.isRequired,
        montant: PropTypes.number.isRequired,
      })).isRequired,
      resultat: PropTypes.number.isRequired,
    })).isRequired,
  };
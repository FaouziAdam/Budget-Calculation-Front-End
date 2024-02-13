import './ShowDepenses.css';
import PropTypes from 'prop-types';
import Tables from './SDComponents/Tables';


export default function ShowDepenses({dataAppBudget}) {

  return (
    <div className='showDepensesContainer'>
      
      <Tables dataAppBudget={dataAppBudget}/>

    </div>
  )
}

ShowDepenses.propTypes = {
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
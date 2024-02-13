import CreationContent from './CMComponents/CreationContent';
import CreationModal from './CMComponents/CreationModal';
import './CreateMonth.css';

export default function CreateMonth() {
    return (
      <div className='createMonthContainer'>

        <div className="createMonthTutorial">
            <h1 className='text-3xl font-extrabold sm:text-5xl'>How to create your month streams & budget</h1><br />
            <p className='font-serif'>In order to calculate your budget, you need first to create your month streams :</p><br />
            <ol className='list-decimal'> 
                <li className='font-serif'>Select a month;</li>
                <li className='font-serif'>Select your stream type that can be wether -Recette- or -Charge- ;</li>
                <li className='font-serif'>Name it on your label input;</li>
                <li className='font-serif'>Right the amount;</li>
                <li className='font-serif'>Click on the submit button so you create your stream;</li>
            </ol><br />
            <p className='font-serif'>After creating all of your month streams, you can get to the second form, select the related month and then submit.
            Now you are able to get to the next section to see your depenses.</p><br />
        </div>  
        <div className='fieldCreation'>
        <CreationModal/>
        <CreationContent/>
        </div>
      </div>
    )
  
}

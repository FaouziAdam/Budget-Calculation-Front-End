import { Link } from 'react-router-dom';
import './SideBar.css';


export default function SideBar() {
  return (

    <div className='bg-slate-900 sideBarContainer'>

        <div className='sidBareChildren'>
            <p>
                <Link to={"/"}>Home</Link>
            </p>
        </div>

        <div className='sidBareChildren'>
            <p>
                <Link to={"/createMonth"}>Create Month</Link>
            </p>
        </div>

        <div className='sidBareChildren'>
            <p>
                <Link to={"/showDepenses"}>Show Depenses</Link>
            </p>
        </div>

        <div className='sidBareChildren'>
            <p>
                <Link to={"loanCalculation"}>Loan Calculation</Link>
            </p>
        </div>

    </div>
  )
}

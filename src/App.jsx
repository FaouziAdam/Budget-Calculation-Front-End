import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import Home from './Components/LandPage/Home/Home';
import ShowDepenses from './Components/LandPage/ShowDepenses/ShowDepenses';
import CreateMonth from './Components/LandPage/CreateMonth/CreateMonth';
import LoanCalculation from './Components/LandPage/LoanCalculation/LoanCalculation';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
    
    const [dataAppBudget, setDataAppBudget] = useState([]);
    
    useEffect(() => {
        handleGetDataAppBudget();
    }, []);
    
    const handleGetDataAppBudget = () => {
        axios
            .get("http://localhost:8081/api/budget/resultats")
            .then((resp) => {
                const dataAppBudget = resp.data;
                setDataAppBudget(dataAppBudget);
            })       
            .catch((err) => {
                console.log(err);
            })
    }

  return (
    <div className='mainContainer'>
    <BrowserRouter>
      <SideBar/>
      
{/* ========================================== Routes ======================================== */}

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/createMonth' element={<CreateMonth/>}></Route>
            <Route path='/showDepenses' element={<ShowDepenses dataAppBudget={dataAppBudget}/>}></Route>
            <Route path='/loanCalculation' element={<LoanCalculation/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

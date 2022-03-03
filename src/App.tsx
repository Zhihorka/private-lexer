import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './App.css';
import HashTableComponent from "./components/hashTable/HashTableComponent";
import FirstTask from "./components/firstTask/FirstTask";
import SecondTask from "./components/secondTask/SecondTask";

const App = () =>{

    const [step, setStep] = React.useState(1);


    return (
    <div className="App">
        <div className="navigation">
            <span onClick={()=>setStep(1)} className={step === 1 ? "activeItem" : "navigationItem"}>№1</span>
            <span onClick={()=>setStep(2)}  className={step === 2 ? "activeItem" : "navigationItem"}>№2</span>
            <span onClick={()=>setStep(3)}  className={step === 3 ? "activeItem" : "navigationItem"}>№3</span>
            <span onClick={()=>setStep(4)}  className={step === 4 ? "activeItem" : "navigationItem"}>№4</span>
        </div>
        { step === 1 ?
            (
           <FirstTask/>
            )
            :
            null
        }
        { step === 2 ?
            (
                <SecondTask/>
            )
            :
            null
        }
    </div>
  );
}

export default App;

import {createContext,useState,useEffect} from 'react';


const Context = createContext();


const MainContext = ({children}) => {
    const [PlusMoney,setPlusMoney] = useState(0);
    const [MinusMoney,setMinusMoney] = useState(0);
    const [History,setHistory] = useState([]);
    
    const increaseMoney = (money) => {
        setPlusMoney(PlusMoney + Number(money));
    }
    
    const decreseMoney = (money) => {
        setMinusMoney(MinusMoney + Math.abs(Number(money)));
    }
    
    const minCredit = (money) => {
        setPlusMoney(PlusMoney - Number(money));
    }
    
    const minDebit = (money) => {
        setMinusMoney(MinusMoney - Math.abs(Number(money)));
    }
    
    return (
        <Context.Provider value={{minCredit,minDebit,history:History,setHistory:setHistory,totalcredit:PlusMoney,totaldebit:MinusMoney,credit:increaseMoney,debit:decreseMoney}}>
            {children}
        </Context.Provider>
        
        );
}


export default MainContext;
export  {Context};

import MainCard from './comps/MainCard';
import Card from './comps/Card';
import {useContext,useState} from 'react';
import {Context} from './MainContext';
import uuid from './uuid';

const App = () => {
    
    const [value,setValue] = useState({
        title:"",
        ammount:""
    })
    
    const data = useContext(Context);
    const handleChange = (e) => {
        setValue({...value,[e.target.name]:e.target.value});
    }
    
    const addExpense = () => {
        let type = Math.sign(Number(value.ammount));
        if(type == 1){
            data.credit(value.ammount);
            data.setHistory([...data.history,{id:uuid(),title:value.title,ammount:value.ammount,type:"I"}]);
        }
        else{
            data.debit(value.ammount);
            data.setHistory([...data.history, {id:uuid(), title: value.title, ammount: value.ammount, type: "D" }]);
        }
        setValue({title:"",ammount:""});
    }
     
    return (
        <>
        <div className="sm:my-12 w-screen h-screen flex items-center justify-center">
        <div className="mx-auto w-full max-w-sm px-4">
        <h1 className="text-center font-bold text-4xl mt-4 mb-6">Expense Traker</h1>
          <MainCard/>  
         <h2 className="my-2 mt-3 text-2xl font-bold">History</h2>
         <hr/>
         {
             data.history.map(item => {
                 return <Card id={item.id} type={item.type} title={item.title} ammount={item.ammount}/>
             })
         }
         <div className="mt-4">
         <hr/>
         <input type="text" value={value.title} onChange={handleChange} name="title" placeholder="Title..." className="w-full p-3 rounded-md border-2 border-gray-900 mt-4 outline-none"/>
         <input type="Number" value={value.ammount} onChange={handleChange} name="ammount" placeholder="Expense With Type..." className="w-full p-3 rounded-md border-2 border-gray-900 mt-4 outline-none"/>
         <button type="button" onClick={addExpense} className="outline-none rounded-lg mt-4 w-full cursor-pointer bg-gray-900 text-white capitalize p-3">
           Track
         </button>
         </div>
        </div>
        </div>
        </>
    );
}

export default App;

import {useContext} from 'react';
import {Context} from '../MainContext';



const MainCard = () => {
    
    const data = useContext(Context);
    
    return (
        <>
         <h1 className="text-4xl text-green-600 capitalize font-bold">${data.totalcredit - data.totaldebit}</h1>
           <div className="shadow-lg rounded-lg p-4 mt-4 border-2 bg-white">
             <div className="flex items-center space-x-6 justify-between">
                <div>
                 <p className="capitalize">Credit</p>
                 <h2 className="font-bold text-2xl text-green-600 mt-2">${data.totalcredit}</h2>
                </div>
                <div>
                <p className="capitalize">debit</p>
                <h2 className="font-bold text-2xl text-red-600 mt-2">${data.totaldebit}</h2>
                </div>
             </div>
           </div>
         </>
    );
}

export default MainCard;

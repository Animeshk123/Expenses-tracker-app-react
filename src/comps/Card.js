import { useContext } from 'react';
import { Context } from '../MainContext';

const Card = (props) => {

    const data = useContext(Context);

    const clearHistory = () => {
        let newArray = data.history.filter(item => {
            return item.id != props.id;
        })
        data.setHistory(newArray);
        if(props.type == "I"){
            data.minCredit(props.ammount);
        }
        else{
            data.minDebit(props.ammount);
        }
    }



    return (
        <>
          <div className={`shadow-md p-3 mt-4 rounded-md  border-r-4 ${(props.type == "I") ? "border-green-600" : "border-red-600"} flex items-center justify-between bg-white`}>
          <div className="h-full flex flex-col justify-center">
               <h3 className="font-bold capitalize text-2xl">{props.title}</h3>
               <p className={`${(props.type == "I") ? "text-green-600":"text-red-600" }`}>${props.ammount}</p>
          </div>
          <div className="flex items-center justify-center cursor-pointer" onClick={clearHistory}>
           <img src="/close.svg" className='w-6 h-6'/>
          </div>
          
          </div>
        </>
    );
}

export default Card;

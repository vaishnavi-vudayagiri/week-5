import{useState} from"react";

function Counter(){
    const[count,setCount]=useState(0);
    const increament=()=>{
        setCount(count+1);
      
    };
    const decreament=()=>{
        setCount(count-1);
    };
    
    return (
        <div className="text-center p-10 border">
            <h1 className="text-7xl  ">Count:{count}</h1>
            <button onClick={(increament)} className="text-green-800 text-6xl "> + </button>
            <button onClick={(decreament)} className="text-red-600 text-6xl">-</button>
          
        </div>
    )
     
}
export default Counter;
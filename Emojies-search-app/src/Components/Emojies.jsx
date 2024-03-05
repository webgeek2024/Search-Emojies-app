import React, { useState } from "react";
import { emojis } from "./emojis";

const Emojies = () => {
    const [inp,setInp]=useState(emojis);
    const handleChange=(event)=>{
       const newValue=emojis.filter(item=>item.keywords.includes(event.target.value))
       setInp(newValue) 
    }
  return (
    <div className="bg-primary container mx-auto h-[100vh]">
      <div className="grid grid-cols-1 gap-5 text-center">
        <div className="mt-4 h-[150px]">
          <form>
            <label className="text-xs sm:text-xl font-bold p-2 mx-1"> Search Emojies</label>
        <input className=" w-48 h-10 sm:w-6/12 sm:h-16 p-4 rounded" onChange={handleChange}/>
          </form>
          {inp.map((face,index)=>{
            return <div key={index} className="grid grid-cols-2 mt-2 bg-secondary rounded text-xs sm:text-2xl">
                <div>{face.title}</div>
                <div>{face.symbol}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Emojies;

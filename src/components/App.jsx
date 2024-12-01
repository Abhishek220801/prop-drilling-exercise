import { useState } from "react";
import Card from "./Card";

const App = () => {
  const data = [
    {name: "Abhishek", profession: "Coder", image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Wakeel Khan", profession: "Lawyer", image: "https://images.unsplash.com/photo-1581092918484-8313ada2183a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Dakshiv", profession: "Chartered Accountant", image: "https://images.unsplash.com/photo-1581093686959-108b3114cc49?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "SK Sankhwar", profession:"Production Shift Engg.", image:"https://images.unsplash.com/photo-1580893206515-2fc3e8a2aa96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false}
  ];

  const [realData,setRealData] = useState(data);
  const handleClick = (changingIndex) => {
    setRealData((prev)=>{
      return prev.map((item,index)=>{
        if(index===changingIndex){
          return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realData.map((item,index)=>(
          // <Card image={item.image} name={item.name} profession={item.profession}/>
          <Card handleClick={handleClick} key={index} index={index} values={item}/>
        ))} 
      </div>
    </>
  )
}
export default App;
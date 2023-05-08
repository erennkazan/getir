import { useState, useEffect } from "react"
import cardsData from 'api/cards'
export default function Cards(){
    
    const [cards ,setCards] = useState([]);

    useState(()=>{
        setCards(cardsData);
    },[])

    return(
        <div className="grid grid-cols-3 gap-x-4 ">
           {cards.length && cards.map(card =>(
            <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col items-center">
                <img src={card.image}/>
                <h6>{card.title}</h6>
                <p>{card.description}</p>
            </div>
           ))}
        </div>
    )
}
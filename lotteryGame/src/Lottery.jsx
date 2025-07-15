import { useState } from "react";

import { genTicket } from "./helper";
import { sum } from "./helper";
import Ticket from './Ticket'
export default function Lottery({n=3,winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinner = winCondition(ticket);

    let handleClick = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
            </div>
            <button onClick={handleClick}>Generate Ticket</button>
            <h3>{isWinner && "Congats"}</h3>
           
        </div>
    );
}

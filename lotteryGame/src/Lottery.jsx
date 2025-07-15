import { useState } from "react";
import './Lottery.css';
import { genTicket } from "./helper";
import { sum } from "./helper";
export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinner = sum(ticket)===15;

    let handleClick = () => {
        setTicket(genTicket(3));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={handleClick}>Generate Ticket</button>
            <h3>{isWinner && "Congats"}</h3>
           
        </div>
    );
}

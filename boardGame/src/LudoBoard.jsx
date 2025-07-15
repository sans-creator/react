import { useState } from 'react';

export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr,setarr]=useState(["no moves"])

  const updateMove = (color) => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1,
    }));
    arr.push(color);
    setarr(arr);
    console.log(arr);
  };

  return (
    <div>
      <p>Game begins</p>
      <div className="board">
        <p>Blue Moves: {moves.blue}</p>
        <button onClick={() => updateMove("blue")} className="btn" style={{backgroundColor:"blue"}}>+1</button>

        <p>Yellow Moves: {moves.yellow}</p>
        <button onClick={() => updateMove("yellow")} className="btn" style={{backgroundColor:"yellow"}}>+1</button>

        <p>Green Moves: {moves.green}</p>
        <button onClick={() => updateMove("green")} className="btn" style={{backgroundColor:"green"}}>+1</button>

        <p>Red Moves: {moves.red}</p>
        <button onClick={() => updateMove("red")} className="btn" style={{backgroundColor:"red"}}>+1</button>
      </div>
    </div>
  );
}

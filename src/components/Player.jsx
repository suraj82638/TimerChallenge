import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playerName = useRef();


  const clickHandler = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}

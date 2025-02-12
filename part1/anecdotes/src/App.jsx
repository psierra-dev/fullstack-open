import {useState} from "react";
import Anecdote from "./components/Anecdote";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const most_votes = Math.max(...points);
  const most_votes_index = points.findIndex((value) => value === most_votes);
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote content={anecdotes[selected]} votes={points[selected]} />

      <div>
        <button
          onClick={() => {
            const copy = [...points];
            copy[selected] += 1;
            setPoints(copy);
          }}
        >
          vote
        </button>
        <button
          onClick={() => {
            const num = Math.floor(Math.random() * 8);
            setSelected(num);
          }}
        >
          next anecdote
        </button>
      </div>

      <h2>Anecdote with most votes</h2>
      <Anecdote content={anecdotes[most_votes_index]} votes={most_votes} />
    </div>
  );
}

export default App;

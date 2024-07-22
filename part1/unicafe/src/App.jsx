import {useState} from "react";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>given feedback</h2>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <div>
        <h2>Statistics</h2>
        <Statistics value_good={good} value_neutral={neutral} value_bad={bad} />
      </div>
    </div>
  );
}

export default App;

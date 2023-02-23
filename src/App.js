import { useState, useEffect } from "react";
import randomWords from "random-words";

const Num_of_words = 200;
const Seconds = 5;

function App() {
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(Seconds);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  function generateWords() {
    return new Array(Num_of_words).fill(null).map(() => randomWords());
  }

  function start() {
    let interval = setInterval(() => {
      setCountDown((prevCountdown) => {
        if (prevCountdown === 0) clearInterval(interval);
        else return prevCountdown - 1;
      });
    }, 1000);
  }
  return (
    <div className="App">
      {/* {JSON.stringify(words)} */}
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-primary">
          <h2>{countDown}</h2>
        </div>
      </div>
      <div className="conrtol is-expanded section">
        <input type="text" className="input" />
      </div>
      <div className="section">
        <button className="button is-info is-fullwidth" onClick={start}>
          Start
        </button>
      </div>
      <div className="section">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {words.map((word, i) => (
                <>
                  <span>{word}</span>
                  <span> </span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

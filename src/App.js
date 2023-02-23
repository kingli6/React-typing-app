import { useState, useEffect } from "react";
import randomWords from "random-words";

const NUM_OF_WORDS = 200;
const SECONDS = 60;

function App() {
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(SECONDS);
  const [currentInput, setCurrentInput] = useState("");
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");

  useEffect(() => {
    setWords(generateWords());
  }, []);

  function generateWords() {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords());
  }

  function start() {
    if (status === "finished") {
      setWords(generateWords());
      setCurrWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
    }
    if (status !== "started") {
      setStatus("started");
      let interval = setInterval(() => {
        //set countdown needs to return timestamp 43:17
        setCountDown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval);
            setStatus("finished");
            return SECONDS;
          } else return prevCountdown - 1;
        });
      }, 1000);
    }
  }

  function handleKeyDown({ keyCode }) {
    //keyCode, we are deconstructing the event 28:55?
    //space bar
    if (keyCode === 32) {
      checkMatch();
      setCurrentInput(""); //clears the input field when pressed space
      setCurrWordIndex(currWordIndex + 1);
    }
  }

  function checkMatch() {
    const wordToCompare = words[currWordIndex];
    const doesItMatch = wordToCompare === currentInput.trim(); //true or false
    // console.log({ doesItMatch });
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
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
        <input
          disabled={status !== "started"}
          type="text"
          className="input"
          onKeyDown={handleKeyDown}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
        />
      </div>
      <div className="section">
        <button className="button is-info is-fullwidth" onClick={start}>
          Start
        </button>
      </div>
      {/* //ADded a logic gate! */}
      {status === "started" && (
        <div className="section">
          <div className="card">
            <div className="card-content">
              <div className="content">
                {words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span key={idx}>{char}</span>
                      ))}
                    </span>
                    <span> </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {status === "finished"} && ({" "}
      <div className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <p className="is-size-5">Words per minute:</p>
            <p className="has-text-primary is-size-l">{correct}</p>
          </div>
          <div className="column has-text-centered">
            <div className="is-size-5">Accuracy :</div>
            <p className="has-text-info is-size-1">
              {Math.round((correct / (correct / (correct + incorrect))) * 100)}{" "}
              %
            </p>
          </div>
        </div>
      </div>
      ){/* //Last div */}
    </div> //Last div
  );
}

export default App;

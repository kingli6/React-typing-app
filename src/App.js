import {useState, useEffect} from 'react';
import randomWords from 'random-words';

const Num_of_words = 200;
const Seconds = 60;

function App() {
  const [words, setWords] = useState([]);
  useEffect(() =>{
    setWords(generateWords())
  }, []);

  function generateWords() {
    return new Array(Num_of_words).fill(null).map(() => randomWords())
  }
  return (
    <div className="App">
      {/* {JSON.stringify(words)} */}
      <div className="conrtol is-expanded section">
        <input type="text" className="input" />
      </div>
      <div className="section">
        <button className="button is-info is-fullwidth">
          Start
        </button>
      </div>
      <div className='section'>
        <div className="card">
          <div className="card-content">
            <div className="content">
              {words.map((word, i)=>(
                <>
                <span>
                  {word}
                </span>
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

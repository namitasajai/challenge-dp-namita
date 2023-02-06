import './App.css';
import React, { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
import Data from './data.json';
import Typewriter from 'typewriter-effect';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [answered, setAnswered] = useState(0);
  const [displayResults, setDisplayResults] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      {/* 1. Header */}
      <h1 id="title"><Typewriter
        options={{
          strings: ['Quiz: Do Your Parents Miss You or Do They Just Feel Obligated to Talk to You?', 'Quiz: Do Your Parents Hate You?', 'Quiz: Do You Hate Your Parents?'],
          autoStart: true,
          loop: true,
        }}
      />
      </h1>
      {/* <h2> BY JOSH CAMPBELL
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h3>{time}</h3>
      </h2> */}
      <div class="questions">
        <div class="question-card">
          <h2> CONGRATULATIONS! </h2>
          <div> Insert Result </div>

        </div>
      </div>

      {/* 2. Question Cards */}
      <div class="questions">
        {Data.questions.map(({ prompt, options }) => (
          <QuestionCard title={prompt} answerChoices={options} />
        ))}
      </div>
    </div>
  );
}

export default App;

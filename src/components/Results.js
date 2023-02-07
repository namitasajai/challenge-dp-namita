import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../states/questionSlice.ts';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
import Data from '../data.json';


const Results = (props) => {
    const dispatch = useDispatch();
    const choices = useSelector((state) => state.question.totalChoices);

    // Counting the choices
    const choiceCounts = {}

    for (const prompt in choices) {
        let chosen = choices[prompt]
        if (!(chosen in choiceCounts)) {
            choiceCounts[chosen] = 1;
        } else {
            choiceCounts[chosen] += 1;
        }
    }

    // Most Chosen:
    const mostFrequent = Object.keys(choiceCounts).reduce((a, b) => choiceCounts[a] > choiceCounts[b] ? a : b);

    // Assuming that all answer choices are letters, finding the index of what that letter is
    const index = mostFrequent.toUpperCase().charCodeAt(0) - 65;

    const resultText = Data.results[index]
    const onClick = () => {
        dispatch(clear({ choices }));
    }

    return (
        <div className="App">
            {/* 1. Header */}
            <h1 id="title"><Typewriter
                options={{
                    strings: ['Congratulations!', 'Your Results Are In!'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </h1>
            <div className="questions">
                <div className="question-card" style={{ padding: '30px' }}>
                    <div> {resultText} </div>
                    <Link to="/" onClick={onClick} style={{ textDecoration: 'none' }} >
                        <div className="choice" id="retakeBtnDiv" style={{ marginTop: '20px' }}>
                            <b id="retakeBtn">Retake quiz</b>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Results;
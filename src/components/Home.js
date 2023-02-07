import React from 'react';
import QuestionCard from './QuestionCard';
import Data from '../data.json';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const choices = useSelector((state) => state.question.totalChoices);

    return (
        <div className="App">
            {/* 1. Header */}
            <h1 id="title">
                <Typewriter options={{
                    strings: ['Quiz: Do Your Parents Miss You or Do They Just Feel Obligated to Talk to You?', 'Quiz: Do Your Parents Hate You?', 'Quiz: Do You Hate Your Parents?'],
                    autoStart: true,
                    loop: true,
                }} />
            </h1>
            {/* 2. Question Cards */}
            <div className="questions">
                {Data.questions.map(({ prompt, options }) => (
                    <QuestionCard title={prompt} answerChoices={options} />
                ))}
            </div>

            {/* 3. Submit Button */}
            {Object.keys(choices).length === Data.questions.length ? (
                <Link to="/results" style={{ textDecoration: 'none' }} >
                    <div className="choice" id="submit">
                        <b id="submit" >Show me my results!</b>
                    </div>
                </Link>
            ) : (
                <div className="choice" id="submit">
                    <button disabled><b> Show me my results!</b></button>
                </div>
            )}

        </div>
    );
}

export default Home;
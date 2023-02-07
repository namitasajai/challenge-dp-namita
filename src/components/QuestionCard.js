import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../states/questionSlice.ts'; 

const QuestionCard = (props) => {
    const answerChoices = props.answerChoices;
    const dispatch = useDispatch(); 
    const currentChoice = useSelector((state) => state.question.totalChoices[props.title]);

    const Click = (k) => {
        dispatch(setAnswer({prompt: props.title, choice: k})); 
    }

    useEffect(() => {

    }, [currentChoice])

    return (
        <li className="question-card">
            <div id="prompt"><b>{props.title}</b></div>
            <ul>
                {Object.entries(answerChoices).map(([key, value]) => (
                    <li className={(key === currentChoice)? "choice-selected" : "choice"} key={key} onClick={() => Click(key)}>
                        {value}
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default QuestionCard;
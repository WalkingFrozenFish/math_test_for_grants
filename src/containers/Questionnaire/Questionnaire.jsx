import React, {useEffect, useState} from 'react'
import './Questionnaire.css'
import QuestionItem from '../../components/QuestionItem/QuestionItem'
import {questions} from "../../constants/questions";
import Timer from "../../components/Timer/Timer";


const Questionnaire = (props) => {

    const [answers, setAnswers] = useState(Object.assign({}, [...Array(questions.length)].map(() => '')))

    const changeHandler = (e) => {
        const {name, value} = e.target
        setAnswers(prevState => {
            return {...prevState, [name]: value}
        })
    }

   

    useEffect(() => {
        const answersStorage = JSON.parse(localStorage.getItem('att_ans') || '{}')
        if (answersStorage['1']) {
            Object.keys(answersStorage).forEach((key) => {
                setAnswers(prevState => {
                    return {...prevState, [key]: answersStorage[key]}
                })
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('att_ans', JSON.stringify(answers))
    }, [answers])

    const sendData = () => {
        const data = {
            answers,
            name: JSON.parse(localStorage.getItem('us_inf'))['name'],
            surname: JSON.parse(localStorage.getItem('us_inf'))['surname']
        }
        console.log(data)
    }

    return (
        <div className={'Questionnaire'}>
            <Timer
                stop={props.stop}
            />
            {questions.map((el, i) => {
                return <QuestionItem
                    key={i}
                    number = {i + 1}
                    image ={el.image}
                    question_text ={el.question_text}
                    name ={el.name}
                    change = {changeHandler}
                    value={answers[el.name]}
                />
            })}
            <div>
                <button onClick={sendData} className={'Questionnaire__button'}>SEND</button>
            </div>
        </div>
    )
}


export default Questionnaire
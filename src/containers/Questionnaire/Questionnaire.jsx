import React, {useEffect, useState} from 'react'
import './Questionnaire.css'
import QuestionItem from '../../components/QuestionItem/QuestionItem'
import {questions} from "../../constants/questions";
import Timer from "../../components/Timer/Timer";
import axios from "axios";


const Questionnaire = (props) => {

    const [answers, setAnswers] = useState(Object.assign({}, [...Array(questions.length)].map(() => '')))

    useEffect( () => {
        const answersStorage = JSON.parse(localStorage.getItem('att_ans')) || answers
        setAnswers(answersStorage)
    }, [])

    const changeHandler = (e) => {
        const {name, value} = e.target
        setAnswers(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const saveDataToLs = () => {
        localStorage.setItem('att_ans', JSON.stringify(answers))
    }

    const sendData = async() => {
        try {
            const data = {
                answers,
                name: JSON.parse(localStorage.getItem('us_inf'))['name'],
                surname: JSON.parse(localStorage.getItem('us_inf'))['surname']
            }
            await axios.post('http://167.235.52.163:8000/results', data , {
                headers: {
                    'ApiKey': 'jx4tNjQkG8VhNL16'
                }
            })
            alert('Ответы отправлены удачно!')
            props.stop()
        } catch(err) {
            console.log(err)
        }

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
                    keyup = {saveDataToLs}
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
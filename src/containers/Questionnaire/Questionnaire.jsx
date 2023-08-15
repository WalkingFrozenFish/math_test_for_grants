import React, {useEffect, useState} from 'react'
import './Questionnaire.css'
import QuestionItem from '../../components/QuestionItem/QuestionItem'
// import {questions} from "../../constants/questions";
import Timer from "../../components/Timer/Timer";
// import axios from "axios";


const Questionnaire = (props) => {

    // const [answers, setAnswers] = useState(Object.assign({}, [...Array(questions.length)].map(() => '')))

    useEffect(() => {
        const answersStorage = JSON.parse(localStorage.getItem('att_ans')) || answers
        setAnswers(answersStorage)
    }, [])

    const saveToLS = () => {
        localStorage.setItem('att_ans', JSON.stringify(answers))
    }

    const sendData = async () => {
        try {
            console.log("Data send")
            // const data = {
            //     answers,
            //     name: JSON.parse(localStorage.getItem('us_inf'))['name'],
            //     surname: JSON.parse(localStorage.getItem('us_inf'))['surname']
            // }
            // await axios.post('http://167.235.52.163:8000/results', data , {
            //     headers: {
            //         'ApiKey': 'jx4tNjQkG8VhNL16'
            //     }
            // })
            // alert('Ответы отправлены удачно!')
            // props.stop()
        } catch (err) {
            console.log(err)
        }

    }


    const [questions] = useState([
        {
            questionNumber: 1,
            questionDescription: "Question description 1",
            image: null,
            // answersData: [
            //     {
            //         answerId: 1,
            //         answerValue: "SomeValue1",
            //         answerDescription: "Some answer descr 1"
            //     },
            //     {
            //         answerId: 2,
            //         answerValue: "SomeValue2",
            //         answerDescription: "Some answer descr 2"
            //     },
            //     {
            //         answerId: 3,
            //         answerValue: "SomeValue3",
            //         answerDescription: "Some answer descr 3"
            //     },
            // ]
        },
        {
            questionNumber: 2,
            questionDescription: "Question description 2",
            image: "images/13_14.png",
            answersData: [
                {
                    answerId: 4,
                    answerValue: "SomeValue1",
                    answerDescription: "Some answer descr 1",
                    selected: false
                },
                {
                    answerId: 5,
                    answerValue: "SomeValue2",
                    answerDescription: "Some answer descr 2",
                    selected: false
                },
                {
                    answerId: 6,
                    answerValue: "SomeValue3",
                    answerDescription: "Some answer descr 3",
                    selected: false
                },
            ]
        },
        {
            questionNumber: 3,
            image: null,
            questionDescription: "Question description 3",
            answersData: [
                {
                    answerId: 7,
                    answerValue: "SomeValue1",
                    answerDescription: "Some answer descr 1",
                    selected: false
                },
                {

                    answerId: 8,
                    answerValue: "SomeValue2",
                    answerDescription: "Some answer descr 2",
                    selected: false
                },
                {
                    answerId: 9,
                    answerValue: "SomeValue3",
                    answerDescription: "Some answer descr 3",
                    selected: false
                },
            ]
        }
    ])

    const [answers, setAnswers] = useState(Object.assign({}, [...Array(questions.length)].map(() => '')))


    const changeHandler = (e) => {
        const {name, value} = e.target

        setAnswers(prevState => {
            return {...prevState, [name - 1]: value}
        })

        saveToLS()
    }

    return (
        <div className={'Questionnaire'}>
            <Timer
                stop={props.stop}
            />

            {questions.map((item, index) => {
                return <QuestionItem
                    key={index}
                    questionNumber={item.questionNumber}
                    image={item.image}
                    questionDescription={item.questionDescription}

                    answerData={item.answersData}

                    keyup={saveToLS}
                    changeHandler={changeHandler}

                    value={answers[item.questionNumber]}
                />
            })}

            <div>
                <button onClick={sendData} className={'Questionnaire__button'}>SEND</button>
            </div>
        </div>
    )
}

export default Questionnaire


const questionData = {
    questionNumber: 3,
    image: null,
    questionDescription: "Question description 3",
    answersData: [
        {
            answerId: 7,
            answerValue: "SomeValue1",
            answerDescription: "Some answer descr 1",
            selected: false
        },
        {
            answerId: 8,
            answerValue: "SomeValue2",
            answerDescription: "Some answer descr 2",
            selected: false
        },
        {
            answerId: 9,
            answerValue: "SomeValue3",
            answerDescription: "Some answer descr 3",
            selected: false
        },
    ]
}






















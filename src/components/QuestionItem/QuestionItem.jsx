import React from 'react'
import './QuestionItem.css'


const QuestionItem = (props) => {
    return (
        <div className='QuestionItem'>
            <h2 className='QuestionItem__number'>{props.number}</h2>
            <div className='QuestionItem__imageFrame'>
                {props.image ? <img className='QuestionItem__image' src={props.image} alt="question_image"/> : ''}
            </div>
            <p className='QuestionItem__text' dangerouslySetInnerHTML={{__html:props.question_text}}/>
            <input onKeyUp={props.keyup} placeholder={'Your answer'} value={props.value} className='QuestionItem__input' name={props.name} onChange={props.change} type="text"/>
        </div>
    )
}


export default QuestionItem
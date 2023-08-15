import styles from './QuestionItem.module.css'

const QuestionItem = (props) => {
    return (
        <div className={styles.questionItem}>
            <h2 className={styles.questionNumber}>{props.questionNumber}</h2>

            {
                props.image ?
                    <div className={styles.imageFrame}>
                        <img className={styles.image} src={props.image} alt="Question image"/>
                    </div>
                    : null
            }

            <p className={styles.questionDescription} dangerouslySetInnerHTML={{__html: props.questionDescription}}/>

            {
                props.answerData ?
                    props.answerData.map((item, index) => {
                        return <AnswerItem key={index}
                                           changeHandler={props.changeHandler}
                                           groupName={props.questionNumber}
                                           answerId={item.answerId}
                                           answerValue={item.answerValue}
                                           answerDescription={item.answerDescription}
                        />
                    }) :
                    <input onKeyUp={props.keyup}
                           placeholder={"Ваш ответ"}
                           value={props.value}
                           className={styles.input}
                           name={props.questionNumber}
                           onChange={props.changeHandler}
                           type="text"
                    />
            }
        </div>
    )
}

const AnswerItem = (props) => {
    return (
        <div className="AnswerItem">
            <input
                type="radio"
                name={props.groupName}
                id={props.answerId}
                value={props.answerValue}
                onChange={props.changeHandler}
            />
            <label htmlFor={props.answerId}>{props.answerDescription}</label>
        </div>
    )
}

export default QuestionItem
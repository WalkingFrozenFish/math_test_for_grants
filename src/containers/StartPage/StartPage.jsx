import React, {useState} from 'react'
import './StartPage.css'


const StartPage = (props) => {
    const [userData, setUserData] = useState({
        name: '',
        surname: ''
    })

    const changeHandler = (e) => {
        const {name, value} = e.target
        setUserData(prevState => {
            return {...prevState, [name]: value}
        })
    }
    const saveName = () => {
        localStorage.setItem('us_inf', JSON.stringify(userData))
    }
    return (
        <div className={'StartPage'}>
            <input onKeyUp={saveName} onChange={changeHandler} name={'name'} className={'StartPage__input'} type="text" placeholder={'Name'}/>
            <input onKeyUp={saveName} onChange={changeHandler} name={'surname'} className={'StartPage__input'} type="text" placeholder={'Surname'}/>
            <button disabled={userData.name === '' || userData.surname === ''} onClick={props.click} className={'StartPage__button'}>START</button>
        </div>
    )
}


export default StartPage
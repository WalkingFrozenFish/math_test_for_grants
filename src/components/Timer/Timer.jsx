import React, {useEffect, useState} from "react";
import './Timer.css'
import axios from "axios";

const defaultMinutes = 30
const defaultMilliseconds = defaultMinutes * 60 * 1000
let milliseconds = parseInt(localStorage.getItem('att_mill') || defaultMilliseconds + '')
let interval = null

window.addEventListener('load', () => {
    localStorage.setItem('att_mill', (milliseconds - 1000) + '')
})


const Timer = (props) => {

    if (milliseconds <= 0) {
        props.stop()
    }
    const min = Math.max(Math.floor(milliseconds / 60 / 1000), 0)
    const sec = Math.max(milliseconds / 1000 % 60, 0)

    const [minutes, setMinutes] = useState(min < 10 ? '0' + min : min)
    const [seconds, setSeconds] = useState(sec < 10 ? '0' + sec : sec)


    useEffect(() => {
        interval = setInterval(async () => {
            milliseconds -= 1000
            const min = Math.floor(milliseconds / 60 / 1000)
            setMinutes(min < 10 ? '0' + min : min)
            const sec = milliseconds / 1000 % 60
            setSeconds(sec < 10 ? '0' + sec : sec)
            localStorage.setItem('att_mill', milliseconds)
            if (milliseconds <= 0) {
                try {
                    console.log("End time")
                    // const data = {
                    //     answers: JSON.parse(localStorage.getItem('att_ans')),
                    //     name: JSON.parse(localStorage.getItem('us_inf'))['name'],
                    //     surname: JSON.parse(localStorage.getItem('us_inf'))['surname']
                    // }
                    // await axios.post('http://167.235.52.163:8000/results', data , {
                    //     headers: {
                    //         'ApiKey': 'jx4tNjQkG8VhNL16'
                    //     }
                    // })
                } catch (err) {
                    console.log(err)
                }
                setMinutes('00')
                setSeconds('00')
                props.stop()
                clearInterval(interval)
                localStorage.setItem('att_mill', '0')
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={'Timer'}>
            <span className={'Timer__text'}>{minutes}</span><span className={'Timer__text'}>:</span><span
            className={'Timer__text'}>{seconds}</span>
        </div>
    )
}

export default Timer
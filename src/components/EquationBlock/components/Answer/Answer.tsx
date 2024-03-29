import Button from '@/ui/Button/Button'
import React from 'react'
import InputMask from 'react-input-mask'
import style from './Answer.module.scss'
import { useCheckAnswer } from '../hooks/useCheckAnswer'

const Answer = () => {
    const checkAnswer = useCheckAnswer()

    return (
        <div className={style['answer-block']}>
            <InputMask
                id='answer-input'
                className={style['answer-block__answer']}
                mask={'x=999'}
                alwaysShowMask
                maskChar={''}
            />
            <Button
                className={style['answer-block__check-btn']}
                onClick={checkAnswer}
                variant='styleless'
                text='Check'
            />
        </div>
    )
}

export default Answer

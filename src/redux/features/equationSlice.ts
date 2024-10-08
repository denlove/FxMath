import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { renderEquation } from '@/components/EquationBlock/utils/generateEquation'

interface IEquationInfo {
    answer: number | string | null
    equation: string | null
    isRight: boolean
}
interface IInitialState extends IEquationInfo {
    previous: IEquationInfo
}

const initialState = {
    answer: null,
    equation: null,
    isRight: false,
    previous: {
        answer: null,
        equation: null,
        isRight: false,
    },
} as IInitialState

const equationSlice = createSlice({
    name: 'equation',
    initialState,
    reducers: {
        generateEquation: state => {
            return { ...renderEquation(), previous: state }
        },
        checkAnswer: (state, { payload }: PayloadAction<number>) => {
            if (state.answer === payload) {
                state.isRight = true
            } else state.isRight = false
        },
        previousEquation: state => {
            if (state.previous.equation) {
                state.answer = state.previous.answer
                state.equation = state.previous.equation
                state.isRight = state.previous.isRight
            }
        },
    },
})

export const { generateEquation, checkAnswer, previousEquation } =
    equationSlice.actions
export default equationSlice.reducer

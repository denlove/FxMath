import { HTMLProps, ReactNode } from 'react'
import styled from 'styled-components'
import {
    bigButtonStyle,
    primaryButtonStyle,
    secondaryButtonStyle,
} from './styles'
import { flexCentralize } from '../../styles/templates'

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    children?: ReactNode
    className?: string
    type?: 'button' | 'reset' | 'submit' | undefined
    disabled?: boolean
    variant: 'primary' | 'secondary'
    text: string
}

const StyledButton = styled.button<IButtonProps>`
    ${flexCentralize}
    cursor: pointer;
    border-radius: var(--radius-10);
    font-family: var(--ff-L);
    font-weight: normal;

    ${({ variant }) =>
        variant === 'primary' ? primaryButtonStyle : secondaryButtonStyle}

    ${({ className }) => className === 'big' && bigButtonStyle}
`

const Button = ({
    children,
    className,
    type = 'button',
    disabled,
    variant,
    ref,
    as,
    ...props
}: IButtonProps) => {
    return (
        <StyledButton
            className={className}
            type={type}
            disabled={disabled}
            variant={variant}
            {...props}
        >
            {props.text}
            {children}
        </StyledButton>
    )
}

export default Button

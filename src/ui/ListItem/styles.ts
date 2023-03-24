import { css } from "styled-components";

const navItemsStyle = css`
    white-space: nowrap;
    font-size: var(--fs-18);
    font-family: Lato;
    font-weight: normal;
    color: var(--secondary-text-color);

    & a {
        transition: all 0.1s linear;
        text-decoration: none;

        &:visited {
            color: var(--secondary-text-color);
        }
        &:active,
        &:hover {
            color: var(--first-text-color);
        }
    }
`

export {
    navItemsStyle,
}

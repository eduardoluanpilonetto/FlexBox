import styled from "styled-components";

export const Content = styled.form`

    width: 80%;
    margin: 0 auto;
    
    h1{
        color: var(--white);

        span{
            color: var(--yellow);
        }
    }

    display: flex;
    align-items: left;
    justify-content: left;
`

export const Conteiner = styled.form`
    background: var(--background);
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
`
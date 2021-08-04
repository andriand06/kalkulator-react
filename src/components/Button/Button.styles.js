import styled from 'styled-components'

export const Wrapper = styled.button`
    background-color: #4d4d4d;
    color:white;
    border:none;
    outline:1px solid black;
    border-radius:0.3125rem;
    position:relative;
    height: 65px;
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    cursor:default;
    width: 80px;
    &:hover{
        color:black;
        outline: 0.05em solid grey;
    }
`;

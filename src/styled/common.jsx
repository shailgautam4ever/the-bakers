import { styled } from "styled-components";



export const Flex = styled.div`
    display: flex;
    gap: 1rem;
    ${p=>p.wrap? 'flex-wrap: wrap;':''}
    ${p=>p.ai? `align-items: ${p.ai};`:''}
    ${p=>p.jc? `justify-content: ${p.jc};`:''}


    
`

export const Input = styled.input`
    border: none;
    background-color: #f1f1f1;
    width: 17rem;
    outline: none;
    font-size: 14px; 
`

export const Col = styled(Flex)`
    flex-direction: column;
    gap: 0px;
    align-items: center;
    
`
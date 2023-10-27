import { styled } from "styled-components";
import { Flex } from "../../styled/common";
import { useState } from "react";
import {RxCross2} from 'react-icons/rx'

const Modal = ({ open=false, onCancel, children })=>{
    return(

        (open) ?
       <ModalContainer>
        <RxCross2 onClick={onCancel}/>
        <div>
        {
            children
        }
        </div>
       </ModalContainer> 
       : null
    )
}

export default Modal;

const ModalContainer = styled.div`
    display: flex;
    border: 2px solid #f1f1f1;
    /* box-shadow: 1px 1px 4px 3px #f1f1f1; */
    border-radius: 8px;
    padding: 10px;
    max-height: 600px;
    overflow-y: scroll;
    min-width: 800px;
    max-width: 90%;
    position: absolute;
    z-index: 2;
    /* top: 20%; */
    background-color: white;
    /* left: 17%; */

    top: 50%;
    left: 15%;
    right: 15%;
    /* margin: auto; */
    transform: translateY(-50%);
    @media screen and (max-width:1200px){
        left: 10%;
        right: 10%;
    }
    @media screen and (max-width:850px){
        min-width: 100px;
        left: 5%;
        right: 5%;
    }
    svg {
        position: absolute;
        right: 10px;
        cursor: pointer;
        padding: 5px;
        transition: all 0.1s 0s ease-in-out;

        
        &:hover{
            transform : scale(1.4) ;
            background-color: #eee;
            border-radius: 10px;
        }
    }
`
import React from "react";
import styled from "styled-components";

export const Menu = () => {
    return <UlMenu>
        <ListA><a href="">Home</a></ListA>
        <ListA><a href="">Work</a></ListA>
        <ListA><a href="">Contact</a></ListA>
    </UlMenu>

}


export const UlMenu = styled.ul`
   display: flex;
   
   @media screen and (max-width:768px) {
    display: none;
   }
`;
export const ListA = styled.li`
    color: #DEDEDE;
    font-size:18px;
    margin-right:55px;
    font-weight: 700;
    letter-spacing: -0.5px;

    a {
        color: #DEDEDE;
        transition: 0.3s ease-in all;
    }
    &:last-child{
        margin: 0;
    }
    &:hover a{
        color: #9D9D9D;
    }
`;
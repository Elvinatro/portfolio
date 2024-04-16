import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () => {
    return <StyledLogo href="#">
        <Icon iconId={"code"} />
        Logo Here
    </StyledLogo>
}


const StyledLogo = styled.a`
   font-size: 20px;
   color: white;
   font-weight: 800;
   display: flex;
   align-items: center;
   gap: 12px;
   transition: 0.25s ease-in all;
   
   &:hover {
    color: #9D9D9D;
   }

   svg {
    fill: currentColor
   }
   
   @media screen and (max-width:1028px) {
    gap: 12px;
    font-size: 23px;
   }   
`;



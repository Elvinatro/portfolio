import React from "react"
import styled from "styled-components";
import { Button } from "../../../../../components/button/Button";

export const InfoBox = () => {
    return <InfoBoxWrapper>

        <InfoText>Hi, I am Your Name
            A Product Designer
            based in City.</InfoText>
        <InfoText2>I help businesses and companies reach
            their goals by designing user-centric digital
            products & interactive experiences.</InfoText2>
        <Button />

    </InfoBoxWrapper>
}

const InfoBoxWrapper = styled.div`
  max-width: 60%;
   @media screen and (max-width:1028px ) {
   max-width: 55%;
   }
   @media screen and (max-width: 768px) {
    max-width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   text-align: center;
   }
   @media screen and (max-width:480px ) {
    max-width: 380px;
    h1{
        width: 100%;
        font-size: 36px;
        line-height: 40px;
    }
   }
`;
const Cont = styled.div`
   @media screen and (max-width:1028px ) {
   width: 100%;
   text-align: center;
   display: flex;
   align-items: center;
   }
`;
const InfoText = styled.h1`
   color: #DEDEDE;
   font-size: 54px;
   font-weight: 700;
   line-height: 64px;
   margin-bottom: 25px;
   letter-spacing: -0.5px;
   width: 68%;
`;
const InfoText2 = styled.p`
   color:#959595 ;
   font-size: 20px;
   letter-spacing: -0.5px;
   line-height: 30px;
   font-weight: 600;
   width: 53%;
   margin-bottom: 85px;
   
   @media screen and (max-width:480px ) {
        width: 100%;
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 50px;
   }
`;
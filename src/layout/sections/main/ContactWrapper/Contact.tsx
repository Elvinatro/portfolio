import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/button/Button";


export const ContactWrapper = () => {
    return (
        <Wrapper>
            <InfoBox>
                <h2>Contact Me</h2>
                <InfoText2>If you are looking to hire a product designer,
                    I’m currently available for freelance work
    
                </InfoText2>
                <Button />
            </InfoBox>
        </Wrapper>
    );
}


const Wrapper = styled.section`
    background-color: #202020;
    padding: 150px 0;
    h2{
        text-align: center;
        margin-bottom: 50px;
        color: #DEDEDE;
        font-size: 36px;
        font-weight: 700;
        @media screen and (max-width:480px) {
        font-size: 28px;
        margin-bottom: 20px;
   }
    }
    
`

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const InfoText2 = styled.p`
   max-width: 400px;
   color:#959595 ;
   font-size: 20px;
   letter-spacing: -0.5px;
   line-height: 30px;
   font-weight: 600;
   text-align: center;
   margin-bottom: 50px;
   @media screen and (max-width:480px) {
    width: 70%;
    font-size: 18px;
    margin-bottom: 35px;
   }
`;
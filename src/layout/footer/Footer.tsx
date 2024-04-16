import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/container/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SocialList>
                    Made by Your Name — Copyright 2021
                    <SocialIconLink>
                        <StyledIcon>
                            <Icon iconId={"whatsapp"} />
                        </StyledIcon>

                        <StyledIcon>
                            <Icon iconId={"globe"} />
                        </StyledIcon>

                        <StyledIcon>
                            <Icon iconId={"linkedin"} />
                        </StyledIcon>

                        <StyledIcon>
                            <Icon iconId={"twitter"} />
                        </StyledIcon>

                        <StyledIcon>
                            <Icon iconId={"be"} />
                        </StyledIcon>

                    </SocialIconLink>
                </SocialList>
            </Container>
        </StyledFooter>
    );
}
const StyledIcon = styled.a`
   color: #959595;
   &:hover{
    color: white;
   }
   svg{
    fill: currentColor
   }
`


const StyledFooter = styled.footer`
   background-color: #202020;
   padding: 50px 0  25px 0;
   border-top-color: #696969;
   border: 1px solid #696969;
   bottom: 0;
   @media screen and (max-width: 768px){
    padding-bottom: 50px;
   }
`
const SocialList = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   color: white;
   font-size: 16px;
   font-weight: 600;
   @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
   }
`
const SocialIconLink = styled.ul`
   display: flex;
   gap: 15px;
   cursor: pointer;
   @media screen and (max-width: 768px){
    gap: 0 20px;
   }
`
import React from "react";
import styled from "styled-components";
import { ImageBox, InfoImage } from "./ImageBox";
import personalImage from "../../../../assets/images/jpgImages/section1Image.jpeg"
import { InfoBox } from "../InfoWrapper /InfoBox/InfoBox";
import { Container } from "../../../../components/container/Container";
import { Icon } from "../../../../components/icon/Icon";

export let InfoWrapper = () => {
    return <InfoWrapperBox>
        <Container>
            <GlobalInfoBox>

                <BlockStyled>
                    <InfoBox />
                    <ImageBox>
                        <InfoImage src={personalImage} />
                    </ImageBox>
                </BlockStyled>

                <ArrowIcon>
                    <Icon iconId={"arrow"} /> Featured Work
                </ArrowIcon>


            </GlobalInfoBox>
        </Container>
    </InfoWrapperBox>
}

const InfoWrapperBox = styled.section`
   background-color: #202020;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`
const BlockStyled = styled.section`
   display: flex;
   @media screen and (max-width:768px ) {
    flex-direction: column-reverse;
    align-items: center;
   }
`

const GlobalInfoBox = styled.div`
   display: block;
   padding: 210px 0 40px 0;
   @media screen and (max-width:480px ) {
    padding: 150px 0 40px 0;
   }
`

const ArrowIcon = styled.a`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 16px;
    color: #DEDEDE;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
    cursor: pointer;
    padding: 100px 0 50px 0;
    @media screen and (max-width: 1254px) {
        padding: 100px 0 0 0;
    }
`

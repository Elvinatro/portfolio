import React from "react";
import styled from "styled-components";
import Personal1 from "../../../../assets/images/jpgImages/personal1.jpeg";
import Personal2 from "../../../../assets/images/jpgImages/personal2.jpeg";
import Personal3 from "../../../../assets/images/jpgImages/personal3.jpeg";
import { Container } from "../../../../components/container/Container";

export const PersonalWrapper = () => {
    return <Wrapper>
        <Container>
            <h2>Personal Projects</h2>
            <VisualContainer>
                <VisualImage src={Personal1} />
                <VisualImage src={Personal2} />
                <VisualImage src={Personal3} />
            </VisualContainer>
        </Container>
    </Wrapper>
}

const Wrapper = styled.section`
    background-color: #202020;
    padding-bottom:150px 0 150px 0;
    h2{
        text-align: center;
        color: white;
        margin-bottom: 60px;
        font-size: 36px;
        @media screen and (max-width: 480px) {
        font-size:28px;
    }
    }
`

const VisualImage = styled.img`
    width: 395px;
    height: 550px;
    border-radius: 4px;
    object-fit: cover;
    @media screen and (max-width:1280px ) {
        width: 360px;
        height: 580px;
    }
`
const VisualContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`
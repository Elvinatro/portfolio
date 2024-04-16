import React from "react";
import styled from "styled-components";
import VisualPics from "../../../../assets/images/jpgImages/rectangle.jpeg";
import VisualPics2 from "../../../../assets/images/jpgImages/circle.jpeg";
import VisualPics3 from "../../../../assets/images/jpgImages/deco.jpeg";
import VisualPics4 from "../../../../assets/images/jpgImages/stairs.jpeg";
import VisualPics5 from "../../../../assets/images/jpgImages/silverball.jpeg";
import VisualPics6 from "../../../../assets/images/jpgImages/window.jpeg";
import { Container } from "../../../../components/container/Container";

export let VisualWrapper = () => {
    return <Wrapper>
        <h2>Visual Explorations</h2>

        <Container>
            <VisualContainer>

                <VisualCard>
                    <VisualImage src={VisualPics} />
                </VisualCard>

                <VisualCard>
                    <VisualImage src={VisualPics2} />
                </VisualCard>

                <VisualCard>
                    <VisualImage src={VisualPics3} />
                </VisualCard>

                <VisualCard>
                    <VisualImage src={VisualPics4} />
                </VisualCard>

                <VisualCard>
                    <VisualImage src={VisualPics5} />
                </VisualCard>

                <VisualCard>
                    <VisualImage src={VisualPics6} />
                </VisualCard>

            </VisualContainer>
        </Container>

    </Wrapper>
}


const Wrapper = styled.section`
    background-color: #202020;
    padding: 200px 0;
    h2{
        text-align: center;
        color: white;
        margin-bottom: 60px;
        font-size: 36px;
        @media screen and (max-width: 480px) {
        font-size:28px;
    }
    }
    @media screen and (max-width: 1254px) {
        padding: 150px 0;
    }
`
const VisualCard = styled.div`
    overflow: hidden;
`
const VisualImage = styled.img`
    width: 395px;
    height: 395px;
    border-radius: 4px;
    object-fit: cover;
    @media screen and (max-width: 768px){
        width: 366px;
        height: 366px;
    }
    transition: transform .6s ease;
   &:hover{
      transform: scale(1.1);cursor: pointer;
      overflow: hidden;
   }
`
const VisualContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`
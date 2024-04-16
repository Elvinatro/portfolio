import styled from "styled-components";
import Image1 from "../../../../assets/images/jpgImages/img-1.jpeg";
import Image2 from "../../../../assets/images/jpgImages/img-2.jpeg";
import Image3 from "../../../../assets/images/jpgImages/img-3.jpeg";
import Image4 from "../../../../assets/images/jpgImages/img-4.jpeg";
import { ImageBox, ImageCard } from "./ImageBox";
import { Container } from "../../../../components/container/Container";

export let ProjectWrapper = () => {
    return <Wrapper>
        <Container>

            <ImageBox>

                <ProjectCard>
                    <ImageCard src={Image1} />
                    <h3>InVersion</h3>
                </ProjectCard>

                <ProjectCard>
                    <ImageCard src={Image2} />
                    <h3>InVersion</h3>
                </ProjectCard>

                <ProjectCard>
                    <ImageCard src={Image3} />
                    <h3>InVersion</h3>
                </ProjectCard>

                <ProjectCard>
                    <ImageCard src={Image4} />
                    <h3>InVersion</h3>
                </ProjectCard>

            </ImageBox>

        </Container>
    </Wrapper>
}

const Wrapper = styled.section`
    background-color: #202020;
    flex-direction: column;
    padding-bottom: 170px;
    @media screen and (max-width: 1254px) {
        padding-bottom: 0;
    }
`

const ProjectCard = styled.div`
    width: 600px;
    height: 800px;
    position: relative;
    transition: .6s ease-in all;
    &:nth-child(even){
      transform: translateY(120px);
   }
    h3{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      color: white;
      display: none;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      font-weight: 700;
   }
   &:hover {
    h3{
      display: flex;
      transition: 2s ease-in all;
    }}

   @media screen and (max-width: 1254px) {
    &:nth-child(even){
      transform: translateY(0);
   }
   height: 650px;
   width: 450px;
   }
   @media screen and (max-width: 768px) {
    width: 366px;
    height: 550px;
   }
`

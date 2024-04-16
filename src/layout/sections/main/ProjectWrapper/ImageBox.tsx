import styled from "styled-components";

export const ImageBox = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 20px;
`;

export const ImageCard = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 4px;
   object-fit: cover;
   overflow: hidden;
   cursor: pointer;
   transition: 0.4s ease-in all;
   &:hover{
      opacity: 35%;
   }
`;

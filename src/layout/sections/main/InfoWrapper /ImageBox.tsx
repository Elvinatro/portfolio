import styled from "styled-components";


export const ImageBox = styled.div`
  width: 40%;
  margin-bottom: 100px;
  
  @media screen and (max-width:1028px ) {
   justify-content: center;
   display: flex;
   align-items: center;
   }
`;

export const InfoImage = styled.img`
   width: 400px;
   height: 400px;
   object-fit: cover;
   border-radius: 50%;
   @media screen and (max-width:1028px ) {
      width: 350px;
      height: 350px;
   }

   @media screen and (max-width:480px ) {
    min-width: 300px;
    height: 300px;
   }
`;
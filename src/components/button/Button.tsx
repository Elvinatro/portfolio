import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Button = () => {
   return <BtnWrapper>
       <Icon viewBox="0 0 23 18" iconId={"btn"} />hi@yourname.com
   </BtnWrapper>
}


 const BtnWrapper = styled.button`
   background-color: #9D9D9D;
   border-radius: 4px;
   color: white;
   font-size: 18px;
   padding: 8px 42px;
   border: none;
   font-weight: 500;
   display: flex;
   align-items: center;
   cursor: pointer;
   transition: 0.3s ease-in all;
   &:hover{
      background-color: white;
      color: #9D9D9D;
   }
   svg{
      color: #9D9D9D;
      fill: currentColor;
      margin-right: 20px;
   }

   @media screen and (max-width:480px ) {
        padding: 8px 28px;
        font-size: 18px;
   }
`;


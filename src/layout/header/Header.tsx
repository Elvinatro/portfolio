import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { BurgerMenu } from "../../components/menu/BurgerMenu";
import { Container } from "../../components/container/Container";

export let Header = () => {
    return <StyledHeader>
        <Container>
            <Navbar>

                <Logo />
                <Menu />
                <BurgerMenu />

            </Navbar>
        </Container>
    </StyledHeader>
}


const StyledHeader = styled.header`
   width: 100%;
   background-color: #323232;
   padding:20px 0;
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
`;
const Navbar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;


import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import logo from "@/images/logo_navbar.svg";
import ButtonFixed from "@/components/button/button";

const NavbarSection = styled.nav`
    position: relative;
    display: flex;
    height: 70px;
    align-items: center;
    margin: 10px auto;
    justify-content: space-between;
`

const NavbarRightSide = styled.div<{ $btnState: boolean }>`
    width: 50%;

    @media (max-width: 1000px) {
        width: 60%;
    };

    @media (max-width: 650px) {
        display: none;
    }

    ${props => props.$btnState && `
        display: flex !important;
        position: absolute;
        height: 250%;
        width: 100%;
        background-color: red;
        top: 0;
        right: 0;
        transform: translateY(39.5%);
        background-color: $colors-secondary-button;
        box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.3);
        z-index: 10;
    `}
`

const NavbarLeftSide = styled.div`
    display: flex;
    align-items: center;
    width: 30%;

    img {
        height: 130px;
        margin-left: -23px;
        cursor: pointer;
    }
`

const NavbarLinks = styled.div<{ $btnState: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    ${props => props.$btnState && `
        flex-direction: column;
        padding: 15px 0px;
        width: 100%;
        justify-content: space-between;
    `}
`

const Heading = styled.a`
    font-family: 'Roboto', sans-serif;
`

const Separator = styled.div`
    height: 30px;
    width: 2px;
    background-color: black;

    @media (max-width: 1000px) {
        display: none;
    };
`

const NavbarBurger = styled.button<{ $btnState: boolean }>`
    display: none;
    flex-direction: column;
    gap: 6.5px;
    background-color: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    };

    @media (max-width: 650px) {
        display: flex;
    };

    ${props => props.$btnState && `
        ${BurgerLine}:nth-child(1) {
            transform: rotate(45deg);
        }

        ${BurgerLine}:nth-child(2) {
            transition: .25s;
            width: 0;
        }

        ${BurgerLine}:nth-child(3) {
            transform: rotate(-45deg);
        }
    `}
`

const BurgerLine = styled.div`
    transform-origin: left;
    width: 25px;
    height: 2px;
    background-color: $colors-primary;
    transition: .5s;
`

function Navbar() {

    const [btnState, setbtnState] = useState(false);

    function handleClick() {
        setbtnState(!btnState);
    }

    return (
        <NavbarSection id="navbar">

            <NavbarLeftSide>
                <Link href="/">
                    <img src={logo.src} alt="Logo of SleekSite.store" />
                </Link>
            </NavbarLeftSide>

            <NavbarRightSide $btnState={btnState}>
                <NavbarLinks $btnState={btnState}>
                    <Heading href="#projects">
                        <p>Projets</p>
                    </Heading>
                    <Separator />
                    <Heading href="#skills">
                        <p>Compétences</p>
                    </Heading>
                    <Separator />
                    <ButtonFixed value="Contact" primary={false} stretch={true} />
                </NavbarLinks>
            </NavbarRightSide>

            <NavbarBurger $btnState={btnState} onClick={handleClick}>
                <BurgerLine />
                <BurgerLine />
                <BurgerLine />
            </NavbarBurger>
        </NavbarSection>
    );
}

export default Navbar;
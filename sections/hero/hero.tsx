import styled from "styled-components";
import ButtonFixed from "@/components/button/button";
import HeroImage from "@/components/heroImage/heroImage";

const HeroSection = styled.section`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 750px) {
            flex-direction: column;
    }
`

const HeroLeftSide = styled.div`
    width: 45%;
    color: $colors-primary;
    padding-bottom: 170px;

    @media screen and (max-width: 750px) {
            width: 100%;
            padding-bottom: 70px;
    }
`

const HeroRightSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    @media screen and (max-width: 750px) {
        width: 100%;
        padding-bottom: 70px;
        justify-content: center;
        padding-bottom: 50px;
}
`

const HeroTextContainer = styled.header`
    letter-spacing: 1px;
    margin-top: 5px;
`

const HeroTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;

    @media screen and (max-width: 450px) {
        font-size: 30px;
    }
`

const HeroName = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin-top: 6px;

    @media screen and (max-width: 450px) {
        font-size: 26px;
    }
`

const HeroCatch = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin-top: 25px;
    letter-spacing: .2px;
    line-height: 1.2;
    letter-spacing: .3px;
`

const HeroLinks = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 60px;

    @media screen and (max-width: 450px) {
        gap: 15px;
    }
`

function Hero() {
    return (
        <HeroSection>
            <HeroLeftSide>
                <HeroTextContainer>
                    <HeroTitle>Intégrateur Web</HeroTitle>
                    <HeroName>Maxence Lesage</HeroName>
                    <HeroCatch>
                        Passionné de programmation, je concevrai votre site web avec une attention méticuleuse du détail. <br />
                        Je consacrerai toute mon attention à la performance et à la fluidité utilisateur pour faire ressortir tout le potentiel de votre projet.
                    </HeroCatch>
                </HeroTextContainer>
                <HeroLinks>
                    <ButtonFixed value="Contact" primary={true} stretch={false} />
                    <a href="#projects">
                        <ButtonFixed key="btn-projects" value="Mes Projets" primary={false} stretch={false} />
                    </a>
                </HeroLinks>
            </HeroLeftSide>
            <HeroRightSide>
                <HeroImage />
            </HeroRightSide>
        </HeroSection>
    );
}

export default Hero;
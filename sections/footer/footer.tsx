import styled from 'styled-components';
import linkedin from "@/images/linkedin.png";

const FooterSection = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 30px;

    @media (max-width: 680px) {
        flex-direction: column;
        gap: 30px;
        padding: 0 20px 30px 20px;
        text-align: center;
    }

    & a {
        color: #c1575e;

        &:hover {
            text-decoration: underline;
        }
    }
`

const SocialMedia = styled.div`
    display: flex;
    gap: 20px;

    & img {
        height: 40px;
        border-radius: 7px;

        @media (max-width: 680px) {
            height: 36px;
        }
    }
`

export default function Footer() {
    return (
        <FooterSection>
            <p>
                © Site web créé avec Next.js, repository <a href="https://github.com/Maxence-Lesage/Portfolio.git">ici</a>.
            </p>
            <SocialMedia>
                <a href="https://www.linkedin.com/in/maxence-lesage-tech/">
                    <img src={linkedin.src} alt="Logo de Linkedin" />
                </a>
            </SocialMedia>
        </FooterSection>
    )
}
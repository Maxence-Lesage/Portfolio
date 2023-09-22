import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { keyframes } from 'styled-components';
import { faArrowRightLong, faMobileScreenButton, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { closeContactModal } from "@/functions/modal-behavior";

const modal_open_animation = keyframes`
0% {
    transform: translate(-50%, -50%) scale(0.5);
}

70% {
    transform: translate(-50%, -50%) scale(1.07);
}

90% {
    transform: translate(-50%, -50%) scale(.98);
}

100% {
    transform: translate(-50%, -50%) scale(1);
}
`;

const ContactModal = styled.div`
height: 600px;
width: 800px;
background-color: rgb(255, 255, 255);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 25px;
position: fixed;
top: 50%;
left: 50%;
transform-origin: center;
transform: translate(-50%, -50%);
display: none;
animation: ${modal_open_animation} 0.3s linear;

& svg {
    color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 800px) {
    width: 100%;
}
`

const ContactModalBackground = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.25);
display: none;
`

const ContactModalBottom = styled.div`
height: 1px;
`

const ContactModalHeading = styled.div`
display: flex;
align-items: center;
height: 80px;
width: 100%;
`

const ContactModalTitle = styled.h2`
font-size: 34px;
font-weight: 600;
letter-spacing: .5px;
color: rgba(0, 0, 0, 0.9);
margin-left: 50%;
transform: translateX(-50%);
height: 40px;

@media (max-width: 400px) {
    font-size: 30px;
    height: 34px;
    margin-left: calc(50% - 20px);
}
`

const ContactModalCloseIcon = styled(FontAwesomeIcon)`
position: absolute;
    right: 25px;
    height: 40px;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;

    @media (max-width: 400px) {
        height: 34px;
    }
`

const ContactModalContent = styled.div`
box-sizing: border-box;
width: 100%;
height: fit-content;
max-height: calc(100% - 80px);
padding: 0px 15px;
margin-top: -40px;
`

const ModalContentHeading = styled.h3`
font-size: 22px;
margin-bottom: 30px;
max-width: 650px;
`

const ContactModalSeparator = styled.div`
width: 100%;
display: flex;
flex-direction: row;
font-size: 22px;
font-weight: 600;
margin-top: 30px;
margin-bottom: 30px;
max-width: 500px;

&:before {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid black;
    margin: auto;
    margin-right: 10px
}

&:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid black;
    margin: auto;
    margin-left: 10px
}
`

const ContactModalMail = styled.div`
font-size: 20px;
padding-left: 15px;
color: rgb(103, 49, 49);

&:hover {
    text-decoration: underline;
    color: rgb(158, 72, 72);
}

& svg {
    margin-right: 10px;
    font-size: 28px;
    vertical-align: sub;
}

@media (max-width: 400px) {
    padding-left: 0px;

    & svg {
        display: none;
    }
}
`

function Modal() {

    return (
        <>
            <ContactModalBackground id="contact_modal_background" onClick={closeContactModal} />
            <ContactModal id="contact_modal">
                <ContactModalHeading>
                    <ContactModalTitle>Contact</ContactModalTitle>
                    <ContactModalCloseIcon icon={faXmark} onClick={closeContactModal} />
                </ContactModalHeading>
                <ContactModalContent>
                    <ModalContentHeading>1. Contactez moi directement par mail <FontAwesomeIcon icon={faArrowRightLong} /></ModalContentHeading>
                    <ContactModalMail>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:maxencelesage4@gmail.com">maxencelesage4@gmail.com</a>
                    </ContactModalMail>
                    <ContactModalSeparator>OU</ContactModalSeparator>
                    <ModalContentHeading>2. Contactez moi par téléphone <FontAwesomeIcon icon={faArrowRightLong} /></ModalContentHeading>
                    <ContactModalMail>
                        <FontAwesomeIcon icon={faMobileScreenButton} />
                        <a href="tel:+33786383685">07.86.38.36.85</a>
                    </ContactModalMail>
                </ContactModalContent>
                <ContactModalBottom />
            </ContactModal>
        </>
    );
}

export default Modal;
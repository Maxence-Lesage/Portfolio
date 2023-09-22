import styled from 'styled-components';
import image from '../../images/photo.jpg';

const Shape = styled.svg`
    max-width: 450px;
    path {
        fill: #fff;
    }
`

const Image = styled.image`
    width: 100%;
    height: 100%;
    mask: url(#maskShape);
`

export default function HeroImage() {
    return (
        <Shape viewBox="0 0 200 200">
            <mask id="maskShape">
                <path d="M60,8 Q140,0 175,30 Q213,60 200,185
                Q136,152 80,182 Q28,195 22,122
                Q-20,55 22,23 Q40,10 60,8"></path>
            </mask>
            <Image href={image.src} className="maskShape_image" x="0" y="0" preserveAspectRatio="xMidYMid slice"></Image>
        </Shape>
    );
}
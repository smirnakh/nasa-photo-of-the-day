import React from 'react';

import styled from 'styled-components'

// const dummy = {
//     date: "2022-07-20",
//     explanation: "Why does Jupiter have rings?  Jupiter's main ring was discovered in 1979 by NASA's passing Voyager 1 spacecraft, but its origin was then a mystery.  Data from NASA's Galileo spacecraft that orbited Jupiter from 1995 to 2003, however, confirmed the hypothesis that this ring was created by meteoroid impacts on small nearby moons.  As a small meteoroid strikes tiny Metis, for example, it will bore into the moon, vaporize, and explode dirt and dust off into a Jovian orbit. The featured image of Jupiter in infrared light by the James Webb Space Telescope shows not only Jupiter and its clouds, but this ring as well. Also visible is Jupiter's Great Red Spot (GRS) -- in comparatively light color on the right, Jupiter's large moon Europa -- in the center of diffraction spikes on the left, and Europa's shadow -- next to the GRS.  Several features in the image are not yet well understood, including the seemingly separated cloud layer on Jupiter's right limb.    Celestial Surprise: What picture did APOD feature on your birthday? (post 1995)",
//     hdurl: "https://apod.nasa.gov/apod/image/2207/JupiterRing_WebbSchmidt_2429.jpg",
//     title: "Jupiter and Ring in Infrared from Webb"
 
//  } 
const NasaStyles = styled.div`

height: 100vh;
margin: 0;
padding: 0;
background-color: #708c64;
border-bottom: 2px solid black;

` 
const NasaImg = styled.img`
margin-top: 0;
width: 350px;
height: 350px;
display: flex;
box-shadow: 0 6px 20px rgb(0 0 0 / 0.2);
`
const ImagParagraph = styled.div`
padding-top: 40px;
 display: flex;
 justify-content: space-evenly;
 
`
const Paragraph = styled.p`
margin-top: 0;
padding: 40px;
width: 40%;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const Header = styled.h1`
text-align: center;
margin: 0;
padding-top: 30px;
`

const Date = styled.h6`
text-align: center;
font-size: 20px;
`

const NasaPhoto = (props) => {
 
    return(
        <NasaStyles className="nasa-photo">
         
            <Header>{props.photo.title}</Header>
            <Date>{props.photo.date}</Date>
        <ImagParagraph>
            <NasaImg src={props.photo.hdurl} alt={'nasa'}/>
            <Paragraph>{props.photo.explanation}</Paragraph>
        </ImagParagraph> 
        </NasaStyles>
    )
}

export default NasaPhoto
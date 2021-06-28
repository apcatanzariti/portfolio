import React from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
// import './HomePageCSS.css';
import MyPhoto from '../../assets/Pic_2.jpeg';
import ComputerImage from '../../assets/computer_image.PNG'

function RenderHomePage () {
    return (
        <div className='container'>
            <NavBar />
            <StyledAboutMeContainer>
                <h1>Full Stack Web Developer, Believer in Beautiful UX/UI, Lifelong Learner</h1>

                <img className='about_me_img' src={ComputerImage} alt='Anthony Catanzariti'/>

                <StyledAboutInfo>
                    <h1>Hi, I'm Anthony. Nice to meet you.</h1>
                    <center><p>I am a full stack web developer, lover of clean code, beautiful UI, and amazing user experiences. I am constantly learning new ways to achieve them, and new technology in the process. When not coding or designing I am probably out doing something active - balance is important! Feel free to click around to see some of the projects I have been a part of! And if you'd like to know more or to collaborate on something, check out the contact page!</p></center>
                </StyledAboutInfo>
            </StyledAboutMeContainer>
        </div>
    );
}

export default RenderHomePage;

/* Styling Below This Line */

const StyledAboutMeContainer = styled.div`
    //border: solid 1px red;
    padding-top: 5rem;
    margin-top: 79px;
    width: 99.9vw;
    //height: 1600px;

    h1 {
        font-size: 2em;
    }

    img {
        //border: solid 1px black;
        margin-top: 5rem;
        filter: hue-rotate(-50deg);
        width: 40%;
        margin-bottom: -.19rem;
    }
`;

const StyledAboutInfo = styled.div`
    background-color: #0048E3;
    padding: 5rem;

    h1 {
        color: white;
        margin-bottom: 3rem;
    }

    p {
        color: white;
        font-size: 1.2em;
        line-height: 1.8rem;
        width: 35%;
    }
`;
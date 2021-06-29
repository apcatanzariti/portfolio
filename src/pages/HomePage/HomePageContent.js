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

                <center><StyledCardContainer>
                    <StyledLeftCard>
                        <img src='https://mattfarley.ca/img/icons/designer.svg' alt='pencil icon' />
                        <h3>Designer</h3>
                        <p>I love designing everything from user flows to wireframes and everything in between.</p>
                        <StyledToolsText>Design Tools:</StyledToolsText>
                        <p>Whimsical: A really intuitive design tool for user flows and wireframing.</p>
                        <p>Trello: When working in a team, a Trello board makes it easy to keep track of tasks.</p>
                        <p>Pen & Paper: Good ol' pen and paper is sometimes the best for turning creative ideas into reality.</p>
                        <p>Figma: learning Figma at the moment, but seems like a really powerful design tool!</p>
                    </StyledLeftCard>
                    <StyledMiddleCard>
                        <img src='https://mattfarley.ca/img/icons/frontend.svg' alt='code icon' />
                        <h3>Frontend</h3>
                        <p>I value clean front end code that is not only visually pleasing, but fast and functional.</p>
                        <StyledToolsText>Dev Tools:</StyledToolsText>
                        <p>JavaScript: Skilled in JavaScript. Previously used primarily PHP, but much prefer JavaScript now.</p>
                        <p>React: An amazing JavaScript library for creating user interfaces. I love React for single page applications.</p>
                        <p>Redux: I prefer to use Redux for state management in applications. I have exposure to Context as well, but Redux is my go-to.</p>
                        <p>AntDesign: Got some exposure to AntDesign on two projects I worked on and has some really cool functionality.</p>
                    </StyledMiddleCard>
                    <StyledRightCard>
                        <img src='https://mattfarley.ca/img/icons/mentor.svg' alt='book icon' />
                        <h3>Backend</h3>
                        <p>Safely keeping track of data and making it accessible to the front end via APIs.</p>
                        <StyledToolsText>Dev Tools:</StyledToolsText>
                        <p>Node: I've used Node on past projects for backend development. Syntax similar to JavaScript and scales well.</p>
                        <p>Express: Express has been really effective in past projects for creating APIs to feed information to a frontend.</p>
                        <p>DB Designer: Tool that I prefer for designing database schemas.</p>
                        <p>Knex: Query builder. Effective for migrations and seeding data. I have used it in conjunction with Postgres, and SQLite.</p>
                    </StyledRightCard>
                </StyledCardContainer></center>
            </StyledAboutMeContainer>
        </div> //container
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
    padding: 5rem 5rem 25rem 5rem;

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

const StyledCardContainer = styled.div`
    border: solid 1px lightgray;
    border-radius: 2%;
    margin-top: -15rem;
    background-color: white;
    display: flex;
    width: 40%;
    //height: 60vh;

    h3 {
        font-size: 1.5em;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-weight: bold;
        margin-top: 3rem;
    }

    p {
        width: 70%;
        margin-top: 3rem;
        line-height: 1.5em;
    }
`;


const StyledLeftCard = styled.div`
    border-right: solid 1px lightgray;
    width: 33%;
    padding-bottom: 5rem;

    img {
        display: block;
        width: 30%;
    }
`;

const StyledMiddleCard = styled.div`
    width: 34%;
    padding-bottom: 5rem;

    img {
        display: block;
        width: 30%;
    }
`;

const StyledRightCard = styled.div`
    border-left: solid 1px lightgray;
    width: 33%;
    padding-bottom: 5rem;

    img {
        display: block;
        width: 25%;
    }
`;

const StyledToolsText = styled.p`
    color: #0048E3;
    font-weight: bold;
    font-size: 1.1em;
`;
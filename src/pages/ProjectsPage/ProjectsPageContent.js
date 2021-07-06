import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

function ProjectsPageContent () {
    const [BGCButton, setBGCButton] = useState(false);
    const [FPButton, setFPButton] = useState(false);
    const [SCButton, setSCButton] = useState(false);
    const [AFButton, setAFButton] = useState(false);

    const ToggleVisible = (project) => {
        if (project === 'BGClub') {
            setBGCButton(true);
            setFPButton(false);
            setSCButton(false);
            setAFButton(false);
        } else if (project === 'FP') {
            setBGCButton(false);
            setFPButton(true);
            setSCButton(false);
            setAFButton(false);
        } else if (project === 'SC') {
            setBGCButton(false);
            setFPButton(false);
            setSCButton(true);
            setAFButton(false);
        } else if (project === 'AF') {
            setBGCButton(false);
            setFPButton(false);
            setSCButton(false);
            setAFButton(true);
        }
    };

    return (
        <>
            <NavBar />
            <StyledProjectContainer>
                <h1>Choose a project to see some details about it</h1>
                <StyledProjectIconsContainer>
                    <StyledIcon onClick = {() => ToggleVisible('BGClub')}><img src='https://www.bgchartford.org/wp-content/uploads/2018/12/favicon.png' alt='Boys and Girls Club logo'/><div><p>Boys and Girls Club of America</p></div></StyledIcon>
                    <StyledIcon onClick = {() => ToggleVisible('FP')}><img src='https://user-content.givegab.com/uploads/group/logo/475393/f4cb8e3658f999caceb4153fd70a662561736ef8.png' alt='Family Promise logo'/><div><p>Family Promise</p></div></StyledIcon>
                    <StyledIcon onClick = {() => ToggleVisible('SC')}><img src='https://cloudevents.io/img/logos/integrations/triggermesh.png' alt='School In the Cloud logo'/><div><p>School In The Cloud</p></div></StyledIcon>
                    <StyledIcon onClick = {() => ToggleVisible('AF')}><img src='https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png' alt='GitHub logo'/><div><p>Anywhere Fitness</p></div></StyledIcon>
                </StyledProjectIconsContainer>
                <StyledProjectContentContainer>
                    { BGCButton && 
                        <>
                            <div>
                            <h1>Boys and Girls Club Sentiment Tracking Application</h1>
                            <p>The Boys and Girls Club Sentiment Tracker is an application that gathers and records data for thousands of kids as they check in/out of clubs and utilize the activities within the clubs. This data is actionable, allowing leadership to make more meaningful, impactful decisions about where to allocate limited resources.</p>
                            </div>

                            <center><StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Technical Project Lead: </span>This is some info on being the TPL for this project!</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech</h3>
                                <p><span>Slack: </span>Here is some info on using Slack!</p>
                                <p><span>Trello: </span>Here is some info on using Trello!</p>
                                <p><span>Google Docs: </span>Here is some info on using Google Docs!</p>
                                <p><span>AirTable: </span>Here is some info on using AirTable!</p>
                            </StyledMiddleCard>
                            <StyledRightCard>
                                <h3>Links</h3>
                                <p><span>GitHub: </span>GitHub link here!</p>
                                <p><span>Live Demo: </span>Live demo stuff here if applicable.</p>
                            </StyledRightCard>
                            </StyledCardContainer></center>
                        </>
                    }

                    { FPButton && 
                        <>
                            <div>
                            <h1>Family Promise Service Tracker</h1>
                            <p>The Boys and Girls Club Sentiment Tracker is an application that gathers and records data for thousands of kids as they check in/out of clubs and utilize the activities within the clubs. This data is actionable, allowing leadership to make more meaningful, impactful decisions about where to allocate limited resources.</p>
                            </div>

                            <center><StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Frontend Development: </span>This is some info on being a frontend dev for this project!</p>
                                <p><span>Design Lead: </span>This is some info on being the design lead for this project!</p>
                                <p><span>Backend Development: </span>This is some info on being a backend dev for this project!</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech</h3>
                                <p><span>JavaScript: </span>Here is some info on using JavaScript!</p>
                                <p><span>React: </span>Here is some info on using React!</p>
                                <p><span>Redux: </span>Here is some info on using Redux!</p>
                                <p><span>Node: </span>Here is some info on using Node!</p>
                                <p><span>Whimsical: </span>Here is some info on using Whimsical!</p>
                                <p><span>AntDesign: </span>Here is some info on using AntDesign!</p>
                                <p><span>Okta: </span>Here is some info on using Okta!</p>
                            </StyledMiddleCard>
                            <StyledRightCard>
                                <h3>Links</h3>
                                <p><span>GitHub: </span>GitHub link here!</p>
                                <p><span>Live Demo: </span>Live demo stuff here if applicable.</p>
                            </StyledRightCard>
                            </StyledCardContainer></center>
                        </>
                    }

                    { SCButton && 
                        <>
                            <div>
                            <h1>School in the Cloud</h1>
                            <p>The Boys and Girls Club Sentiment Tracker is an application that gathers and records data for thousands of kids as they check in/out of clubs and utilize the activities within the clubs. This data is actionable, allowing leadership to make more meaningful, impactful decisions about where to allocate limited resources.</p>
                            </div>

                            <center><StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Frontend Development: </span>This is some info on being a frontend dev for this project!</p>
                                <p><span>Design Lead: </span>This is some info on being the design lead for this project!</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech</h3>
                                <p><span>JavaScript: </span>Here is some info on using JavaScript!</p>
                                <p><span>React: </span>Here is some info on using React!</p>
                                <p><span>Redux: </span>Here is some info on using Redux!</p>
                                <p><span>Styled Components: </span>Here is some info on using Styled Components!</p>
                                <p><span>Whimsical: </span>Here is some info on using Whimsical!</p>
                            </StyledMiddleCard>
                            <StyledRightCard>
                                <h3>Links</h3>
                                <p><span>GitHub: </span>GitHub link here!</p>
                                <p><span>Live Demo: </span>Live demo stuff here if applicable.</p>
                            </StyledRightCard>
                            </StyledCardContainer></center>
                        </>
                    }

                    { AFButton && 
                        <>
                            <div>
                            <h1>Anywhere Fitness</h1>
                            <p>The Boys and Girls Club Sentiment Tracker is an application that gathers and records data for thousands of kids as they check in/out of clubs and utilize the activities within the clubs. This data is actionable, allowing leadership to make more meaningful, impactful decisions about where to allocate limited resources.</p>
                            </div>

                            <center><StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Backend Development: </span>This is some info on being a backend dev for this project!</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech</h3>
                                <p><span>Node: </span>Here is some info on using Node!</p>
                                <p><span>Express: </span>Here is some info on using Express!</p>
                                <p><span>Knex: </span>Here is some info on using Knex!</p>
                                <p><span>DB Designer: </span>Here is some info on using DB Designer!</p>
                            </StyledMiddleCard>
                            <StyledRightCard>
                                <h3>Links</h3>
                                <p><span>GitHub: </span>GitHub link here!</p>
                                <p><span>Live Demo: </span>Live demo stuff here if applicable.</p>
                            </StyledRightCard>
                            </StyledCardContainer></center>
                        </>
                    }
                </StyledProjectContentContainer>
            </StyledProjectContainer>
            <Footer />
        </>
    );
};

export default ProjectsPageContent;

/* Styling Below This Line */

const StyledProjectContainer = styled.div`
    //border: solid 1px red;
    padding-top: 5rem;
    margin-top: 79px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2em;
        color: #565656;
        margin-bottom: 2rem;
    }
`;

const StyledProjectIconsContainer = styled.div`
    //border: solid 1px blue;
    border-bottom: solid 1px lightgray;
    display: flex;
    text-align: center;
`;

const StyledIcon = styled.div`
    border: solid 1px lightgray;
    border-radius: 0%;
    margin: 2rem;

    img {
        height: 200px;
        width: 200px;
    }

    div {
        border-radius: 0%;
        margin-top: -205px;
        transition: .3s;
        height: 200px;
        width: 200px;
        background-color: black;
        opacity: 80%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        font-family: 'Roboto', Arial;
        cursor: pointer;
        // some conditional here so that when the state is "true", the opacity is 0%
    }

    div:hover {
        opacity: 0%;
    }
`;

const StyledProjectContentContainer = styled.div`
    //border: solid 1px red;
    margin-top: 2rem;
    width: 60rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #565656;

    h1 {
        color: #0058B6;
    }

    p {
        width: 100%;
        line-height: 1.4;
    }
`;

/* Cards Below */

const StyledCardContainer = styled.div`
    //border: solid 1px lightgray;
    //border-radius: 3%;
    box-shadow: 0 0 10px 0 lightgray;
    margin-top: 3rem;
    background-color: white;
    display: flex;
    width: 60rem;
    /* will need a breakpoint here. Min-width for 1000px (or 800px) probably */

    h3 {
        border-bottom: solid 1px lightgray;
        font-size: 1.5em;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        padding-bottom: 1rem;
    }

    p {
        line-height: 1.4em;
        margin-top: 1rem;
    }
`;

const StyledLeftCard = styled.div`
    border-right: solid 1px lightgray;
    width: 33%;
    padding: 2rem 2rem;

    span {
        font-weight: bold;
    }
`;

const StyledMiddleCard = styled.div`
    width: 34%;
    padding: 2rem 2rem;

    span {
        font-weight: bold;
    }
`;

const StyledRightCard = styled.div`
    border-left: solid 1px lightgray;
    width: 33%;
    padding: 2rem 2rem;

    span {
        font-weight: bold;
    }
`;
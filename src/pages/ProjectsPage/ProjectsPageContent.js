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
                    <StyledIcon active={BGCButton} onClick = {() => ToggleVisible('BGClub')}><img src='https://www.bgchartford.org/wp-content/uploads/2018/12/favicon.png' alt='Boys and Girls Club logo'/><div><p>Boys and Girls Club of America</p></div></StyledIcon>
                    <StyledIcon active={FPButton} onClick = {() => ToggleVisible('FP')}><img src='https://user-content.givegab.com/uploads/group/logo/475393/f4cb8e3658f999caceb4153fd70a662561736ef8.png' alt='Family Promise logo'/><div><p>Family Promise</p></div></StyledIcon>
                    <StyledIcon active={SCButton} onClick = {() => ToggleVisible('SC')}><img src='https://cloudevents.io/img/logos/integrations/triggermesh.png' alt='School In the Cloud logo'/><div><p>School In The Cloud</p></div></StyledIcon>
                    <StyledIcon active={AFButton} onClick = {() => ToggleVisible('AF')}><img src='https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png' alt='GitHub logo'/><div><p>Anywhere Fitness</p></div></StyledIcon>
                </StyledProjectIconsContainer>
                <StyledProjectContentContainer>
                    { BGCButton && 
                        <>
                            <div>
                            <h1>Boys and Girls Club Sentiment Tracking Application</h1>
                            <p>The Boys and Girls Club Sentiment Tracker is an application that gathers and records data for thousands of kids as they check in/out of clubs and utilize the activities within the clubs. This data is actionable, allowing leadership to make more meaningful, impactful decisions about where to allocate limited resources.</p>
                            </div>

                            <StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Technical Project Lead: </span>As the technical project lead (TPL) for this application, I led a team of 6 developers working on new features for the app. The team was made up of 2 backend developers, 2 frontend developers, and 2 data scientists. I ran meetings each day to gauge the progress of the team and to assign new tasks for the day. I also conducted stakeholder meetings with the CEO and club director to show off progress and to gather feedback.</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech Used</h3>
                                <p><span>Slack: </span>Utilized Slack for team communication. Set up separate channels for each role as well as pull requests, so that each channel stayed organized and urgent messages could be seen quickly. All important information and links were pinned in relevant channels as well.</p>
                                <p><span>Trello: </span>Trello was used to keep tasks organized. Could create a task, create a checklist for that task, and then tag the appropriate team members that needed to work on it. Once it was complete, the card would be moved over to a completed section. Bugs were kept track of in this way as well.</p>
                                <p><span>Google Docs: </span>Made use of Google Docs to create documents as a team. Real time collaboration using this was key, and it allowed team members to take notes in real time - during stakeholder meetings for example.</p>
                                <p><span>AirTable: </span>AirTable was used in order to keep track of team members and attendance to meetings. Has much more functionality but I used it for fairly basic tasks.</p>
                            </StyledMiddleCard>
                            <StyledRightCard>
                                <h3>Links</h3>
                                <p><span>Frontend Repo: </span><a href='https://github.com/apcatanzariti/bg-emotion-tracker-fe' target='_blank'>Click Here</a></p>
                                <p><span>Backend Repo: </span><a href='https://github.com/apcatanzariti/bg-emotion-tracker-be' target='_blank'>Click Here</a></p>
                                <p><span>Live Demo: </span>None at this time.</p>
                            </StyledRightCard>
                            </StyledCardContainer>
                        </>
                    }

                    { FPButton && 
                        <>
                            <div>
                            <h1>Family Promise Service Tracker</h1>
                            <p>The Family Promise Service Tracker is an application that allows Service Workers to take notes on recipients and to track resources. The application also has functionality for Program Managers to add Programs and Services to be offered, and an Admin Dashboard to manage employees.</p>
                            </div>

                            <StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Frontend Development: </span>Dashboards for the three roles (Admin, Program Manager, Service Worker) did not exist in the codebase when we took over the project, so I programmed them from the ground up.</p>
                                <p><span>Design Lead: </span>As the design lead, I created example user flows to ensure the UI/UX was optimal, and created wireframes for each page which were used as a visual reference when programming those pages. Also collaborated with team members on one-off design/style choices where applicable.</p>
                                <p><span>Backend Development: </span>I was not the primary backend developer on the team, but I did assist in some cases with endpoints that would feed relevant data to our frontend.</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech Used</h3>
                                <p><span>JavaScript: </span>Primary programming language used for this application.</p>
                                <p><span>React: </span>My personal favorite library for creating compelling user interfaces within a single page application.</p>
                                <p><span>Redux: </span>Redux was used in this application for state management. I find Redux a bit more intuitive than Context.</p>
                                <p><span>Node: </span>Node was utilized for our backend functionality.</p>
                                <p><span>Whimsical: </span>One of my favorite diagramming tools. Used Whimsical to map out user flows and to create wireframes side by side.</p>
                                <p><span>AntDesign: </span>Design library that was used by the team that worked on the application previous to our team taking over. Has some nice designs and functionality.</p>
                                <p><span>Okta: </span>Identity provider used in this application. Put in place by previous team, but I did have to work with it a bit to ensure the correct permissions were present to grant access to the appropriate dashboard, information, features, etc.</p>
                            </StyledMiddleCard>
                            <StyledRightCard>
                                <h3>Links</h3>
                                <p><span>Frontend Repo: </span><a href='https://github.com/apcatanzariti/family-promise-service-tracker-fe-b' target='_blank'>Click Here</a></p>
                                <p><span>Backend Repo: </span><a href='https://github.com/apcatanzariti/family-promise-service-tracker-be-b' target='_blank'>Click Here</a></p>
                                <p><span>Live Demo: </span>None at this time.</p>
                            </StyledRightCard>
                            </StyledCardContainer>
                        </>
                    }

                    { SCButton && 
                        <>
                            <div>
                            <h1>School in the Cloud</h1>
                            <p>School in the Cloud is an application that connects learners and volunteers. Each has a dashboard to view relevant information, and there are administrators that can log in and have unique permissions as well. I worked primarily on the frontend portion of this project.</p>
                            </div>

                            <StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Frontend Development: </span>Developed the UI components and some of the functionality for the front end of this application.</p>
                                <p><span>Design Lead: </span>Although we did not have very long to work on this project, I designed the layouts for each page and the user flow for each user role. Had input on one-off design decisions as well throughout the project.</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech Used</h3>
                                <p><span>JavaScript: </span>Primary programming language used for this application.</p>
                                <p><span>React: </span>My personal favorite library for creating compelling user interfaces within a single page application.</p>
                                <p><span>Redux: </span>Redux was used in this application for state management. I find Redux a bit more intuitive than Context.</p>
                                <p><span>Styled Components: </span>Utilized styled components (along with some CSS) to generate the look and feel of the UI for this project. Included some conditional rendering of some visuals using styled components as well.</p>
                                <p><span>Whimsical: </span>One of my favorite diagramming tools. Used Whimsical to map out user flows and to create wireframes side by side.</p>
                            </StyledMiddleCard>
                            <StyledRightCard>
                                <h3>Links</h3>
                                <p><span>Frontend Repo: </span><a href='https://github.com/apcatanzariti/School-In-The-Cloud' target='_blank'>Click Here</a></p>
                                <p><span>Live Demo: </span><a href='https://school-in-the-cloud-pied.vercel.app/' target='_blank'>Click Here</a></p>
                                <p><span>Demo as Admin: </span><br />username: "AdminTest" <br />password: "test" <br />role: "Admin"</p>
                                <p><span>Demo as Student: </span><br />username: "StudentTest" <br />password: "test" <br />role: "Student"</p>
                            </StyledRightCard>
                            </StyledCardContainer>
                        </>
                    }

                    { AFButton && 
                        <>
                            <div>
                            <h1>Anywhere Fitness</h1>
                            <p>The Boys and Girls Club Sentiment Tracker is an application that gathers and records data for thousands of kids as they check in/out of clubs and utilize the activities within the clubs. This data is actionable, allowing leadership to make more meaningful, impactful decisions about where to allocate limited resources.</p>
                            </div>

                            <StyledCardContainer>
                            <StyledLeftCard>
                                <h3>Role</h3>
                                <p><span>Backend Development: </span>This is some info on being a backend dev for this project!</p>
                            </StyledLeftCard>
                            <StyledMiddleCard>
                                <h3>Tech Used</h3>
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
                            </StyledCardContainer>
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
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        font-family: 'Roboto', Arial;
        cursor: pointer;

        ${props => (props.active === true ? 'opacity: 0%;' : `opacity: 80%;`)}
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

/* Styling for Cards Below */

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
        //color: #0058B6;
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

    a {
        color: #0058B6;
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
`;
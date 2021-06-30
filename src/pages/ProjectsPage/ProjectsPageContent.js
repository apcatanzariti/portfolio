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
                        <p>this is what comes up when pressing the BG Club button!</p>
                    }

                    { FPButton && 
                        <p>this is what comes up when pressing the Family Promise button!</p>
                    }

                    { SCButton && 
                        <p>this is what comes up when pressing the School in the Cloud button!</p>
                    }

                    { AFButton && 
                        <p>this is what comes up when pressing the Anywhere Fitness button!</p>
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
        text-align: center;
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
    padding: 2%;
    margin-top: 2rem;
    width: 60rem;
`;
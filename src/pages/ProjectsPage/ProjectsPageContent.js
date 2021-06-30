import React from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

function ProjectsPageContent () {

    return (
        <>
            <NavBar />
            <StyledProjectContainer>
                <StyledProjectIconsContainer>
                    <StyledIcon><img src='https://www.bgchartford.org/wp-content/uploads/2018/12/favicon.png' alt='Boys and Girls Club logo'/><div><p>Boys and Girls Club of America</p></div></StyledIcon>
                    <StyledIcon><img src='https://user-content.givegab.com/uploads/group/logo/475393/f4cb8e3658f999caceb4153fd70a662561736ef8.png' alt='Family Promise logo'/><div><p>Family Promise</p></div></StyledIcon>
                    <StyledIcon><img src='https://cloudevents.io/img/logos/integrations/triggermesh.png' alt='School In the Cloud logo'/><div><p>School In the Cloud</p></div></StyledIcon>
                    <StyledIcon><img src='https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png' alt='GitHub logo'/><div><p>Anywhere Fitness</p></div></StyledIcon>
                </StyledProjectIconsContainer>
                <StyledProjectContentContainer></StyledProjectContentContainer>
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
`;

const StyledProjectIconsContainer = styled.div`
    //border: solid 1px blue;
    border-bottom: solid 1px lightgray;
    display: flex;
    text-align: center;
`;

const StyledIcon = styled.div`
    border: solid 1px lightgray;
    border-radius: 5%;
    margin: 2rem;

    img {
        height: 200px;
        width: 200px;
    }

    div {
        border-radius: 5%;
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
    }

    div:hover {
        opacity: 0%;
    }
`;

const StyledProjectContentContainer = styled.div`
    border: solid 1px red;
    margin-top: 3rem;
    width: 60rem;
`;
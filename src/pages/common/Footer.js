import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

function Footer () {
    const history = useHistory();

    return (
        <StyledFooterContainer>
            <StyledFooterContent>
            <StyledText><p>Thanks for checking out my website! 😁</p></StyledText>
            <StyledLinks>
                <p><Link to='/projects'>Projects</Link></p>
                <p><Link to='/'>Demos</Link></p>
                <p><Link to='/contact'>Contact</Link></p>
            </StyledLinks>
            </StyledFooterContent>
        </StyledFooterContainer>
    );
};

export default Footer;

/* Styling Below This Line */

const StyledFooterContainer = styled.div`
    //border-top: solid 1px #0058B6;
    width: 100%;
    //position: fixed;
    color: #565656;
    background-color: #FFFFFF;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1em;
    padding: 3rem 0 3rem 0;
    margin-top: 5rem;
    box-shadow: 0px 0px 10px 0px lightgray;

    a {
        text-decoration: none;
        color: #565656;
    }

    a:hover {
        color: #0058B6;
    }
`;

const StyledFooterContent = styled.div`
    //border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.div`
    //border: solid 1px orange;
    border-right: solid 1px lightgray;
    padding-right: 1rem;
`;

const StyledLinks = styled.div`
    //border: solid 1px blue;
    color: #565656;
    //width: 12%;
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
`;